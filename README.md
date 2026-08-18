# Wynn Homepage

Wynn 的个人主页，用于集中展示 AI 产品文章、独立开发作品、个人经历和联系方式。页面采用原生 HTML、CSS 与 JavaScript，不依赖构建工具。

## 主要功能

- 响应式个人介绍、项目、文章、技能和联系版块。
- 支持浅色/深色主题，并在浏览器中保存主题偏好。
- 桌面端机器人跟随光标。
- 自动更新页脚年份。
- 尊重 `prefers-reduced-motion`：用户选择减少动态效果时，会关闭持续动画和机器人光标。

## 本地运行

```bash
git clone https://github.com/rongtaocheng32-ctrl/wynn-homepage.git
cd wynn-homepage
python3 -m http.server 8000
```

打开 <http://localhost:8000>。

## 修改内容

- 在 `index.html` 中更新个人资料、文章与项目链接。
- 在 `style.css` 中调整颜色、排版和响应式规则。
- 在 `script.js` 中维护主题、滚动动画和机器人光标行为。

## 许可证

项目使用 [MIT License](LICENSE)。文章文字、个人照片和外部站点图片仍归各自权利人所有。
