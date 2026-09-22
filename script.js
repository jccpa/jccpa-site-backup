const brandStyle = document.createElement('style');
brandStyle.textContent = '.brand{align-items:center}.brand>span:last-child{display:none}.brand small{display:none}.brand-mark{width:auto;height:auto;border:0;border-radius:0;display:inline-flex;align-items:center;gap:16px;overflow:visible;flex:0 0 auto;line-height:1}.brand-full-logo{display:block;width:auto;height:40px;max-width:145px;object-fit:contain}.brand-firm-name{display:inline-block;color:#263d46;font:700 30px/1.15 "Noto Serif TC","DFKai-SB","BiauKai","標楷體",serif;letter-spacing:.015em;white-space:nowrap}.brand-logo,.brand-wordmark,.brand-icon-frame{display:none}.site-header .brand-full-logo{height:40px}@media(max-width:760px){.brand-mark{gap:8px}.brand-full-logo,.site-header .brand-full-logo{height:28px;max-width:94px}.brand-firm-name{font-size:20px;letter-spacing:-.045em}}';
document.head.append(brandStyle);

const themeStyle = document.createElement('style');
themeStyle.textContent = ':root{--ink:#263d46;--paper:#faf9f6;--cream:#efede6;--mint:#dce7e1;--lime:#d5dfc8;--orange:#c9987d;--line:rgba(38,61,70,.16)}.hero{background:linear-gradient(90deg,#faf9f6 0%,#faf9f6 61%,#e3ebe6 61%)}.page-hero{background:linear-gradient(115deg,#faf9f6 0%,#faf9f6 63%,#dce7e1 63%)}.image-one{background:linear-gradient(135deg,#506f72,#a7bcb2)}.image-two{background:linear-gradient(135deg,#b88973,#d9b69a)}.image-three{background:linear-gradient(135deg,#7e9296,#c5d0c6)}';
document.head.append(themeStyle);

const enterpriseStyle = document.createElement('link');
enterpriseStyle.rel = 'stylesheet';
enterpriseStyle.href = 'enterprise.css';
document.head.append(enterpriseStyle);

const officialSourceStyle = document.createElement('link');
officialSourceStyle.rel = 'stylesheet';
officialSourceStyle.href = 'official-sources.css';
document.head.append(officialSourceStyle);

const bulletSourceStyle = document.createElement('link');
bulletSourceStyle.rel = 'stylesheet';
bulletSourceStyle.href = 'bullet-sources.css';
document.head.append(bulletSourceStyle);

const sourceLogoStyle = document.createElement('link');
sourceLogoStyle.rel = 'stylesheet';
sourceLogoStyle.href = 'source-logos.css';
document.head.append(sourceLogoStyle);

const dailyUpdatesStyle = document.createElement('link');
dailyUpdatesStyle.rel = 'stylesheet';
dailyUpdatesStyle.href = 'daily-updates.css';
document.head.append(dailyUpdatesStyle);

const dailyArticleStyle = document.createElement('link');
dailyArticleStyle.rel = 'stylesheet';
dailyArticleStyle.href = 'daily-articles.css';
document.head.append(dailyArticleStyle);

const regulationStyle = document.createElement('link');
regulationStyle.rel = 'stylesheet';
regulationStyle.href = 'regulation-links.css';
document.head.append(regulationStyle);

const homeServicesStyle = document.createElement('link');
homeServicesStyle.rel = 'stylesheet';
homeServicesStyle.href = 'home-services.css';
document.head.append(homeServicesStyle);

const mobileLayoutStyle = document.createElement('link');
mobileLayoutStyle.rel = 'stylesheet';
mobileLayoutStyle.href = 'mobile-layout.css';
document.head.append(mobileLayoutStyle);

const serviceChooserStyle = document.createElement('link');
serviceChooserStyle.rel = 'stylesheet';
serviceChooserStyle.href = 'service-chooser.css?v=20260728-6';
document.head.append(serviceChooserStyle);

