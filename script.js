document.addEventListener("DOMContentLoaded", function () {

  const data = {

    meniu: [
      {
        titlu: "📘 Reguli de bază",
        link: "reguli.html",
        descriere: "Teren, echipă, seturi"
      },
      {
        titlu: "⚠️ Greșeli / Faulturi",
        link: "greseli.html",
        descriere: "Fileu, rotație"
      },
      {
        titlu: "🔁 Poziții",
        link: "pozitii.html",
        descriere: "Cele 6 poziții"
      },
      {
        titlu: "💡 Curiozități",
        link: "curiozitati.html",
        descriere: "Istorie, recorduri"
      },
      {
        titlu: "🏆 Recorduri",
        link: "recorduri.html",
        descriere: "Performanțe"
      }
    ],


    beneficii: [
      {
        titlu: "🏐 Accesibil",
        text: "Ai nevoie doar de o minge."
      },
      {
        titlu: "⚡ Dinamic",
        text: "Joc rapid."
      },
      {
        titlu: "🤝 De echipă",
        text: "Lucru în echipă."
      }
    ]

  };



  /* MENIU */
  const menu = document.querySelector(".sidebar ul");

  if (menu) {

    menu.innerHTML = "";

    data.meniu.forEach(item => {

      menu.innerHTML += `
        <li>
          <a href="${item.link}">
            ${item.titlu}
          </a>

          <span>
            ${item.descriere}
          </span>
        </li>
      `;

    });

  }



  /* CARDURI */
  const cards = document.querySelector(".cards");

  if (cards) {

    cards.innerHTML = "";

    data.beneficii.forEach(card => {

      cards.innerHTML += `
        <div class="card">

          <h3>${card.titlu}</h3>

          <p>${card.text}</p>

        </div>
      `;

    });

  }



  /* CAUTARE */
  const searchBox = document.getElementById("searchBox");

  if (searchBox && menu) {

    searchBox.addEventListener("input", function () {

      const text = this.value.toLowerCase();

      const items = menu.querySelectorAll("li");

      items.forEach(item => {

        const continut = item.innerText.toLowerCase();

        if (continut.includes(text)) {

          item.style.display = "block";

        } else {

          item.style.display = "none";

        }

      });

    });

  }

});s