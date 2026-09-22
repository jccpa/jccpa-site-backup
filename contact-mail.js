(function (root) {
  'use strict';

  const RECIPIENT = 'jccpa@kimo.com';

  function singleLine(value) {
    return String(value || '')
      .replace(/[\r\n]+/g, ' ')
      .replace(/\b(?:bcc|cc|to|from|subject)\s*:/gi, '')
      .replace(/\s+/g, ' ')
      .trim();
  }

  function buildMailto(data = {}) {
    const name = singleLine(data.name) || '網站訪客';
    const email = singleLine(data.email) || '未提供';
    const topic = singleLine(data.topic) || '其他問題';
    const message = String(data.message || '').replace(/\r\n?/g, '\n').trim() || '未填寫其他說明';
    const subject = `JCCPA 網站諮詢｜${topic}｜${name}`;
    const body = [
      '吉謙會計師事務所您好：',
      '',
      `姓名：${name}`,
      `電子信箱：${email}`,
      `諮詢項目：${topic}`,
      '',
      '需求說明：',
      message,
      '',
      '（此郵件由 JCCPA 網站訪客的郵件程式建立，請寄件人確認後送出。）'
    ].join('\n');
    const params = new URLSearchParams({ subject, body });
    return `mailto:${RECIPIENT}?${params.toString()}`;
  }

  const api = { buildMailto };
  root.JCCPAContact = api;
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
})(typeof window !== 'undefined' ? window : globalThis);
