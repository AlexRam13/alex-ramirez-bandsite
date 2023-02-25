import { APP_CONSTANT } from "./constant.js";
import { formatDate } from "./ultils.js";

function loadShows() {
    const showsEndPoint = APP_CONSTANT.servers_url + "showdates" + "?api_key=" + APP_CONSTANT.api_key;
    fetch(showsEndPoint)
        .then(Response => Response.json())
        .then(function (response) {
            console.log(response);
            for (let i = 0; i < response.length; i++) {
                renderShow(response[i])
            }
        })
}

loadShows()

function renderShow(show) {
    const showsContainer = document.getElementById("shows-container");
    const showContainer = document.createElement("div");

    const dateContainer = document.createElement("div");
    dateContainer.setAttribute("class", "'date-container', 'show-element'")
    const dateLabelTag = document.createElement("p");
    const dateValueTag = document.createElement("p");
    dateLabelTag.textContent = "DATE";
    dateValueTag.textContent = formatDate(show.date);
    dateContainer.appendChild(dateLabelTag);
    dateContainer.appendChild(dateValueTag);

    const locationContainer = document.createElement("div");
    locationContainer.setAttribute("class", "'location-container', 'show-element'")
    const locationLabelTag = document.createElement("p");
    const locationValueTag = document.createElement("p");
    locationLabelTag.textContent = "VENUE";
    locationValueTag.textContent = show.place;
    locationContainer.appendChild(locationLabelTag);
    locationContainer.appendChild(locationValueTag);

    const placeContainer = document.createElement("div");
    placeContainer.setAttribute("class", "'place-container', 'show-element'")
    const placeLabelTag = document.createElement("p");
    const placeValueTag = document.createElement("p");
    placeLabelTag.textContent = "LOCATION";
    placeValueTag.textContent = show.location;
    placeContainer.appendChild(placeLabelTag);
    placeContainer.appendChild(placeValueTag);

    const buttonContainer = document.createElement("div");
    buttonContainer.setAttribute("class", "'button-container', 'show-element'")
    const buyTicketButton = document.createElement("button");
    buyTicketButton.textContent = "BUY TICKETS";

    showContainer.appendChild(dateContainer);
    showContainer.appendChild(locationContainer);
    showContainer.appendChild(placeContainer);
    showContainer.appendChild(buttonContainer);

    showsContainer.appendChild(showContainer);
} 