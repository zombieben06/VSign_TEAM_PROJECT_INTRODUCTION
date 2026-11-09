(() => {
  'use strict';
  const config = window.VSIGN || {};
  // Một đường dẫn logo dùng chung cho header, footer, biểu tượng tab và bông hoa.
  const defaultLogo = 'assets/images/logo-vsign.png';
  const logo = typeof config.logo === 'string' && config.logo.trim() ? config.logo.trim() : defaultLogo;
  document.querySelectorAll('[data-brand-logo]').forEach(image => {
    image.addEventListener('error', () => {
      if (image.getAttribute('src') !== defaultLogo) image.src = defaultLogo;
    });
    image.src = logo;
  });
  const favicon = document.querySelector('[data-brand-favicon]');
  if (favicon) favicon.href = logo;
  const escape = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const nav = document.querySelector('.main-nav');
  const menu = document.querySelector('.menu-toggle');
  function closeMenu() { if (!menu || !nav) return; menu.setAttribute('aria-expanded', 'false'); nav.classList.remove('is-open'); }
  menu?.addEventListener('click', () => { const open = menu.getAttribute('aria-expanded') !== 'true'; menu.setAttribute('aria-expanded', String(open)); nav.classList.toggle('is-open', open); });
  nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => { if (event.key === 'Escape') { closeMenu(); document.querySelector('dialog[open]')?.close(); } });
  document.addEventListener('click', event => { if (!event.target.closest('.site-header')) closeMenu(); });
  window.addEventListener('resize', () => { if (window.innerWidth > 800) closeMenu(); });
  const header = document.querySelector('.site-header');
  const scrollState = () => header?.classList.toggle('is-scrolled', window.scrollY > 20);
  window.addEventListener('scroll', scrollState, {passive: true}); scrollState();

  // Các chế độ chỉ minh hoạ trải nghiệm học; không truy cập camera.
  const preview = document.querySelector('.product-preview');
  document.querySelectorAll('[data-step]').forEach(button => button.addEventListener('click', () => {
    document.querySelectorAll('[data-step]').forEach(item => { const selected = item === button; item.classList.toggle('active', selected); item.setAttribute('aria-selected', String(selected)); item.tabIndex = selected ? 0 : -1; });
    if (preview) preview.dataset.mode = button.dataset.step;
    const status = document.querySelector('#preview-status');
    if (status) status.textContent = {learn:'Quan sát ảnh mẫu và hướng dẫn từng bước.', practice:'Giao diện minh hoạ · camera đang tắt.', review:'Ôn lại ký hiệu và theo dõi nhịp học.'}[button.dataset.step];
  }));
  document.querySelector('[role="tablist"]')?.addEventListener('keydown', event => {
    if (!['ArrowDown','ArrowUp','ArrowLeft','ArrowRight','Home','End'].includes(event.key)) return;
    const tabs = [...document.querySelectorAll('[data-step]')], index = tabs.indexOf(document.activeElement);
    if (index < 0) return;
    event.preventDefault(); const next = event.key === 'Home' ? 0 : event.key === 'End' ? tabs.length - 1 : (index + (['ArrowDown','ArrowRight'].includes(event.key) ? 1 : -1) + tabs.length) % tabs.length;
    tabs[next].click(); tabs[next].focus();
  });
  document.querySelectorAll('[data-letter]').forEach(button => button.addEventListener('click', () => {
    const letter = button.dataset.letter;
    document.querySelectorAll('[data-letter]').forEach(item => { item.classList.toggle('active', item === button); item.setAttribute('aria-pressed', String(item === button)); });
    document.querySelectorAll('[data-current-letter]').forEach(item => item.textContent = letter);
    const image = document.querySelector('#lesson-image');
    if (image) { image.src = `assets/images/sign-${letter.toLowerCase()}.webp`; image.alt = `Ảnh tham chiếu chữ ${letter} trong prototype`; }
  }));

  const grid = document.querySelector('#team-grid');
  if (grid && Array.isArray(config.team)) {
    grid.innerHTML = config.team.map((person, index) => `<article class="member-card reveal" id="${escape(person.id)}">
      <div class="member-portrait portrait-${index + 1}"><div class="portrait-art" aria-hidden="true"><span class="portrait-circle"></span><span class="portrait-initials">${escape(person.initials)}</span><span class="portrait-outline"></span><span class="portrait-star"><svg class="icon-flower" viewBox="0 0 64 64" fill="none" aria-hidden="true"><path d="M32 7v50M7 32h50M14.3 14.3l35.4 35.4M14.3 49.7l35.4-35.4" stroke="currentColor" stroke-width="6" stroke-linecap="round"/></svg></span></div>
      ${person.photo ? `<img class="member-photo" src="${escape(person.photo)}" alt="${escape(person.name)}" style="object-position:${escape(person.position || 'center')};" loading="lazy" width="800" height="1000">` : ''}
      <span class="portrait-index">0${index + 1}</span><span class="portrait-tag">${escape(person.role)}</span>${!person.photo ? '<span class="photo-note">Ảnh thành viên sẽ được bổ sung</span>' : ''}</div>
      <div class="member-info"><span class="member-focus">${escape(person.focus)}</span><h2>${escape(person.name)}</h2><div class="member-study"><span>${escape(person.major)}</span><span>${escape(person.year)}</span></div><p class="member-school">${escape(person.school)}</p><p class="member-contribution">${escape(person.contribution)}</p></div></article>`).join('');
    grid.querySelectorAll('.member-photo').forEach(image => image.addEventListener('error', () => { image.remove(); }));
  }

  // Bốn ô ở trang Đề án dùng cùng ảnh và vị trí crop với trang Đội ngũ.
  // Ghép theo ID để đúng người ngay cả khi thứ tự trong content.js thay đổi.
  const teaser = document.querySelector('.team-abstract');
  if (teaser && Array.isArray(config.team)) {
    const tiles = [
      ['.tile-pa', 'phuong-anh'],
      ['.tile-tt', 'tien-thanh'],
      ['.tile-nk', 'nam-khanh'],
      ['.tile-hl', 'huyen-linh']
    ];
    tiles.forEach(([selector, id]) => {
      const tile = teaser.querySelector(selector);
      const person = config.team.find(member => member.id === id);
      const photo = typeof person?.photo === 'string' ? person.photo.trim() : '';
      if (!tile || !photo) return;
      const caption = tile.querySelector('small');
      const originalCaption = caption?.textContent || '';
      const image = document.createElement('img');
      image.className = 'abstract-photo';
      image.alt = ''; // Nhóm hình trang trí đã có aria-hidden trong HTML.
      image.loading = 'lazy';
      image.decoding = 'async';
      image.width = 400;
      image.height = 400;
      image.style.objectPosition = person.position || 'center 35%';
      image.addEventListener('load', () => {
        tile.classList.add('has-photo');
        if (caption) caption.textContent = person.shortName || person.name;
      }, { once: true });
      image.addEventListener('error', () => {
        image.remove();
        tile.classList.remove('has-photo');
        if (caption) caption.textContent = originalCaption;
      }, { once: true });
      image.src = photo;
      tile.appendChild(image);
    });
  }
  document.querySelectorAll('[data-product-link]').forEach(link => {
    try { const url = new URL(config.projectUrl); if (!['http:','https:'].includes(url.protocol)) return; link.href = url.href; link.hidden = false; } catch { /* Chưa có URL sản phẩm. */ }
  });
  document.querySelectorAll('[data-email-link]').forEach(link => {
    const email = String(config.contactEmail || '').trim();
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { link.href = 'mailto:' + email; link.textContent = email; link.hidden = false; }
  });
  const dialog = document.querySelector('#brief-dialog');
  document.querySelectorAll('[data-open-brief]').forEach(button => button.addEventListener('click', () => dialog?.showModal()));
  document.querySelector('[data-close-brief]')?.addEventListener('click', () => dialog?.close());
  dialog?.addEventListener('click', event => { if (event.target === dialog) { const rect = dialog.getBoundingClientRect(); if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close(); } });
  dialog?.addEventListener('close', () => document.body.classList.remove('dialog-open'));
  if (dialog) new MutationObserver(() => document.body.classList.toggle('dialog-open', dialog.open)).observe(dialog, {attributes:true, attributeFilter:['open']});

  // Nội dung luôn hiện sẵn. Chỉ bật hiệu ứng khi đã có IntersectionObserver.
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); } }), {threshold:0.08});
    document.querySelectorAll('.reveal').forEach(element => { element.classList.add('will-reveal'); observer.observe(element); });
  }
})();
