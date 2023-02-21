// Get the container element
const container = document.getElementById("container");

// Create a new section for fruits
const fruitsSection = document.createElement("div");
fruitsSection.classList.add("section");

// Add a heading to the section
const fruitsHeading = document.createElement("h2");
fruitsHeading.textContent = "Shows";
fruitsSection.appendChild(fruitsHeading);

// Create an unordered list
const fruitsList = document.createElement("ul");

// Create an array of fruits
const fruits = ["DATE", "Mon Sept 06 2021 ", "VENUE", "Ronald Lane", "LOCATION", "San Francisco, CA"];

// Loop through the fruits array to create list items
for (let i = 0; i < fruits.length; i++) {
    // Create a new list item
    const fruitItem = document.createElement("li");
    fruitItem.textContent = fruits[i];
    fruitsList.appendChild(fruitItem);
}

// Add the list to the section
fruitsSection.appendChild(fruitsList);

// Create a button for the fruits section
const fruitsButton = document.createElement("button");
fruitsButton.textContent = "BUY TICKETS";

// Add the button to the section
fruitsSection.appendChild(fruitsButton);

// Add the fruits section to the container
container.appendChild(fruitsSection);

///

// Create a new section for vegetables
const vegetablesSection = document.createElement("div");
vegetablesSection.classList.add("section");

// Add a heading to the section
const vegetablesHeading = document.createElement("h2");
vegetablesHeading.textContent = "";
vegetablesSection.appendChild(vegetablesHeading);

// Create an unordered list
const vegetablesList = document.createElement("ul");

// Create an array of vegetables
const vegetables = ["DATE", "Tue Sept 21 2021", "VENUE", "Pier 3 East ", "LOCATION", "San Francisco, CA"];

// Loop through the vegetables array to create list items
for (let i = 0; i < vegetables.length; i++) {
    // Create a new list item
    const vegetableItem = document.createElement("li");
    vegetableItem.textContent = vegetables[i];
    vegetablesList.appendChild(vegetableItem);
}

// Add the list to the section
vegetablesSection.appendChild(vegetablesList);

// Create a button for the vegetables section
const vegetablesButton = document.createElement("button");
vegetablesButton.textContent = "BUY TICKETS";

// Add the button to the section
vegetablesSection.appendChild(vegetablesButton);

// Add the vegetables section to the container
container.appendChild(vegetablesSection);

///

// Create a new section for drinks
const drinksSection = document.createElement("div");
drinksSection.classList.add("section");

// Add a heading to the section
const drinksHeading = document.createElement("h2");
drinksHeading.textContent = "";
drinksSection.appendChild(drinksHeading);

// Create an unordered list
const drinksList = document.createElement("ul");

// Create an array of drinks
const drinks = ["DATE", "Fri Oct 15 2021", "VENUE", "View Lounge", "LOCATION", "San Francisco, CA"];

// Loop through the drinks array to create list items
for (let i = 0; i < drinks.length; i++);



// Loop through the vegetables array to create list items
for (let i = 0; i < drinks.length; i++) {
    // Create a new list item
    const drinksItem = document.createElement("li");
    drinksItem.textContent = drinks[i];
    drinksList.appendChild(drinksItem);
}

// Add the list to the section
drinksSection.appendChild(drinksList);

// Create a button for the vegetables section
const drinksButton = document.createElement("button");
drinksButton.textContent = "BUY TICKETS";

// Add the button to the section
drinksSection.appendChild(drinksButton);

// Add the vegetables section to the container
container.appendChild(drinksSection);

///

// Create a new section for colors
const colorsSection = document.createElement("div");
colorsSection.classList.add("section");

// Add a heading to the section
const colorsHeading = document.createElement("h2");
colorsHeading.textContent = "";
colorsSection.appendChild(colorsHeading);

// Create an unordered list
const colorsList = document.createElement("ul");

