(() => {
  if (location.hostname !== 'jccpa.pages.dev') return;

  const endpoint = 'https://jccpa-analytics.jerick1688.workers.dev/visit';
  const storageKey = 'jccpa_anonymous_visitor_id';
  let id;

  try {
    id = localStorage.getItem(storageKey);
    if (!id) {
      id = crypto.randomUUID();
      localStorage.setItem(storageKey, id);
    }
  } catch {
    id = crypto.randomUUID();
  }

  const payload = JSON.stringify({ visitorId: id });
  if (typeof navigator.sendBeacon === 'function') {
    navigator.sendBeacon(endpoint, payload);
    return;
  }

  fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: payload,
    keepalive: true,
    credentials: 'omit'
  }).catch(() => {});
})();
