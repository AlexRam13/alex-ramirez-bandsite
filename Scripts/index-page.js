import { APP_CONSTANT } from "./constant.js";

console.log(APP_CONSTANT);
let comments = [];

function loadComments() {

    const commentEndPoint = APP_CONSTANT.servers_url + "comments" + "?api_key=" + APP_CONSTANT.api_key;
    fetch(commentEndPoint)
        .then(response => response.json())
        .then(function (response) {
            console.log("response", response);
            comments = response;
            for (let i = 0; i < comments.length; i++) {
                renderComment(comments[i])
            }
        })

}

function renderComment(comment) {
    const commentDiv = document.createElement('div');
    commentDiv.setAttribute('class', 'history__block');

    const commentProfileDiv = document.createElement('div');
    commentProfileDiv.setAttribute('class', 'history__profile');

    const profileImg = document.createElement('img');
    profileImg.setAttribute('class', 'history__img');
    profileImg.setAttribute('alt', "user profile picture");
    profileImg.setAttribute('src', "");

    commentProfileDiv.appendChild(profileImg)
    commentDiv.appendChild(commentProfileDiv)

    const dateDiv = document.createElement('div');
    dateDiv.setAttribute('class', 'history__date');

    const dateText = document.createElement('p');
    dateText.textContent = new Date(comment.timestamp)



    const commentContainerDiv = document.getElementById('comment-container');
    commentContainerDiv.appendChild(commentDiv);

}

loadComments();
renderComment(); //CALLING THE FUNCTION 