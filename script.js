let timer; // Variable to store the setInterval

let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;

function updateTime() {
    milliseconds += 10; // Increment milliseconds by 10
    if (milliseconds >= 1000) {
        milliseconds = 0;
        seconds++;
        if (seconds >= 60) {
            seconds = 0;
            minutes++;
            if (minutes >= 60) {
                minutes = 0;
                hours++;
            }
        }
    }

    // Format time to display
    const formattedTime = (hours < 10 ? "0" : "") + hours + ":" +
                          (minutes < 10 ? "0" : "") + minutes + ":" +
                          (seconds < 10 ? "0" : "") + seconds + "." +
                          (milliseconds < 10 ? "00" : milliseconds < 100 ? "0" : "") + milliseconds;

    // Update the display
    document.getElementById("displayTime").textContent = formattedTime;
}

function watchStart() {
    if (!timer) {
        timer = setInterval(updateTime, 10); // Run the updateTime function every 10 milliseconds
    }
}

function watchStop() {
    clearInterval(timer);
    timer = null;
}

function watchReset() {
    clearInterval(timer);
    timer = null;
    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.getElementById("displayTime").textContent = "00:00:00:000";
}
