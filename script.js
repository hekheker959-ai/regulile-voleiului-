document.addEventListener("DOMContentLoaded", function () {

    const data = {
        meniu: [
            {
                titlu: "🏐 Reguli de bază",
                link: "reguli.html",
                descriere: "Terenul, echipele, mingea, seturile, punctajul"
            },
            {
                titlu: "⚠️ Greșeli/Faulturi",
                link: "greseli.html",
                descriere: "Atingerea fileului, dublă atingere, rotație greșită"
            },
            {
                titlu: "🔁 Poziții și rotații",
                link: "pozitii.html",
                descriere: "Cele 6 poziții și regulile rotației"
            },
            {
                titlu: "💡 Curiozități",
                link: "curiozitati.html",
                descriere: "Istorie, recorduri și jucători faimoși"
            }
        ],

        beneficii: [
            {
                titlu: "🏐 Accesibil",
                text: "Nu ai nevoie de echipament complicat, doar o minge și un fileu."
            },
            {
                titlu: "⚡ Dinamic",
                text: "Jocul este rapid și spectaculos, cu multe faze intense."
            },
            {
                titlu: "🤝 De echipă",
                text: "Dezvoltă colaborarea, comunicarea și spiritul de echipă."
            },
            {
                titlu: "👨‍👩‍👧‍👦 Pentru toate vârstele",
                text: "Poate fi jucat de copii, tineri și adulți."
            },
            {
                titlu: "🌍 Răspândit",
                text: "Se joacă peste tot: în săli, pe plajă sau în curți."
            }
        ]
    };

    // MENIU
    const menu = document.querySelector(".sidebar ul");
    if (menu) {
        menu.innerHTML = "";
        data.meniu.forEach(item => {
            menu.innerHTML += `
                <li>
                    <a href="${item.link}">${item.titlu}</a>
                    <span>${item.descriere}</span>
                </li>
            `;
        });
    }

    // CARDURI
    const cards = document.querySelector(".cards");
    if (cards) {
        cards.innerHTML = "";
        data.beneficii.forEach(b => {
            cards.innerHTML += `
                <div class="card">
                    <b>${b.titlu}</b><br>${b.text}
                </div>
            `;
        });
    }

});
