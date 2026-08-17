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
});

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
