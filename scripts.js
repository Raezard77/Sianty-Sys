const t=t=>console.log(t),e=t=>document.querySelector(t),a=t=>document.querySelectorAll(t),r=document.documentElement,c=t=>r.classList.toggle("debug"),d=t=>{r.getAttribute("data-theme")&&"light"!=r.getAttribute("data-theme")?r.setAttribute("data-theme","light"):r.setAttribute("data-theme","dark")};window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?r.setAttribute("data-theme","dark"):r.setAttribute("data-theme","light"),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",(t=>{const e=t.matches?"dark":"light";r.setAttribute("data-theme",e)}));
//# sourceMappingURL=maps/scripts.js.map
