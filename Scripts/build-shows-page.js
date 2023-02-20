/* Add shows to the DOM */
let show = [
    {
        name: "Rihanna",
        age: 35,
        height: 170,
        reallyCool: true
    },
    {
        name: "Bo Bichette",
        age: 24,
        height: 180,
        reallyCool: true
    }
];

/* Use DOM methods to convert JS to HTML */
const peopleEl = document.querySelector(".show");

for (let i = 0; i < show.length; i++) {
    const personEl = document.createElement("article");
    personEl.classList.add("person");

    const nameEl = document.createElement("h3");
    nameEl.innerText = show[i].name;

    personEl.appendChild(nameEl);

    const listEl = document.createElement("ul");

    const ageEl = document.createElement("li");
    ageEl.innerText = show[i].age;
    listEl.appendChild(ageEl);

    const heightEl = document.createElement("li");
    heightEl.innerText = show[i].height;
    listEl.appendChild(heightEl);

    personEl.appendChild(listEl);

    peopleEl.appendChild(personEl);
}