// 主题切换
const themeToggle = document.getElementById('theme-toggle');
const root = document.documentElement;

const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  root.setAttribute('data-theme', savedTheme);
  themeToggle.textContent = savedTheme === 'dark' ? '☀️' : '🌙';
}

themeToggle.addEventListener('click', () => {
  const current = root.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  themeToggle.textContent = next === 'dark' ? '☀️' : '🌙';
  themeToggle.setAttribute('aria-pressed', String(next === 'dark'));
});

themeToggle.setAttribute('aria-pressed', String(root.getAttribute('data-theme') === 'dark'));

// 页脚年份
document.getElementById('year').textContent = new Date().getFullYear();

// 技能条滚动动画
const skillFills = document.querySelectorAll('.skill-fill');
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const width = entry.target.style.width;
        entry.target.style.width = '0';
        requestAnimationFrame(() => {
          entry.target.style.width = width;
        });
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.5 }
);

skillFills.forEach((fill) => observer.observe(fill));

// ===== 机器人鼠标 =====
(function () {
  const canUseRobotCursor = window.matchMedia(
    '(pointer: fine) and (prefers-reduced-motion: no-preference)'
  ).matches;
  if (!canUseRobotCursor) return;

  const el = document.createElement('div');
  el.setAttribute('aria-hidden', 'true');
  el.className = 'robot-cursor';
  el.textContent = '🤖';
  document.body.appendChild(el);

  const cursor = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
  const target = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
  let hovering = false;

  window.addEventListener('mousemove', (e) => {
    target.x = e.clientX;
    target.y = e.clientY;
    hovering = !!(e.target && e.target.closest && e.target.closest('a, button, .btn, [role="button"], input, textarea, select, label'));
  });

  function draw() {
    // 轻微缓动，让机器人“跟着走”
    cursor.x += (target.x - cursor.x) * 0.28;
    cursor.y += (target.y - cursor.y) * 0.28;
    const scale = hovering ? 1.3 : 1;
    el.style.transform = `translate(${cursor.x}px, ${cursor.y}px) translate(-50%, -50%) scale(${scale})`;
    requestAnimationFrame(draw);
  }
  draw();
})();
