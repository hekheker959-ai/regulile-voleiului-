fetch("data.json")
.then(res => res.json())
.then(data => {

    // MENIU
    const menu = document.querySelector(".sidebar ul");
    menu.innerHTML = "";

    data.meniu.forEach(item => {
        menu.innerHTML += `
        <li>
            <a href="${item.link}">${item.titlu}</a>
            <span>${item.descriere}</span>
        </li>
        `;
    });

    // CARDURI
    const cards = document.querySelector(".cards");
    cards.innerHTML = "";

    data.beneficii.forEach(b => {
        cards.innerHTML += `
        <div class="card">
            <b>${b.titlu}</b><br>${b.text}
        </div>
        `;
    });

})
.catch(err => console.log(err));
