(()=>{"use strict";function e(e){const t=document.createElement("p");return t.textContent=e,t}function t(e,t){const n=document.createElement("div");n.classList.add("grid-item");const i=document.createElement("img");return i.src=t,i.alt=e,n.appendChild(i),n}const n=function(){const e=document.querySelector("main");e.textContent="",e.appendChild(function(){const e=document.createElement("div");return e.classList.add("contact"),e.innerHTML='<p>📞123 456 789</p> <p>🏠 H2 Chome-6-7 Yoyogi, Shibuya City, Tokyo 151-0053, Japan</p><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.5524727946686!2d139.696496975788!3d35.68801997258499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188cd04b8f5abd%3A0x36ce84c14fe43b2a!2sMcDonald&#39;s!5e0!3m2!1sen!2sus!4v1697061330365!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',e}())};function i(){const i=document.createElement("header"),d=document.createElement("h1");return d.classList.add("title"),d.textContent="Hyrule Tavern & Grill",i.appendChild(d),i.appendChild(function(){const i=document.createElement("div");i.classList.add("nav-bar");const d=document.createElement("div");d.classList.add("button-nav"),d.textContent="Home",d.addEventListener("click",(t=>{t.target.classList.contains("active")||(a(d),function(){const t=document.querySelector("main");t.textContent="",t.appendChild(function(){const t=document.createElement("div");t.classList.add("home");const n=document.createElement("img");return n.src="images/link-chef-2.png",n.alt="Chef",n.classList.add("link-chef"),t.appendChild(e("Link Cooks For You !")),t.appendChild(e("9 dishes personally handpicked from his hylian ass")),t.appendChild(n),t}())}())}));const c=document.createElement("div");c.classList.add("button-nav"),c.textContent="Menu",c.addEventListener("click",(e=>{e.target.classList.contains("active")||(a(c),function(){const e=document.querySelector("main");e.textContent="",e.appendChild(function(){const e=document.createElement("div");e.classList.add("menu");const n=document.createElement("div");return n.classList.add("grid-menu"),e.appendChild(n),n.appendChild(t("Apple Pie","images/recipes/Apple-Pie-removebg-preview.png")),n.appendChild(t("Biting Meaty Rice","images/recipes/Biting-Meaty-Rice-Balls-removebg-preview.png")),n.appendChild(t("Fried Wild Greens","images/recipes/Enduring-Fried-Wild-Greens-removebg-preview.png")),n.appendChild(t("Hylian Tomato Pizza","images/recipes/Hylian-Tomato-Pizza-removebg-preview.png")),n.appendChild(t("Porgy Meuniere","images/recipes/Porgy-Meuniere-removebg-preview.png")),n.appendChild(t("Veggie Porridge","images/recipes/Sunny-Veggie-Porridge-removebg-preview.png")),n.appendChild(t("Vegetable Curry","images/recipes/Vegetable-Curry-removebg-preview.png")),n.appendChild(t("Simmered Fruit","images/recipes/Warding-Simmered-Fruit-removebg-preview.png")),n.appendChild(t("Spicy Pepper Steak","images/recipes/Spicy-Pepper-Steak-removebg-preview.png")),e}())}())}));const r=document.createElement("div");return r.classList.add("button-nav"),r.textContent="Contact",r.addEventListener("click",(e=>{e.target.classList.contains("active")||(a(r),n())})),i.appendChild(d),i.appendChild(c),i.appendChild(r),i}()),i}function a(e){document.querySelectorAll(".button-nav").forEach((e=>{e!==this&&e.classList.remove("active")})),e.classList.add("active")}!function(){const e=document.querySelector(".content");e.appendChild(i()),e.appendChild(document.createElement("main")),e.appendChild(function(){const e=document.createElement("footer");e.classList.add("footer");const t=document.createElement("p");t.textContent=`Copyright © ${(new Date).getFullYear()} alextirgard00n`;const n=document.createElement("a");n.href="https://github.com/alextirgard00n";const i=document.createElement("i");return i.classList.add("fa-brands"),i.classList.add("fa-github"),n.appendChild(i),e.appendChild(t),e.appendChild(n),e}()),a(document.querySelector(".button-nav:nth-child(3)")),n()}()})();