const serviceChooserItems = [
  ['公司設立登記', 'service-company-registration.html'],
  ['稅務規劃與申報', 'service-tax-planning.html'],
  ['會計與記帳', 'service-accounting.html'],
  ['審計與簽證', 'service-audit.html'],
  ['企業診斷與顧問', 'service-advisory.html']
];
const serviceChooserPage = window.location.pathname.split('/').pop() || 'index.html';
const serviceChooserTarget = document.querySelector('.service-list, .service-detail-page');
if (serviceChooserTarget) {
  const serviceChooser = document.createElement('section');
  serviceChooser.className = 'service-chooser';
  serviceChooser.setAttribute('aria-labelledby', 'service-chooser-title');
  const serviceChooserLinks = serviceChooserItems.map(([title, href]) => {
    const active = serviceChooserPage === href;
    return `<a class="service-choice${active ? ' is-active' : ''}" href="${href}"${active ? ' aria-current="page"' : ''}>${title}</a>`;
  }).join('');
  serviceChooser.innerHTML = `<div class="service-chooser-inner"><div class="service-chooser-head"><div><p class="eyebrow">SELECT A SERVICE</p><h2 id="service-chooser-title">選擇您需要的服務</h2></div><nav class="service-chooser-links" aria-label="服務項目">${serviceChooserLinks}</nav><p>點選服務標題，即可查看完整內容。</p></div></div>`;
  document.querySelector('.page-hero')?.insertAdjacentElement('afterend', serviceChooser);
}

document.querySelector('.site-header')?.insertAdjacentHTML('beforebegin', '<div class="utility-bar"><span>JCCPA｜專業服務</span><a href="insights.html">稅務新知</a><a href="contact.html">聯絡我們</a></div>');

