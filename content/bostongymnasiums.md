---
title: "Boston's Gymnasiums, 1909-1922"
description: "An interactive map of municipal and private gymnasiums in Boston, with historical attendance data and research context."
lastmod: "2024-06-25"
slug: "bostongymnasiums"
---
This visualization maps the geography of fitness in Boston, showing where the city's public and private gymnasiums operated between 1909 and 1922. Click on each location to see attendance trends over this thirteen-year period. The map reveals both the strategic placement of municipal gymnasiums in working-class immigrant neighborhoods and the concentration of private facilities in wealthier residential areas. Most striking is the attendance data from 1918, when the influenza pandemic swept through Boston and transformed gymnasiums into emergency medical infrastructure. You can see attendance plummet as the city converted many facilities, especially those near the harbor where the naval presence was strong, into makeshift hospitals. This repurposing of public gymnasiums offers a powerful window into how the city's priorities shifted in response to crisis, temporarily ending the very institutions that reformers and physical educators had spent decades promoting as essential to public health and moral welfare. For more about the fitness landscape in Boston check out my book _Shaping Up: Physical Fitness Initiatives for Women, 1880-1965_ which is forthcoming from the University of Virginia Press in Spring 2027.

{{< rawhtml >}}
<style>
    :root {
        --cobalt: #1A39E0;
        --public: #E4B30A;
        --private: #702963;
        --park: #2E7D32;
        --ink: #1a1a1a;
        --muted: #6b6b6b;
        --hairline: #e5e5e5;
    }
    * { box-sizing: border-box; }
    .gym-viz { font-family: 'Hanken Grotesk', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; color: var(--ink); margin: 40px 0; }
    .gym-viz-wrap { max-width: 100%; margin: 0; padding: 0; }

    .topbar { display: flex; align-items: center; justify-content: space-between; gap: 28px; flex-wrap: wrap; margin-bottom: 20px; padding: 16px 20px; background: #fff; border: 1px solid var(--hairline); border-radius: 6px; }
    .slider-group { display: flex; align-items: center; gap: 14px; flex: 1 1 320px; min-width: 280px; }
    .slider-group label { font-weight: 700; font-size: 13px; text-transform: uppercase; letter-spacing: .05em; color: var(--muted); white-space: nowrap; }
    .year-badge { font-size: 30px; font-weight: 800; color: var(--cobalt); min-width: 80px; font-variant-numeric: tabular-nums; }
    #yearSlider { flex: 1; min-width: 160px; accent-color: var(--cobalt); height: 6px; }
    .playbtn { padding: 9px 16px; background: var(--cobalt); color: #fff; border: none; border-radius: 4px; cursor: pointer; font-weight: 600; font-size: 13px; }
    .playbtn:hover { background: #1430b8; }
    .toggles { display: flex; gap: 16px; align-items: center; font-size: 13px; flex: 0 0 auto; }
    .toggles label { display: flex; align-items: center; gap: 6px; cursor: pointer; user-select: none; }


    #map { height: 540px; border-radius: 6px; border: 1px solid var(--hairline); }
    .panel { background: #fff; border: 1px solid var(--hairline); border-radius: 6px; padding: 18px; }
    .panel h2 { margin: 0 0 4px; font-size: 15px; font-weight: 700; }
    .panel .sub { margin: 0 0 14px; font-size: 12px; color: var(--muted); }

    .legend { display: flex; gap: 18px; flex-wrap: wrap; margin-top: 12px; font-size: 12.5px; color: var(--muted); }
    .legend span { display: inline-flex; align-items: center; gap: 6px; }
    .dot { display: inline-block; border-radius: 50%; }

    .chart-box { margin-top: 24px; }
</style>

<div class="gym-viz">
    <div class="gym-viz-wrap">
        <div class="topbar">
            <div class="slider-group">
                <label for="yearSlider">Year</label>
                <span class="year-badge" id="yearDisplay">1915</span>
                <input type="range" id="yearSlider" min="0" max="9" value="6" step="1">
                <button class="playbtn" id="playBtn">▶ Play</button>
            </div>
            <div class="toggles">
                <label><input type="checkbox" id="tWards" checked> Wards</label>
                <label><input type="checkbox" id="tParks"> Parks</label>
            </div>
        </div>

        <div>
            <div id="map"></div>
            <div class="legend">
                <span><i class="dot" style="width:16px;height:16px;background:var(--public);opacity:.8"></i> Municipal gym (size = attendance)</span>
                <span><i class="dot" style="width:10px;height:10px;background:var(--private)"></i> Private gym</span>
                <span><i class="dot" style="width:10px;height:10px;background:var(--park)"></i> Park / playground</span>
            </div>
        </div>

        <div class="panel chart-box">
            <h2>Total municipal gymnasium attendance, 1909–1919</h2>
            <p class="sub">The shaded band marks the 1918–1919 influenza pandemic. (1914 and post-1919 figures were not reported.)</p>
            <canvas id="chart" height="90"></canvas>
        </div>
    </div>
</div>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.css" crossorigin="" referrerpolicy="no-referrer">
<script src="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.js" crossorigin="" referrerpolicy="no-referrer"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.1/chart.umd.min.js" crossorigin="" referrerpolicy="no-referrer"></script>

<script>
let DATA = null, map, wardLayer, gymLayer, parkLayer, chart;
let years = [], currentIdx = 6, playTimer = null;

function wardFileForYear(y) {
    if (y <= 1912) return 'wards_1895_1912.geojson';
    if (y <= 1914) return 'wards_1913_1914.geojson';
    return 'wards_1915_1925.geojson';
}

async function init() {
    DATA = await (await fetch('/bostongyms/data/bostondata.json')).json();
    years = DATA.years;
    currentIdx = years.indexOf(1915) >= 0 ? years.indexOf(1915) : 0;

    document.getElementById('yearSlider').max = years.length - 1;
    document.getElementById('yearSlider').value = currentIdx;

    map = L.map('map', { scrollWheelZoom: false }).setView([42.34, -71.08], 12);
    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        attribution: '© OpenStreetMap, © CARTO', subdomains: 'abcd', maxZoom: 19
    }).addTo(map);
    map.on('click', () => map.scrollWheelZoom.enable());

    wardLayer = L.layerGroup().addTo(map);
    gymLayer = L.layerGroup().addTo(map);
    parkLayer = L.layerGroup();

    buildChart();
    bindEvents();
    await render();
}

const wardCache = {};
async function loadWards(file) {
    if (!wardCache[file]) wardCache[file] = await (await fetch('/bostongyms/data/' + file)).json();
    return wardCache[file];
}

async function render() {
    const year = years[currentIdx];
    document.getElementById('yearDisplay').textContent = year;
    document.getElementById('yearSlider').value = currentIdx;

    wardLayer.clearLayers();
    if (document.getElementById('tWards').checked) {
        const gj = await loadWards(wardFileForYear(year));
        L.geoJSON(gj, {
            style: { color: '#9a9a9a', weight: 1, fillColor: '#cfcfcf', fillOpacity: 0.18 },
            onEachFeature: (f, lyr) => {
                const n = f.properties.Ward_Num;
                if (n != null) lyr.bindTooltip('Ward ' + n, { sticky: true });
            }
        }).addTo(wardLayer);
    }

    gymLayer.clearLayers();
    const att = DATA.attendance[year] || {};
    DATA.gyms.forEach(g => {
        const isPublic = g.type === 'public';
        const rec = att[g.id];
        const total = rec ? rec.total : 0;
        const radius = isPublic ? Math.max(5, Math.sqrt(total) / 12) : 6;
        const color = isPublic ? '#E4B30A' : '#702963';
        const m = L.circleMarker([g.lat, g.lon], {
            radius, fillColor: color, color: '#fff', weight: 1.5,
            opacity: 1, fillOpacity: 0.82
        });
        let html = `<strong>${g.name}</strong><br><span style="color:#666">${isPublic ? 'Municipal' : 'Private'} gymnasium</span>`;
        if (isPublic) {
            html += total
                ? `<br>${year} attendance: <strong>${total.toLocaleString()}</strong>`
                : `<br><em style="color:#999">No ${year} data</em>`;
        }
        m.bindPopup(html);
        gymLayer.addLayer(m);
    });

    parkLayer.clearLayers();
    DATA.parks.forEach(p => {
        const m = L.circleMarker([p.lat, p.lon], {
            radius: 5, fillColor: '#2E7D32', color: '#fff', weight: 1, fillOpacity: 0.7
        });
        m.bindPopup(`<strong>${p.name}</strong><br><span style="color:#666">${p.type || 'Park / playground'}</span>`);
        parkLayer.addLayer(m);
    });

    highlightChart(year);
}

function yearlyTotals() {
    return years.map(y => {
        const att = DATA.attendance[y] || {};
        return Object.values(att).reduce((s, r) => s + r.total, 0);
    });
}

function buildChart() {
    const ctx = document.getElementById('chart');
    const totals = yearlyTotals();
    chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: years,
            datasets: [{
                data: totals, borderColor: '#1A39E0',
                backgroundColor: 'rgba(26,57,224,.08)', borderWidth: 2.5,
                fill: true, tension: 0.3,
                pointRadius: years.map((y, i) => i === currentIdx ? 6 : 3),
                pointBackgroundColor: years.map((y) => y === 1915 ? '#1A39E0' : '#1A39E0')
            }]
        },
        options: {
            responsive: true, maintainAspectRatio: true,
            plugins: {
                legend: { display: false },
                tooltip: { callbacks: { label: c => c.parsed.y.toLocaleString() + ' visits' } },
            },
            scales: {
                y: { beginAtZero: true, ticks: { callback: v => (v / 1000) + 'K' }, title: { display: true, text: 'Total attendance' } },
                x: { grid: { display: false } }
            }
        },
        plugins: [{
            id: 'pandemicBand',
            beforeDraw(c) {
                const x = c.scales.x, yA = c.scales.y;
                const i1 = years.indexOf(1918), i2 = years.indexOf(1919);
                if (i1 < 0) return;
                const left = x.getPixelForValue(i1), right = x.getPixelForValue(i2 >= 0 ? i2 : i1);
                const ctx2 = c.ctx;
                ctx2.save();
                ctx2.fillStyle = 'rgba(176,0,0,.08)';
                ctx2.fillRect(left, yA.top, right - left, yA.bottom - yA.top);
                ctx2.fillStyle = 'rgba(176,0,0,.6)';
                ctx2.font = '11px sans-serif';
                ctx2.fillText('1918 pandemic', left + 4, yA.top + 14);
                ctx2.restore();
            }
        }]
    });
}

