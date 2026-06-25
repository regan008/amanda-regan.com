# Amanda Regan's Personal Website

Source code for Amanda Regan's personal website, built with Hugo and Tailwind CSS.

---

## Table of Contents

- [Building & Running the Site](#building--running-the-site)
- [CSS & Design System](#css--design-system)
- [Content Structure & Metadata](#content-structure--metadata)
- [SEO & Analytics](#seo--analytics)
- [Project Architecture](#project-architecture)

---

## Building & Running the Site

### Prerequisites

- **Node.js** (v14+) and npm
- **Hugo** (extended version, v0.87+)

### Installation

```bash
# Install dependencies
npm install

# Start development server (runs CSS watcher + Hugo dev server)
npm run dev

# Build CSS for production
npm run css:build

# Build site for production
npm run build
```

### Development Workflow

**Watch CSS during development:**
```bash
npm run css:dev
```
This watches `assets/css/main.css` and rebuilds `static/css/style.css` whenever Tailwind classes change. Run this in parallel with Hugo.

**Start Hugo dev server** (in another terminal):
```bash
hugo server
```

**View site:** http://localhost:1313

---

## CSS & Design System

### Color Palette

The site uses two primary colors in a minimalist palette:

| Color | Value | Usage |
|-------|-------|-------|
| **Porcelain** | `#F4F4F2` | Main background, secondary sections |
| **Cobalt** | `#1A39E0` | Links, accents, primary interactive elements |
| **Ink** | `#131313` | Text, headings, darkest elements |
| **Gray** | `#6B6B6B` | Secondary text, inactive elements |

### Typography

Three-typeface system defined in `tailwind.config.js`:

| Font | Family | Usage |
|------|--------|-------|
| **Heading** | Bricolage Grotesque | H1–H3, large display text |
| **Sans** | Hanken Grotesk | Body text, paragraphs, list items |
| **Mono** | IBM Plex Mono | Code, labels, small UI text, eyebrows |

All fonts loaded from Google Fonts in `layouts/partials/head.html`.

### Tailwind Configuration

**Location:** `tailwind.config.js`

**Key sections:**
- `theme.extend.colors` — Define Porcelain, Cobalt, Ink tokens
- `theme.extend.fontFamily` — Font family mappings (font-heading, font-sans, font-mono)
- `theme.extend.letterSpacing` — Letter-spacing scale for tracking
- `plugins` — Typography and prose configuration

**To customize:**

1. **Add a new color:**
   ```javascript
   // tailwind.config.js
   theme.extend.colors = {
     cobalt: '#1A39E0',
     porcelain: '#F4F4F2',
     ink: '#131313',
     customColor: '#YOUR_HEX_VALUE'
   }
   ```

2. **Change an existing color:** Update the hex value in `theme.extend.colors`

3. **Adjust font sizes, spacing, or letter-spacing:** Edit the corresponding `theme.extend` section

4. **Rebuild CSS:** `npm run css:build` or `npm run css:dev`

### CSS File Structure

- **`assets/css/main.css`** — Source CSS file; imports Tailwind directives + any custom CSS
- **`static/css/style.css`** — **Generated output; do not edit directly.** Rebuilt by Tailwind CLI on every CSS:dev/build

### Adding Custom CSS

If you need custom styles beyond Tailwind utilities:

1. Add to `assets/css/main.css`:
   ```css
   @layer components {
     .my-custom-class {
       @apply px-4 py-2 bg-cobalt text-white rounded;
     }
   }
   ```

2. Rebuild: `npm run css:dev` or `npm run css:build`

---

## Content Structure & Metadata

### General Content

All content files use frontmatter (YAML) at the top. Standard fields:

```yaml
---
title: "Page Title"
description: "Unique meta description for this page (45–160 chars). Falls back to site description."
draft: false
---
```

### Publications

**Location:** `content/publications/`

**Schema:**
```yaml
---
title: "Publication Title"
description: "Brief description"
pubtype: article | book | edited-volume | review | in-collection
venue: "Journal Name"               # or Conference Name
year: 2024
publisher: "Publisher Name"         # for books/edited volumes
bookTitle: "Title of the Edited Book"  # for in-collection (book chapters) only
isbn: "978-0-000-00000-0"           # for books/chapters with no DOI
coauthors:                          # optional; list of co-authors
  - "Co-Author Name"
link: "https://doi.org/10.xxxx/xxx" # or full URL to article/book
---
```

**Rendered as:** Metadata feeds Google Scholar citation meta tags and renders in publication cards.

**Book chapters (`pubtype: in-collection`):** Use `bookTitle` for the edited volume's title (separate from `title`, which is the chapter title), and `publisher` for the book's publisher. Most book chapters don't have a DOI — add `isbn` instead so Scholar still has an identifier to index against.

### Events & Talks

**Location:** `content/news/`

**Schema:**
```yaml
---
title: "Event Title or Talk Title"
date: 2024-06-15
type: "talk" | "news"               # REQUIRED: distinguishes talks from news items
role: "speaker" | "panelist" | "organizer"  # OPTIONAL; used in event listing
venue: "Conference or Institution Name"
location: "City, State"              # OPTIONAL; displayed in italics
talk_title: "Title of Your Specific Talk"  # OPTIONAL; shown if different from event title
link: "https://conference.example.com/schedule"  # OPTIONAL; details/registration URL
draft: false
---
Content in markdown...
```

**Valid `role` values:**
- `"speaker"` — You're giving a talk/keynote → renders as solid Ink badge
- `"panelist"` — You're on a panel → renders as Cobalt border badge
- `"organizer"` | `"attendee"` | `""` (omit) — Renders as gray border badge

**Rendering:**
- Talks and news display on homepage in merged "Updates" section (sorted by date, most recent first)
- Type badges show `TALK` (with microphone) or `NEWS` (with document icon)
- Events page (`/news/`) lists all items with type indicators

### Courses

**Location:** `content/courses/`

**Schema:**
```yaml
---
title: "HIST 8500: Digital Methods in History"
semester: "Spring 2026"
level: "graduate"           # or "undergraduate"
credits: 3
description: "Course overview paragraph(s)"
learningObjectives:         # optional
  - "Objective 1"
  - "Objective 2"
assessment:                 # optional
  - "Type of assessment (e.g., projects, essays)"
draft: false
layout: "course"
---

# Course content in markdown...

# Weekly schedule using shortcodes:

{{< schedule >}}
{{< unit "Unit 1 · Foundations" >}}

{{< week wk="W01" dates="Jan 7" topic="Introduction" summary="Overview" due="Setup" dueDetail="Due before class" >}}
- [Read this](https://example.com)
- Assignment details
{{< /week >}}

{{< /unit >}}
{{< /schedule >}}

# Policies section:

{{< policies >}}
{{< policy >}}
**Policy Title**

Policy text in markdown...
{{< /policy >}}
{{< /policies >}}
```

### Projects

**Location:** `content/projects/`

**Schema:**
```yaml
---
title: "Project Name"
description: "1–2 sentence description"
image: "images/project-image.jpg"  # optional; featured image
status: "in-progress" | "complete" | "ongoing"
dateRange: "2023–present" | "2023"
roles:                              # optional; list of your roles
  - "Lead Developer"
  - "Historian"
category: "digital-history"         # or similar; for filtering
links:                              # optional; project URLs
  - url: "https://project.example.com"
    label: "Visit Project"
  - url: "https://github.com/regan008/project"
    label: "GitHub"
draft: false
---
Content in markdown...
```

### About Page

**Location:** `content/about.md`

**Schema:**
```yaml
---
title: "About"
description: "Unique meta description for the About page"
layout: "about"
headshot: "images/headshot-oct25-1.JPG"
intro: "Opening paragraph displayed in the hero section next to headshot. Can include markdown links."
---
Remaining bio content...
```

---

## SEO & Analytics

### Search Console & Sitemap

**Google Search Console verification:**
1. Create property at google.com/webmasters
2. Choose "HTML tag" verification
3. Copy the verification token
4. Paste into `hugo.toml`:
   ```toml
   [params]
     googleSiteVerification = "your-token-here"
   ```
5. Rebuild and deploy
6. Return to Search Console and click "Verify"
7. Submit sitemap: `https://amanda-regan.com/sitemap.xml`

**Sitemap:** Auto-generated by Hugo; found at `/sitemap.xml` after build.

### Citation Meta Tags (Google Scholar)

Publications pages automatically include Highwire meta tags for Google Scholar indexing:

```html
<meta name="citation_title" content="...">
<meta name="citation_author" content="...">
<meta name="citation_publication_date" content="...">
<meta name="citation_journal_title" content="...">
<meta name="citation_publisher" content="...">
<meta name="citation_inbook_title" content="...">  <!-- in-collection only -->
<meta name="citation_doi" content="...">           <!-- when link is a doi.org URL -->
<meta name="citation_isbn" content="...">          <!-- fallback when no DOI -->
```

These are generated from publication frontmatter (`title`, `year`, `venue`, `publisher`, `bookTitle`, `isbn`, `link`). To enable Scholar indexing:

1. Ensure publication frontmatter is complete (especially `link` and `year`)
2. **Identifier priority:** if `link` is a `doi.org` URL, `citation_doi` is emitted automatically. If there's no DOI (common for book chapters), add `isbn` to frontmatter and `citation_isbn` is emitted instead. Omit both fields if neither identifier exists.
3. Post-deploy, Scholar crawls the pages and indexes them (takes days/weeks)
4. Monitor Scholar profile for indexed publications

**See:** `SEO_IMPLEMENTATION.md` for full SEO checklist and Wikidata setup.

### Analytics (Plausible)

**Status:** Already integrated; no setup required.

Plausible tracks:
- Page views
- Referral sources
- Outbound link clicks
- Device/browser/country

**Dashboard:** https://plausible.io/amanda-regan.com

**See:** `PLAUSIBLE_ANALYTICS_GUIDE.md` for custom event tracking and goals.

---

## Project Architecture

### Directory Structure

```
.
├── assets/
│   └── css/
│       └── main.css              # Tailwind source; do not edit style.css directly
├── content/
│   ├── _index.md                 # Homepage
│   ├── about.md                  # About page
│   ├── publications/             # Publication posts
│   ├── news/                     # News items & talks
│   ├── courses/                  # Course syllabi
│   ├── projects/                 # Project pages
│   └── office-hours.md
├── layouts/
│   ├── _default/
│   │   └── single.html           # Default single-page template
│   ├── index.html                # Homepage template
│   ├── about/
│   │   └── single.html           # About page (longform reader)
│   ├── courses/
│   │   ├── list.html
│   │   └── single.html           # Syllabus with schedule/policies
│   ├── publications/
│   │   ├── list.html
│   │   └── single.html
│   ├── news/
│   │   ├── list.html
│   │   └── single.html
│   ├── partials/
│   │   ├── head.html             # <head> (meta tags, fonts, analytics)
│   │   ├── nav.html              # Navigation bar
│   │   ├── footer.html
│   │   ├── social-icons.html     # Social media icons (Font Awesome)
│   │   ├── person-jsonld.html    # Person schema for homepage
│   │   └── [other partials]
│   └── shortcodes/
│       ├── schedule.html         # Course schedule wrapper
│       ├── unit.html             # Schedule unit divider
│       ├── week.html             # Individual week in schedule
│       ├── policy.html           # Course policy block
│       ├── alert.html
│       └── badge.html
├── static/
│   ├── css/
│   │   └── style.css             # GENERATED; do not edit
│   ├── images/                   # Static images
│   └── robots.txt
├── hugo.toml                      # Hugo config + site params
├── tailwind.config.js             # Tailwind configuration
├── package.json                   # npm scripts + dependencies
└── README.md                      # This file
```

### Key Files for Customization

| File | Edit For |
|------|----------|
| `tailwind.config.js` | Colors, fonts, spacing, custom utilities |
| `assets/css/main.css` | Custom CSS, @layer rules |
| `hugo.toml` | Site title, social links, menu, theme params |
| `layouts/` | Page templates, markup structure |
| `content/` | Actual page/post content |
| `layouts/partials/head.html` | Meta tags, fonts, analytics scripts |

### Build Pipeline

```
npm run dev
  ├─ npm run css:dev          (Tailwind watch)
  └─ hugo server              (Hugo dev server on :1313)

npm run build
  ├─ npm run css:build        (Tailwind compile + minify)
  └─ hugo --gc --minify       (Hugo build; output to /public/)
```

---

## Technologies Used

- **[Hugo](https://gohugo.io/)** — Static site generator
- **[Tailwind CSS](https://tailwindcss.com/)** — Utility-first CSS framework
- **[Font Awesome](https://fontawesome.com/)** — Free icon library (v6.5.2)
- **[Plausible Analytics](https://plausible.io/)** — Privacy-friendly analytics

---

## Additional Documentation

- **`SEO_IMPLEMENTATION.md`** — Detailed SEO setup, Google Scholar, Wikidata, Search Console
- **`PLAUSIBLE_ANALYTICS_GUIDE.md`** — Analytics dashboard, custom events, goals