const officialSources = `<section class="official-sources" aria-label="官方稅務公告來源"><div class="official-sources-head"><div><p class="eyebrow">OFFICIAL TAX UPDATES</p><h3>官方稅務公告來源</h3></div><p>定期查閱官方最新發布；個案適用仍應以原公告與專業判斷為準。</p></div><div class="source-grid"><a href="https://www.etax.nat.gov.tw/etwmain" target="_blank" rel="noopener"><small>MINISTRY OF FINANCE</small><strong>財政部稅務入口網</strong><span>↗</span></a><a href="https://www.etax.nat.gov.tw/etwmain/site/rss" target="_blank" rel="noopener"><small>RSS FEED</small><strong>稅務新聞訂閱</strong><span>↗</span></a><a href="https://www.dot.gov.tw/" target="_blank" rel="noopener"><small>DEPARTMENT OF TAXATION</small><strong>財政部賦稅署</strong><span>↗</span></a><a href="https://www.ntbt.gov.tw/multiplehtml/9d202c4943f246c896863af5f8a1d740" target="_blank" rel="noopener"><small>TAIPEI NTB</small><strong>臺北國稅局最新消息</strong><span>↗</span></a><a href="https://www.ntbna.gov.tw/multiplehtml/bd66986f2c114c09a38aecb22b66ceba" target="_blank" rel="noopener"><small>NORTHERN NTB</small><strong>北區國稅局最新消息</strong><span>↗</span></a><a href="https://www.ntbca.gov.tw/" target="_blank" rel="noopener"><small>CENTRAL NTB</small><strong>中區國稅局最新消息</strong><span>↗</span></a><a href="https://www.ntbsa.gov.tw/" target="_blank" rel="noopener"><small>SOUTHERN NTB</small><strong>南區國稅局最新消息</strong><span>↗</span></a><a href="https://www.ntbk.gov.tw/" target="_blank" rel="noopener"><small>KAOHSIUNG NTB</small><strong>高雄國稅局最新消息</strong><span>↗</span></a></div><p class="source-note">各分局、稽徵所相關公告，請由所屬國稅局官網的「最新消息／公告專區」查閱。</p></section>`;
document.querySelectorAll('.insights').forEach(section => section.insertAdjacentHTML('beforeend', officialSources));
document.querySelectorAll('.source-grid').forEach(grid => {
  const list = document.createElement('ul');
  list.className = 'source-list';
  grid.querySelectorAll('a').forEach(link => {
    const item = document.createElement('li');
    item.append(link);
    list.append(item);
  });
  grid.replaceWith(list);
});
document.querySelectorAll('.source-list a small').forEach(label => label.remove());
const dailyLinks = [
  ['財政部稅務入口網｜最新消息', 'https://www.etax.nat.gov.tw/etwmain/announcement'],
  ['財政部稅務入口網｜稅務新聞 RSS', 'https://www.etax.nat.gov.tw/etwmain/site/rss'],
  ['財政部賦稅署｜最新新聞稿', 'https://www.dot.gov.tw/multiplehtml/ch26'],
  ['財政部臺北國稅局｜最新消息', 'https://www.ntbt.gov.tw/multiplehtml/9d202c4943f246c896863af5f8a1d740'],
  ['財政部北區國稅局｜最新消息', 'https://www.ntbna.gov.tw/multiplehtml/bd66986f2c114c09a38aecb22b66ceba'],
  ['財政部中區國稅局｜最新消息', 'https://www.ntbca.gov.tw/'],
  ['財政部南區國稅局｜最新消息', 'https://www.ntbsa.gov.tw/'],
  ['財政部高雄國稅局｜最新消息', 'https://www.ntbk.gov.tw/']
];
document.querySelectorAll('.official-sources').forEach(section => {
  section.querySelector('h3').textContent = '官方稅務快訊';
  const description = section.querySelector('.official-sources-head > p');
  description.innerHTML = '<span class="daily-date">每日更新入口</span>｜直接開啟各機關最新稅務發布。';
  section.querySelectorAll('.source-list a').forEach((link, index) => {
    link.href = dailyLinks[index][1];
    link.querySelector('strong').textContent = dailyLinks[index][0];
  });
});
const archivedDailyAnnouncements = [
  ['財政部稅務入口網', '藝文展演及運動賽事免徵娛樂稅，稅務局主動停徵免申請', 'https://www.etax.nat.gov.tw/etwmain/announcement/news/raLbPp9'],
  ['財政部賦稅署', '核釋個人交易繼承或受贈取得舊制房屋之所得計算，納入按物價指數調整機制', 'https://www.dot.gov.tw/multiplehtml/ch26'],
  ['臺北國稅局', '營業人申報外銷勞務適用零稅率，應注意勞務在國外使用之要件', 'https://www.ntbt.gov.tw/singlehtml/41ae3594197f4f69b47753ce08188516?cntId=8a47bf43df0d47deb5c24d3ca578588c'],
  ['北區國稅局', '營利事業取得境外收入，應扣除相關成本費用，並以所得額計算境外所得可扣抵限額', 'https://www.ntbna.gov.tw/singlehtml/374fe8c4b18e48c691a6806ac02b9984?cntId=67424082eecd4aa1b1e0150bc6cf6b99'],
  ['中區國稅局', '結清勞工退休準備金專戶，領回之結餘款應列報其他收入', 'https://www.ntbca.gov.tw/'],
  ['南區國稅局', '營利事業接受政府補助獎勵之經費，該如何認列收入？', 'https://www.ntbsa.gov.tw/singlehtml/5e0e49a811b74b50b5a6486d38374285?cntId=394b7b4fd124452bab88ea4c2e0674bf'],
  ['高雄國稅局', '父母幫子女存股，別忘了贈與稅申報！', 'https://www.ntbk.gov.tw/singlehtml/8edee6a2f90d4254a5e8d38c1db38137?cntId=6c466d89e9dc4ec7b8805096029d9fd2']
];
const fallbackDailyAnnouncements = [
  ['財政部稅務入口網', '2026.07.27', '追稅執法利器上路，欠稅人小心愛車遭查封拍賣', 'https://www.etax.nat.gov.tw/etwmain/announcement/news/oPqZjbR'],
  ['南區國稅局', '2026.07.27', '新版發票兌獎APP上線，智慧更便利', 'https://www.ntbsa.gov.tw/singlehtml/5e0e49a811b74b50b5a6486d38374285?cntId=b504a692b6cd4515b13da369a971562d'],
  ['財政部稅務入口網', '2026.07.26', '遷戶籍可同步申請地價稅自用住宅稅率', 'https://www.etax.nat.gov.tw/etwmain/announcement/news/qmmx85O'],
  ['高雄國稅局', '2026.07.24', '114年度綜合所得稅第1批退稅：115年7月31日入帳！', 'https://www.ntbk.gov.tw/singlehtml/8edee6a2f90d4254a5e8d38c1db38137?cntId=c2b2c14c41924e0fad4cb63de44edf4b'],
  ['中區國稅局', '2026.07.23', '營利事業提示電子帳簿真便利', 'https://www.ntbca.gov.tw/singlehtml/3c844e426e9c4b5ebcaaa18694d7e230?cntId=5888654c3d9945f7b2d83abe26b5a11b'],
  ['南區國稅局', '2026.07.23', '注意時限開發票，分次收款也沒煩惱！', 'https://www.ntbsa.gov.tw/singlehtml/5e0e49a811b74b50b5a6486d38374285?cntId=4ba9b68f4b1a431cb504b65490e21e01'],
  ['中區國稅局', '2026.07.20', '父母贈與婚嫁子女財物100萬元內，不計入贈與總額', 'https://www.ntbca.gov.tw/singlehtml/3c844e426e9c4b5ebcaaa18694d7e230?cntId=225aea0013b9435a9ab46fc60371da43']
];
const dailyAnnouncements = window.JCCPADailyData
  ? window.JCCPADailyData.toAnnouncements(window.TAX_NEWS, fallbackDailyAnnouncements)
  : fallbackDailyAnnouncements;