function highlightChart(year) {
    const i = years.indexOf(year);
    chart.data.datasets[0].pointRadius = years.map((y, idx) => idx === i ? 7 : 3);
    chart.update('none');
}

function bindEvents() {
    document.getElementById('yearSlider').addEventListener('input', e => {
        currentIdx = +e.target.value;
        render();
    });
    document.getElementById('playBtn').addEventListener('click', togglePlay);
    document.getElementById('tWards').addEventListener('change', render);
    document.getElementById('tParks').addEventListener('change', e => {
        if (e.target.checked) parkLayer.addTo(map); else map.removeLayer(parkLayer);
    });
}

function togglePlay() {
    const btn = document.getElementById('playBtn');
    if (playTimer) {
        clearInterval(playTimer); playTimer = null; btn.textContent = '▶ Play';
        return;
    }
    btn.textContent = '❚❚ Pause';
    playTimer = setInterval(() => {
        currentIdx = (currentIdx + 1) % years.length;
        render();
        if (currentIdx === years.length - 1) { clearInterval(playTimer); playTimer = null; btn.textContent = '▶ Play'; }
    }, 1100);
}

init().catch(e => {
    console.error(e);
    document.querySelector('.gym-viz-wrap').insertAdjacentHTML('afterbegin',
        '<div style="background:#fee;border:1px solid #c00;padding:14px;border-radius:6px;margin-bottom:16px">Error loading visualization data. Please refresh.</div>');
});
</script>
{{< /rawhtml >}}


