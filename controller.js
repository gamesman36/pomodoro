function formatTime(secondsLeft){
    let hours = Math.floor(secondsLeft / 60 / 60);
    let minutes = Math.floor(secondsLeft / 60) - (hours * 60);
    let seconds = secondsLeft % 60;
    formattedHours = hours.toString().padStart(2,'0');
    formattedMinutes = minutes.toString().padStart(2,'0');
    formattedSeconds = seconds.toString().padStart(2,'0');
    formattedTime = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}

function setTimer(){
    while(periods.length > 0){
        if(timerSet) return;
        secondsLeft = periods[0] * 60;
        formatTime(secondsLeft);
        displayedTime = formattedTime;
        updateView();
        timer = setInterval(countdown,1000);
        timerSet = true;
    }
    
}

function countdown(){
    secondsLeft--;
    formatTime(secondsLeft);
    displayedTime = formattedTime;
    updateView();
    if(secondsLeft === 0) {
        clearInterval(timer);
        let audio = new Audio("bell.mp3");
        audio.play();
        periods.shift();
        timerSet = false;
    }
}