if (window.JCCPADailyData && window.TAX_CALENDAR) {
  const calendar = window.JCCPADailyData.toCalendar(window.TAX_CALENDAR);
  const card = document.querySelector('.hero-card');
  if (card && calendar.items.length) {
    card.querySelector(':scope > p').textContent = calendar.title;
    card.querySelector('.calendar-row strong').textContent = calendar.monthNumber;
    card.querySelector('.calendar-row span').innerHTML = `${calendar.monthEnglish}<br><b>當月工作項目</b>`;
    const list = card.querySelector('ul');
    list.replaceChildren(...calendar.items.slice(0, 4).map(item => {
      const row = document.createElement('li');
      const day = document.createElement('span');
      day.textContent = item.day;
      row.append(day, document.createTextNode(item.title));
      return row;
    }));
  }
}

// 文章卡片由各頁 HTML 的最新內容維護，避免舊的公告資料在載入時覆寫卡片。
if (false && document.querySelector('#all-articles, .article-grid-wide')) {
  const featureCards = document.querySelectorAll('#all-articles .article, .article-grid-wide .article');
  const latestAnnouncements = [...dailyAnnouncements].sort((a, b) => b[1].localeCompare(a[1]));
  const selectedAnnouncements = new Set();
  const pickAnnouncement = (pattern) => {
    const matched = latestAnnouncements.find(item => !selectedAnnouncements.has(item) && pattern.test(item[2]));
    const fallback = latestAnnouncements.find(item => !selectedAnnouncements.has(item));
    const announcement = matched || fallback;
    if (announcement) selectedAnnouncements.add(announcement);
    return announcement;
  };
  const featuredAnnouncements = [
    pickAnnouncement(/./),
    pickAnnouncement(/營業人|營利事業|公司|企業|發票|憑證|營業稅|扣繳|商業/),
    pickAnnouncement(/個人|綜所|所得|遺產|贈與|繼承|房地|受遺贈|退稅/)
  ].filter(Boolean);

  featuredAnnouncements.forEach(([source, date, title, url], index) => {
    const card = featureCards[index];
    if (!card) return;
    card.querySelector('.article-meta').textContent = `${source}　·　${date}`;
    card.querySelector('h3').textContent = title;
    const description = card.querySelector('p');
    if (description) description.textContent = `摘錄自${source}的最新稅務公告。`;
    const link = card.querySelector('a');
    link.href = url;
    link.target = '_blank';
    link.rel = 'noopener';
    link.textContent = '原文連結';
    link.setAttribute('aria-label', `閱讀${title}原文`);
  });
}

const isInsightsPage = /\/insights(?:\.html)?\/?$/.test(location.pathname);
if (isInsightsPage) {
  const regulationLinks = `<section class="regulation-links" aria-label="法規查詢"><div class="regulation-links-head"><div><p>財政部稅務入口網</p><h3>法規查詢</h3></div><span>官方法規與函釋查詢</span></div><ul><li><a href="https://law-out.mof.gov.tw/LawQuery.aspx" target="_blank" rel="noopener"><strong>綜合查詢、法律與法規命令、行政規則</strong><span>↗</span></a></li><li><a href="https://law-out.mof.gov.tw/DraftForum.aspx" target="_blank" rel="noopener"><strong>賦稅法規草案預告區</strong><span>↗</span></a></li><li><a href="https://www.mof.gov.tw/htmlList/fe634cbb13b643899776d957784a0418" target="_blank" rel="noopener"><strong>財政雙語詞彙</strong><span>↗</span></a></li><li><a href="https://ttc.mof.gov.tw/FF/FF100" target="_blank" rel="noopener"><strong>新頒函釋</strong><span>↗</span></a></li><li><a href="https://ttc.mof.gov.tw/" target="_blank" rel="noopener"><strong>法令彙編釋示函令檢索系統</strong><span>↗</span></a></li></ul></section>`;
  document.querySelector('.standalone')?.insertAdjacentHTML('beforeend', regulationLinks);
  const escapeDaily = window.JCCPADailyData?.escapeHtml || (value => String(value));
  const entries = dailyAnnouncements.map(([source, date, title, url]) => `<li><a href="${escapeDaily(url)}" target="_blank" rel="noopener"><small>${escapeDaily(source)}｜${escapeDaily(date)}</small><strong>${escapeDaily(title)}</strong><span>↗</span></a></li>`).join('');
  const updateDate = dailyAnnouncements[0]?.[1] || '資料更新中';
  document.querySelector('.standalone')?.insertAdjacentHTML('afterbegin', `<section class="daily-articles" aria-label="每日稅務公告"><h3>每日稅務公告</h3><p>更新日期：${escapeDaily(updateDate)}｜僅列具稅務相關性之官方最新發布。</p><ul>${entries}</ul></section>`);
}

