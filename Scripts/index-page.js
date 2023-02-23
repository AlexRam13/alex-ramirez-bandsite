let comments = [
    {
        name: "John",
        timestamp: "2023-02-21T10:30:00Z",
        comment: "This is a great post!"
    },
    {
        name: "Jane",
        timestamp: "2023-02-20T12:45:00Z",
        comment: "Thanks for sharing this information."
    },
    {
        name: "Bob",
        timestamp: "2023-02-19T08:15:00Z",
        comment: "I have a question about this topic."
    }
];

function renderComment() {
    const commentDiv = document.createElement('div');
    commentDiv.setAttribute('class', 'history__block');
    console.log('string', commentDiv);
}

renderComment(); //CALLING THE FUNCTION