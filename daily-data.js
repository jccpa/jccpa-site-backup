(function (root) {
  'use strict';

  const MONTHS = [
    'JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE',
    'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'
  ];

  function toAnnouncements(data, fallback) {
    if (!data || !Array.isArray(data.news) || data.news.length === 0) return fallback;
    return data.news
      .filter(item => item && item.title && /^https?:\/\//i.test(String(item.link || '')))
      .map(item => [
        item.source || '財政部稅務入口網',
        String(item.date || '').slice(0, 10).replaceAll('-', '.'),
        item.title,
        item.link
      ])
      .sort((a, b) => b[1].localeCompare(a[1]));
  }

  function calendarDay(value) {
    const matches = [...String(value || '').matchAll(/(?:^|[\/–\-至月\s])(\d{1,2})(?=\s*(?:日|前|$))/g)];
    return matches.length ? matches.at(-1)[1].padStart(2, '0') : '';
  }

  function toCalendar(data) {
    const month = String(data && data.month || '');
    const monthNumber = (/^\d{1,2}$/.test(month) ? month : month.slice(5, 7)) || String(new Date().getMonth() + 1).padStart(2, '0');
    const paddedMonth = String(Number(monthNumber)).padStart(2, '0');
    const monthIndex = Math.max(0, Math.min(11, Number(paddedMonth) - 1));
    const items = Array.isArray(data && data.items) ? data.items.map(item => ({
      day: item.date ? String(item.date).split('/').pop().padStart(2, '0') : calendarDay(item.due),
      title: String(item.title || item.name || '')
    })).filter(item => item.day && item.title) : [];
    return {
      title: `${Number(paddedMonth)} 月稅務行事曆`,
      monthNumber: paddedMonth,
      monthEnglish: MONTHS[monthIndex],
      items
    };
  }

  function escapeHtml(value) {
    return String(value ?? '')
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;')
      .replaceAll("'", '&#39;');
  }

  const api = { toAnnouncements, toCalendar, escapeHtml };
  root.JCCPADailyData = api;
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
})(typeof window !== 'undefined' ? window : globalThis);
