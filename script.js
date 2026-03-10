document.addEventListener("DOMContentLoaded", function () {

  const data = {
    meniu: [
      { titlu: "📘 Reguli de bază",      link: "reguli.html",      descriere: "Teren, echipă, seturi" },
      { titlu: "⚠️ Greșeli / Faulturi", link: "greseli.html",     descriere: "Fileu, rotație"        },
      { titlu: "🔁 Poziții",             link: "pozitii.html",     descriere: "Cele 6 poziții"        },
      { titlu: "💡 Curiozități",         link: "curiozitati.html", descriere: "Istorie, recorduri"    },
      { titlu: "🏆 Recorduri",           link: "recorduri.html",   descriere: "Performanțe"           }
    ],
    beneficii: [
      { titlu: "🏐 Accesibil", text: "Ai nevoie doar de o minge." },
      { titlu: "⚡ Dinamic",   text: "Joc rapid și captivant."     },
      { titlu: "🤝 De echipă", text: "Lucru în echipă."            }
    ]
  };

  /* ── MENIU ── */
  const menu = document.querySelector(".sidebar ul");

  if (menu) {
    const fragment = document.createDocumentFragment();
    data.meniu.forEach(item => {
      const li = document.createElement("li");
      li.innerHTML = `
        <a href="${item.link}">${item.titlu}</a>
        <span>${item.descriere}</span>
      `;
      fragment.appendChild(li);
    });
    menu.innerHTML = "";
    menu.appendChild(fragment);
  }

  /* ── CARDURI ── */
  const cards = document.querySelector(".cards");

  if (cards) {
    const fragment = document.createDocumentFragment();
    data.beneficii.forEach(card => {
      const div = document.createElement("div");
      div.className = "card";
      div.innerHTML = `<h3>${card.titlu}</h3><p>${card.text}</p>`;
      fragment.appendChild(div);
    });
    cards.innerHTML = "";
    cards.appendChild(fragment);
  }

  /* ── CĂUTARE ── */
  const searchBox = document.getElementById("searchBox");

  if (searchBox && menu) {
    let debounceTimer;
    searchBox.addEventListener("input", function () {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        const text = this.value.toLowerCase().trim();
        menu.querySelectorAll("li").forEach(item => {
          item.style.display = item.textContent.toLowerCase().includes(text) ? "" : "none";
        });
      }, 200);
    });
  }

  /* ── DARK MODE ── */
  const themeBtn = document.getElementById("toggleTheme");

  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
  }

  const updateAria = () => {
    if (!themeBtn) return;
    const isDark = document.body.classList.contains("dark-mode");
    themeBtn.setAttribute("aria-label", isDark ? "Comută la mod luminos" : "Comută la mod întunecat");
  };

  updateAria();

  if (themeBtn) {
    themeBtn.addEventListener("click", function () {
      document.body.classList.toggle("dark-mode");
      localStorage.setItem("theme", document.body.classList.contains("dark-mode") ? "dark" : "light");
      updateAria();
    });
  }

});