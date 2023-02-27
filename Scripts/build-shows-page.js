import { APP_CONSTANT } from "./constant.js";
import { formatDate } from "./ultils.js";

function loadShows() {
    const showsEndPoint = APP_CONSTANT.servers_url + "showdates" + "?api_key=" + APP_CONSTANT.api_key;
    fetch(showsEndPoint)
        .then(Response => Response.json())
        .then(function (response) {
            console.log(response);
            for (let i = 0; i < response.length; i++) {
                renderShow(response[i], i === 0)
            }
        })
}

loadShows()

function renderShow(show, isFirstShow = false) {
    // Create the show container element
    const showContainer = document.createElement('div');
    showContainer.classList.add('show-container');
    const showLabel = document.createElement('h2');
    showLabel.classList.add('show-label');
    showLabel.textContent = 'SHOWS';

    // Create the date container element and its child elements
    const dateContainer = document.createElement('div');
    dateContainer.classList.add('date-container');

    const dateLabel = document.createElement('p');
    dateLabel.classList.add('show-label', 'date-label-container');
    if (!isFirstShow) dateLabel.classList.add('label-not-first');
    dateLabel.textContent = 'DATE';

    const dateValue = document.createElement('p');
    dateValue.classList.add('date-value-container');
    dateValue.textContent = formatDate(show.date);

    dateContainer.appendChild(dateLabel);
    dateContainer.appendChild(dateValue);

    // Create the venue container element and its child elements
    const venueContainer = document.createElement('div');
    venueContainer.classList.add('venue-container');

    const venueLabel = document.createElement('p');
    venueLabel.classList.add('show-label', 'venue-label-container');
    if (!isFirstShow) venueLabel.classList.add('label-not-first');
    venueLabel.textContent = 'VENUE';

    const venueValue = document.createElement('p');
    venueValue.classList.add('venue-value-container');
    venueValue.textContent = show.place;

    venueContainer.appendChild(venueLabel);
    venueContainer.appendChild(venueValue);

    // Create the location container element and its child elements
    const locationContainer = document.createElement('div');
    locationContainer.classList.add('location-container');

    const locationLabel = document.createElement('p');
    locationLabel.classList.add('show-label', 'location-label-container');
    if (!isFirstShow) locationLabel.classList.add('label-not-first');
    locationLabel.textContent = 'LOCATION';

    const locationValue = document.createElement('p');
    locationValue.classList.add('location-value-container');
    locationValue.textContent = show.location;

    locationContainer.appendChild(locationLabel);
    locationContainer.appendChild(locationValue);

    // Create the buy ticket container element and its child elements
    const buyTicketContainer = document.createElement('div');
    buyTicketContainer.classList.add('buy-ticket-container', 'first-btn-container');

    const buyTicketButton = document.createElement('button');
    buyTicketButton.classList.add('buy-ticket-btn');
    buyTicketButton.textContent = 'BUY TICKETS';

    buyTicketContainer.appendChild(buyTicketButton);

    // Add all the container elements to the show container element
    showContainer.appendChild(dateContainer);
    showContainer.appendChild(venueContainer);
    showContainer.appendChild(locationContainer);
    showContainer.appendChild(buyTicketContainer);

    // Add the show container element and a horizontal rule to the shows container element on the page
    const showsContainer = document.getElementById('shows-container');
    if (isFirstShow) {
        showsContainer.appendChild(showLabel);
    }
    showsContainer.appendChild(showContainer);

    const horizontalRule = document.createElement('hr');
    showsContainer.appendChild(horizontalRule);
}

