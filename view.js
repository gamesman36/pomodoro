updateView();
function updateView(){
    html = /*html*/`
    <h1>${displayedTime}</h1>
    <button onclick="setTimer()">Start pomodoro timer</button>
    `;

    app.innerHTML = html;
}