document.querySelectorAll('.brand small').forEach(name => {
  name.textContent = '會計師事務所';
});

document.querySelectorAll('.brand-mark').forEach(mark => {
  mark.replaceChildren();

  const logo = document.createElement('img');
  logo.className = 'brand-full-logo';
  logo.src = 'assets/jccpa-logo-transparent.png';
  logo.alt = 'JCCPA';
  logo.width = 309;
  logo.height = 91;

  const firmName = document.createElement('span');
  firmName.className = 'brand-firm-name';
  firmName.textContent = '吉謙會計師事務所';

  mark.append(logo, firmName);
});

document.querySelectorAll('footer .brand').forEach(brand => brand.remove());
document.querySelectorAll('.values > article > span').forEach(number => number.remove());

document.querySelectorAll('footer').forEach(footer => {
  if (!footer.querySelector('.footer-details')) {
    footer.insertAdjacentHTML('beforeend', '<p class="footer-details"><a href="tel:+886227098108">電話 02 2709 8108</a>｜傳真 02 2709 8109<br>台北市大安區復興南路二段237號12樓之15</p>');
  }
  if (!footer.querySelector('.footer-legal')) {
    footer.insertAdjacentHTML('beforeend', '<div class="footer-legal"><a href="privacy.html">隱私權政策</a><a href="terms.html">服務條款</a></div>');
  }
});

if (isInsightsPage && !document.querySelector('.regulation-links')) {
  const regulationStyle = document.createElement('link');
  regulationStyle.rel = 'stylesheet';
  regulationStyle.href = 'regulation-links.css';
  document.head.append(regulationStyle);

  const regulationLinks = `<section class="regulation-links" aria-label="法規查詢"><div class="regulation-links-head"><p class="eyebrow">法規查詢</p><h2>官方法規與函釋查詢</h2><p>連結至財政部稅務入口網所列的法規查詢服務。</p></div><ul><li><a href="https://law-out.mof.gov.tw/LawQuery.aspx" target="_blank" rel="noopener"><span>綜合查詢、法律與法規命令、行政規則</span><b>↗</b></a></li><li><a href="https://law-out.mof.gov.tw/DraftForum.aspx" target="_blank" rel="noopener"><span>賦稅法規草案預告區</span><b>↗</b></a></li><li><a href="https://www.mof.gov.tw/htmlList/fe634cbb13b643899776d957784a0418" target="_blank" rel="noopener"><span>財政雙語詞彙</span><b>↗</b></a></li><li><a href="https://ttc.mof.gov.tw/FF/FF100" target="_blank" rel="noopener"><span>新頒函釋</span><b>↗</b></a></li><li><a href="https://ttc.mof.gov.tw/" target="_blank" rel="noopener"><span>法令彙編釋示函令檢索系統</span><b>↗</b></a></li></ul></section>`;
  document.querySelector('.filter-row')?.insertAdjacentHTML('afterend', regulationLinks);
}

const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('nav');
menuButton.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', open);
  menuButton.textContent = open ? '×' : '☰';
});

document.querySelectorAll('nav a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.textContent = '☰';
}));

const filters = document.querySelectorAll('[data-filter]');
const articles = document.querySelectorAll('.article');
filters.forEach(button => button.addEventListener('click', () => {
  filters.forEach(item => item.classList.remove('active'));
  button.classList.add('active');
  const selected = button.dataset.filter;
  articles.forEach(article => {
    article.hidden = selected !== 'all' && article.dataset.category !== selected;
  });
}));

const contactForm = document.querySelector('#contact-form');
if (contactForm) contactForm.addEventListener('submit', event => {
  event.preventDefault();
  const data = Object.fromEntries(new FormData(event.currentTarget).entries());
  const status = event.currentTarget.querySelector('.form-status');
  if (!window.JCCPAContact) {
    status.innerHTML = '目前無法開啟郵件程式，請直接寄信至 <a href="mailto:jccpa@kimo.com">jccpa@kimo.com</a>。';
    return;
  }
  status.textContent = '正在開啟您的郵件程式；請在郵件視窗中確認內容並按下寄出。';
  window.location.href = window.JCCPAContact.buildMailto(data);
});
