(() => {
  const WA = '5511964807702';
  const WA_MSG = 'Olá! Vim pelo site e gostaria de um orçamento de painel elétrico.';
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const fine = matchMedia('(hover: hover) and (pointer: fine)').matches;

  /* Links de WhatsApp: data-wa="mensagem" (vazio = mensagem padrão) */
  $$('[data-wa]').forEach(a => {
    a.href = `https://wa.me/${WA}?text=${encodeURIComponent(a.dataset.wa || WA_MSG)}`;
    a.target = '_blank';
    a.rel = 'noopener';
  });

  $('#ano').textContent = new Date().getFullYear();

  /* Header, barra de progresso e barra fixa do celular */
  const header = $('.header'), prog = $('.progress span'), bar = $('.bar'), fab = $('.fab'), hero = $('.hero'), cta = $('.cta__band');
  let ticking = false;
  const onScroll = () => {
    const y = scrollY, max = document.documentElement.scrollHeight - innerHeight;
    header.classList.toggle('is-stuck', y > 20);
    prog.style.setProperty('--p', max > 0 ? y / max : 0);
    /* o botão fixo some no topo e em cima da faixa amarela, onde já existe um botão igual */
    const r = cta.getBoundingClientRect(), onCta = r.top < innerHeight * 0.75 && r.bottom > innerHeight * 0.4;
    bar.classList.toggle('is-on', y > hero.offsetHeight * 0.55 && !onCta);
    fab.classList.toggle('is-off', onCta);
    ticking = false;
  };
  addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });
  onScroll();

  /* Entrada dos blocos ao rolar */
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
  }), { threshold: 0.14, rootMargin: '0px 0px -6% 0px' });
  $$('[data-reveal]').forEach(el => io.observe(el));

  /* Menu: marca a seção que está na tela */
  const links = $$('.nav a');
  const spy = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) links.forEach(a => a.classList.toggle('is-on', a.hash === '#' + e.target.id));
  }), { rootMargin: '-45% 0px -50% 0px' });
  links.forEach(a => { const s = $(a.hash); if (s) spy.observe(s); });

  /* Imagens de fundo opcionais: só aparecem se o arquivo existir */
  $$('[data-bg]').forEach(el => {
    const img = new Image();
    img.onload = () => { el.style.setProperty('--bg', `url("${el.dataset.bg}")`); if (el.classList.contains('hero__bg')) el.style.backgroundImage = `url("${el.dataset.bg}")`; el.classList.add('has-img'); };
    img.src = el.dataset.bg;
  });

  /* Marcas: duplica a fila para rolar sem emenda */
  const track = $('.marquee__track');
  track.innerHTML += track.innerHTML;
  $$('img', track).slice(track.children.length / 2).forEach(i => i.setAttribute('aria-hidden', 'true'));

  /* Holofote que segue o mouse */
  if (fine) $$('.spot').forEach(el => el.addEventListener('pointermove', e => {
    const r = el.getBoundingClientRect();
    el.style.setProperty('--mx', `${e.clientX - r.left}px`);
    el.style.setProperty('--my', `${e.clientY - r.top}px`);
  }));

  /* Painel 3D do topo */
  const tilt = $('.tilt');
  if (tilt && fine && !reduce) {
    hero.addEventListener('pointermove', e => {
      const r = hero.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
      tilt.classList.add('is-moving');
      tilt.style.transform = `rotateY(${x * 16}deg) rotateX(${-y * 12}deg)`;
    });
    hero.addEventListener('pointerleave', () => { tilt.classList.remove('is-moving'); tilt.style.transform = ''; });
  }

  /* Botões magnéticos */
  if (fine && !reduce) $$('.magnetic').forEach(b => {
    b.addEventListener('pointermove', e => {
      const r = b.getBoundingClientRect();
      b.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.22}px, ${(e.clientY - r.top - r.height / 2) * 0.35}px)`;
    });
    b.addEventListener('pointerleave', () => { b.style.transform = ''; });
  });

  /* Seletor de painéis */
  const pick = $('.pick');
  if (pick) {
    const btns = $$('.pick__btn', pick), panes = $$('.pane', pick);
    let cur = 0;
    const go = (i, user) => {
      cur = (i + btns.length) % btns.length;
      btns.forEach((b, k) => { b.classList.toggle('is-active', k === cur); b.setAttribute('aria-selected', k === cur); });
      panes.forEach((p, k) => p.classList.toggle('is-active', k === cur));
      if (user) pick.classList.remove('is-auto');
    };
    btns.forEach((b, i) => {
      b.addEventListener('click', () => go(i, true));
      b.addEventListener('animationend', e => { if (e.animationName === 'fill') go(cur + 1); });
    });
    /* Troca sozinho enquanto a pessoa não mexe; pausa fora da tela e com o mouse em cima */
    if (!reduce) {
      new IntersectionObserver(([e]) => pick.classList.toggle('is-paused', !e.isIntersecting), { threshold: 0.35 }).observe(pick);
      pick.classList.add('is-auto', 'is-paused');
      pick.addEventListener('pointerenter', () => pick.classList.add('is-paused'));
      pick.addEventListener('pointerleave', () => pick.classList.remove('is-paused'));
    }
  }

  /* Segmentos (sanfona) */
  const segs = $$('.seg');
  segs.forEach(s => s.insertAdjacentHTML('beforeend', `<svg class="seg__wm" aria-hidden="true"><use href="${$('.seg__top use', s).getAttribute('href')}"/></svg>`));
  const openSeg = s => segs.forEach(x => x.classList.toggle('is-active', x === s));
  segs.forEach(s => {
    if (fine) s.addEventListener('pointerenter', () => openSeg(s));
    s.addEventListener('click', () => openSeg(s));
    s.addEventListener('focus', () => openSeg(s));
  });

  /* Circuito animado do topo */
  const cv = $('.hero__circuit');
  if (cv && !reduce) {
    const ctx = cv.getContext('2d'), base = document.createElement('canvas'), bctx = base.getContext('2d');
    const G = 44;
    let w, h, dpr, paths = [], pulses = [], visible = true, raf;

    const build = () => {
      dpr = Math.min(devicePixelRatio || 1, 2);
      w = cv.clientWidth; h = cv.clientHeight;
      [cv, base].forEach(c => { c.width = w * dpr; c.height = h * dpr; });
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0); bctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const cols = Math.ceil(w / G), rows = Math.ceil(h / G);
      paths = [];
      const n = Math.round(cols * rows / 26);
      for (let i = 0; i < n; i++) {
        let x = Math.floor(Math.random() * cols), y = Math.floor(Math.random() * rows);
        let dir = Math.random() < 0.5 ? 0 : 1;
        const pts = [[x * G, y * G]];
        for (let s = 0, steps = 3 + Math.floor(Math.random() * 4); s < steps; s++) {
          const len = (2 + Math.floor(Math.random() * 5)) * (Math.random() < 0.5 ? -1 : 1);
          if (dir === 0) x = Math.max(0, Math.min(cols, x + len)); else y = Math.max(0, Math.min(rows, y + len));
          pts.push([x * G, y * G]);
          dir = 1 - dir;
        }
        let total = 0; const seg = [];
        for (let k = 1; k < pts.length; k++) { const d = Math.abs(pts[k][0] - pts[k - 1][0]) + Math.abs(pts[k][1] - pts[k - 1][1]); seg.push(d); total += d; }
        if (total > G * 4) paths.push({ pts, seg, total });
      }
      bctx.clearRect(0, 0, w, h);
      bctx.lineWidth = 1; bctx.strokeStyle = 'rgba(140,175,205,.13)'; bctx.fillStyle = 'rgba(254,184,2,.5)';
      paths.forEach(p => {
        bctx.beginPath(); p.pts.forEach(([x, y], k) => k ? bctx.lineTo(x, y) : bctx.moveTo(x, y)); bctx.stroke();
        [p.pts[0], p.pts[p.pts.length - 1]].forEach(([x, y]) => { bctx.beginPath(); bctx.arc(x, y, 2.4, 0, 7); bctx.fill(); });
      });
      pulses = paths.filter((_, i) => i % 2 === 0).map(p => ({ p, t: Math.random() * p.total, v: 60 + Math.random() * 90 }));
    };

    const at = (p, d) => {
      for (let k = 0; k < p.seg.length; k++) {
        if (d <= p.seg[k]) { const a = p.pts[k], b = p.pts[k + 1], f = p.seg[k] ? d / p.seg[k] : 0; return [a[0] + (b[0] - a[0]) * f, a[1] + (b[1] - a[1]) * f]; }
        d -= p.seg[k];
      }
      return p.pts[p.pts.length - 1];
    };

    let last = performance.now();
    const frame = now => {
      const dt = Math.min((now - last) / 1000, 0.05); last = now;
      ctx.clearRect(0, 0, w, h);
      ctx.drawImage(base, 0, 0, w, h);
      pulses.forEach(q => {
        q.t += q.v * dt;
        if (q.t > q.p.total + 80) q.t = -Math.random() * 300;
        if (q.t < 0) return;
        for (let i = 0; i < 9; i++) {
          const d = q.t - i * 7;
          if (d < 0 || d > q.p.total) continue;
          const [x, y] = at(q.p, d);
          ctx.beginPath(); ctx.arc(x, y, i ? 1.5 : 2.6, 0, 7);
          ctx.fillStyle = `rgba(254,184,2,${(1 - i / 9) * 0.9})`;
          if (!i) { ctx.shadowColor = '#feb802'; ctx.shadowBlur = 14; }
          ctx.fill(); ctx.shadowBlur = 0;
        }
      });
      if (visible) raf = requestAnimationFrame(frame);
    };

    build();
    raf = requestAnimationFrame(frame);
    let rt;
    addEventListener('resize', () => { clearTimeout(rt); rt = setTimeout(build, 200); });
    new IntersectionObserver(([e]) => {
      visible = e.isIntersecting;
      cancelAnimationFrame(raf);
      if (visible) { last = performance.now(); raf = requestAnimationFrame(frame); }
    }).observe(cv);
  }
})();
