import { APP_CONSTANT } from "./constant.js";
import { formatDate } from "./ultils.js";

console.log(APP_CONSTANT);
let comments = [];

document.getElementById("comment-Submit-Button").addEventListener("click", commentSubmitted);


function commentSubmitted() {
    const authorName = document.getElementById("author-name").value;
    const comment = document.getElementById("comment-input").value;
    console.log(authorName, comment);
    if (!authorName || !comment) {
        alert("Name and Comment is required");
        return
    }
    const payLoad = {
        name: authorName,
        comment: comment,
    };

    postComment(payLoad);

}

function postComment(payLoad) {
    const commentEndPoint = APP_CONSTANT.servers_url + "comments" + "?api_key=" + APP_CONSTANT.api_key;
    fetch(commentEndPoint, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payLoad)
    }).then(response => response.json())
        .then(function (response) {
            console.log(response);
            alert("Added Successfully");
            renderComment(response, true);
        })
}


function loadComments() {

    const commentEndPoint = APP_CONSTANT.servers_url + "comments" + "?api_key=" + APP_CONSTANT.api_key;
    fetch(commentEndPoint)
        .then(response => response.json())
        .then(function (response) {
            console.log("response", response);
            comments = response;
            for (let i = 0; i < comments.length; i++) {
                renderComment(comments[i], false)
            }
        })

}





function renderComment(comment, shouldBeOnTop = false) {
    const commentDiv = document.createElement('div');
    commentDiv.setAttribute('class', 'history__block');

    const commentProfileDiv = document.createElement('div');
    commentProfileDiv.setAttribute('class', 'history__profile');

    const profileImg = document.createElement('img');
    profileImg.setAttribute('class', 'history__img');
    profileImg.setAttribute('alt', "user profile picture");
    profileImg.setAttribute('src', "../Assets/Images/Photo-gallery-3.jpg");

    commentProfileDiv.appendChild(profileImg)
    commentDiv.appendChild(commentProfileDiv)

    const dateDiv = document.createElement('div');
    dateDiv.setAttribute('class', 'history__date');

    const dateText = document.createElement('p');
    dateText.textContent = formatDate(comment.timestamp)

    dateDiv.appendChild(dateText);

    commentDiv.appendChild(dateDiv);

    const historyDiv = document.createElement('div'); //I added for Review
    historyDiv.setAttribute('class', 'history__text');

    const historyTextName = document.createElement('p');
    historyTextName.textContent = comment.name;

    const historyTextComment = document.createElement('p');
    historyTextComment.textContent = comment.comment;

    historyDiv.appendChild(historyTextName);

    historyDiv.appendChild(historyTextComment);
    commentDiv.appendChild(historyDiv);
    const commentContainerDiv = document.getElementById('comment-container');

    if (shouldBeOnTop) {
        commentContainerDiv.insertBefore(commentDiv, commentContainerDiv.firstChild)

    }
    else (
        commentContainerDiv.appendChild(commentDiv)

    );




}



loadComments();

