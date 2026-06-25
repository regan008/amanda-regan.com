// Track custom events via data attributes
document.addEventListener('click', (e) => {
  const el = e.target.closest('[data-event]');
  if (!el) return;

  const eventName = el.dataset.event;
  const eventProps = {};

  // Collect all data-event-* attributes as event properties
  Object.keys(el.dataset).forEach((key) => {
    if (key !== 'event') {
      // Convert camelCase to title case (e.g., eventProject -> Project)
      const propName = key.replace(/([A-Z])/g, ' $1').trim();
      eventProps[propName] = el.dataset[key];
    }
  });

  // Send event to Plausible
  if (window.plausible) {
    window.plausible(eventName, { props: eventProps });
  }
});
