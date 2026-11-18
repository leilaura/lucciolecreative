// Cielo di lucciole (lo stesso della pagina "in arrivo"), dentro una sezione.
// Puntini di fondo, lucine che si accendono e si spengono, 2–3 lucciole grandi con sciame,
// alone che segue il mouse. Si ferma quando la sezione non è visibile.
// Con "riduci movimento" disegna un solo fotogramma fermo.

export function initFireflies(canvas: HTMLCanvasElement, area: HTMLElement) {
  const ctx = canvas.getContext('2d');
  if (!ctx) return;
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const rand = (a: number, b: number) => a + Math.random() * (b - a);

  let W = 0, H = 0, dpr = 1, visible = true, running = false;
  const mouse = { x: -9999, y: -9999, active: false };
  let specks: { x: number; y: number; r: number; base: number; tw: number; ph: number; vx: number; vy: number; blur: boolean }[] = [];
  let glowers: { x: number; y: number; vx: number; vy: number; core: number; halo: number; ph: number; sp: number; wob: number }[] = [];
  let flies: { x: number; y: number; a: number; speed: number; turn: number; ph: number; swarm: { a: number; d: number; s: number; r: number }[] }[] = [];

  function build() {
    dpr = Math.min(devicePixelRatio || 1, 2);
    W = area.clientWidth; H = area.clientHeight;
    canvas.width = W * dpr; canvas.height = H * dpr;
    ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    const n = Math.round(Math.min(200, Math.max(60, (W * H) / 6500)));
    specks = Array.from({ length: n }, () => ({
      x: rand(0, W), y: rand(0, H), r: rand(.5, 1.6), base: rand(.25, .85),
      tw: rand(.4, 1.6), ph: rand(0, 6.28), vx: rand(-.08, .08), vy: rand(-.12, .04), blur: Math.random() < .12,
    }));
    glowers = Array.from({ length: W < 600 ? 7 : 14 }, () => ({
      x: rand(0, W), y: rand(0, H), vx: rand(-.18, .18), vy: rand(-.22, .06),
      core: rand(1.1, 2), halo: rand(14, 32), ph: rand(0, 6.28), sp: rand(.35, 1.1), wob: rand(.3, .9),
    }));
    flies = Array.from({ length: W < 600 ? 2 : 3 }, () => ({
      x: rand(W * .15, W * .85), y: rand(H * .15, H * .85), a: rand(0, 6.28),
      speed: rand(.25, .5), turn: rand(.004, .012), ph: rand(0, 6.28),
      swarm: Array.from({ length: 7 }, () => ({ a: rand(0, 6.28), d: rand(14, 46), s: rand(.006, .02), r: rand(.8, 1.8) })),
    }));
  }

  function glow(x: number, y: number, radius: number, alpha: number) {
    const g = ctx!.createRadialGradient(x, y, 0, x, y, radius);
    g.addColorStop(0, `rgba(253,214,49,${alpha})`);
    g.addColorStop(.35, `rgba(253,214,49,${alpha * .28})`);
    g.addColorStop(1, 'rgba(253,214,49,0)');
    ctx!.fillStyle = g;
    ctx!.beginPath(); ctx!.arc(x, y, radius, 0, 6.2832); ctx!.fill();
  }
  function dot(x: number, y: number, r: number, alpha: number) {
    ctx!.fillStyle = `rgba(255,224,110,${alpha})`;
    ctx!.beginPath(); ctx!.arc(x, y, r, 0, 6.2832); ctx!.fill();
  }

  function frame(t: number) {
    const time = t / 1000;
    ctx!.clearRect(0, 0, W, H);
    if (mouse.active) glow(mouse.x, mouse.y, 220, .16);

    for (const s of specks) {
      if (!reduce) {
        s.x += s.vx; s.y += s.vy;
        if (s.y < -10) { s.y = H + 10; s.x = rand(0, W); }
        if (s.x < -10) s.x = W + 10; else if (s.x > W + 10) s.x = -10;
      }
      let a = reduce ? s.base : s.base * (.55 + .45 * Math.sin(time * s.tw + s.ph));
      if (mouse.active) {
        const d2 = (s.x - mouse.x) ** 2 + (s.y - mouse.y) ** 2;
        if (d2 < 40000) a = Math.min(1, a + (1 - d2 / 40000) * .6);
      }
      if (s.blur) glow(s.x, s.y, s.r * 9, a * .35); else dot(s.x, s.y, s.r, a);
    }

    for (const g of glowers) {
      if (!reduce) {
        g.x += g.vx + Math.sin(time * g.wob + g.ph) * .15;
        g.y += g.vy + Math.cos(time * g.wob * .8 + g.ph) * .12;
        if (g.y < -60) { g.y = H + 60; g.x = rand(0, W); }
        if (g.y > H + 60) g.y = -60;
        if (g.x < -60) g.x = W + 60; else if (g.x > W + 60) g.x = -60;
      }
      let b = reduce ? .8 : .5 + .5 * Math.sin(time * g.sp + g.ph);
      b = b * b * (3 - 2 * b);
      if (b > .03) {
        glow(g.x, g.y, g.halo * (.8 + .2 * b), .3 * b);
        glow(g.x, g.y, g.core * 4, .75 * b);
        dot(g.x, g.y, g.core, Math.min(1, .3 + b));
      }
    }

    flies.forEach((f) => {
      if (!reduce) {
        f.a += Math.sin(time * .7 + f.ph) * f.turn * 3;
        f.x += Math.cos(f.a) * f.speed; f.y += Math.sin(f.a) * f.speed;
        const m = 60;
        if (f.x < m || f.x > W - m) f.a = Math.PI - f.a;
        if (f.y < m || f.y > H - m) f.a = -f.a;
        f.x = Math.max(m, Math.min(W - m, f.x)); f.y = Math.max(m, Math.min(H - m, f.y));
      }
      const pulse = reduce ? 1 : .75 + .25 * Math.sin(time * 1.3 + f.ph);
      glow(f.x, f.y, 140 * pulse, .32 * pulse);
      glow(f.x, f.y, 26, .9);
      dot(f.x, f.y, 3.2, 1);
      f.swarm.forEach((p, k) => {
        if (!reduce) p.a += p.s;
        dot(f.x + Math.cos(p.a) * p.d, f.y + Math.sin(p.a * 1.3) * p.d * .7, p.r, .55 + .4 * Math.sin(time * 2 + k));
      });
    });

    if (!reduce && visible) requestAnimationFrame(frame); else running = false;
  }

  const start = () => { if (!running && !reduce) { running = true; requestAnimationFrame(frame); } };

  area.addEventListener('pointermove', (e) => {
    if (e.pointerType !== 'mouse') return;
    const r = area.getBoundingClientRect();
    mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top; mouse.active = true;
  });
  area.addEventListener('pointerleave', () => { mouse.active = false; });

  new ResizeObserver(() => { build(); if (reduce) frame(0); }).observe(area);
  new IntersectionObserver(([e]) => { visible = e.isIntersecting; if (visible) start(); }).observe(area);

  build();
  if (reduce) frame(0); else start();
}
