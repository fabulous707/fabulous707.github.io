## Fullcalendar（vue3+vite）

❓报错[vite] Internal server error: Missing "./vdom" specifier in "@fullcalendar/core" package
  Plugin: vite:import-analysis

import引用问题

❗官网解决方案

import "@fullcalendar/core/vdom"; // solves problem with Vite

未解决