// Create an array of colors
const colors = ["DATE", "Sat Nov 06 2021 ", "VENUE", "Hyatt Agency ", "LOCATION", "San Francisco, CA"];

// Loop through the colors array to create list items
for (let i = 0; i < colors.length; i++) {
    // Create a new list item
    const colorItem = document.createElement("li");
    colorItem.textContent = colors[i];
    colorsList.appendChild(colorItem);
}

// Add the list to the section
colorsSection.appendChild(colorsList);

// Create a button for the colors section
const colorsButton = document.createElement("button");
colorsButton.textContent = "BUY TICKETS";

// Add the button to the section
colorsSection.appendChild(colorsButton);

// Add the colors section to the container
container.appendChild(colorsSection);


///

// Create a new section for movies
const movieSection = document.createElement("div");
movieSection.classList.add("section");

// Add a heading to the section
const movieHeading = document.createElement("h2");
movieHeading.textContent = "";
movieSection.appendChild(movieHeading);

// Create an unordered list
const movieList = document.createElement("ul");

// Create an array of movies
const movies = ["DATE", "Fri Nov 26 2021", "VENUE", "Moscow Center", "LOCATION", "San Francisco, CA"];

// Loop through the movies array to create list items
for (let i = 0; i < movies.length; i++) {
    // Create a new list item
    const movieItem = document.createElement("li");
    movieItem.textContent = movies[i];
    movieList.appendChild(movieItem);
}

// Add the list to the section
movieSection.appendChild(movieList);

// Create a button for the movie section
const movieButton = document.createElement("button");
movieButton.textContent = "BUY TICKETS";

// Add the button to the section
movieSection.appendChild(movieButton);

// Add the movie section to the container
container.appendChild(movieSection);

///

// Create a new section for books
const bookSection = document.createElement("div");
bookSection.classList.add("section");

// Add a heading to the section
const bookHeading = document.createElement("h2");
bookHeading.textContent = "";
bookSection.appendChild(bookHeading);

// Create an unordered list
// const bookList = document.createElement("ul");
const bookList = document.createElement("div");
bookList.classList.add("show-container");



// Create an array of books
const books = ["DATE", "Wed Dec 15 2021", "VENUE", "Press Club ", "LOCATION", "San Francisco, CA"];


// Loop through the books array to create list items
for (let i = 0; i < books.length; i++) {


    bookItem.textContent = books[i];
    bookList.appendChild(bookItem);
}

// Add the list to the section
bookSection.appendChild(bookList);

// Create a button for the book section
const bookButton = document.createElement("button");
bookButton.textContent = "BUY TICKETS";





// Add the button to the section
bookSection.appendChild(bookButton);

// Add the book section to the container
container.appendChild(bookSection);



//test

// Create a new list item
    // if (i % 2 === 0) {
    //     const wrapper = document.createElement("div");
    //     wrapper.classList.add("data-item");
    //     const bookItem1 = document.createElement("p");
    //     const bookItem2 = document.createElement("p");
    //     bookItem1.textContent = books[i];
    //     bookItem2.textContent = books[i + 1];
    //     wrapper.appendChild(bookItem1);
    //     wrapper.appendChild(bookItem2);
    // }
    // for every two items, create a new div
    // append the two items into the div


    ///

// .show - container {
//     display: flex;
//     flex - direction: column;

// }

// @media screen and(min - width: 460px) {
//     .show - container {
//         flex - direction: column;
//     }

//     @media screen and(min - width: 768px) {
//     .show - container {
//             flex - direction: row;
//         }

//         <div class="show-container">
//             <div class="data-item">
//                 <p class="data-title">Date</p>
//                 <p>Tue Sept 21 2021</p>
//             </div>
//             <div>
//                 <p>Date</p>
//                 <p>Tue Sept 21 2021</p>
//             </div>
//             <div>
//                 <button>BUY TICKETS</button></button>
//         </div>
// </div >