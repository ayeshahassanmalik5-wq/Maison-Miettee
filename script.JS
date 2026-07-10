const timerElement = document.getElementById('timer');
const countdownTime = 600; // 10 minutes

function startCountdown() {
    let timeRemaining = countdownTime;
    
    const interval = setInterval(() => {
        if (timeRemaining <= 0) {
            clearInterval(interval);
            timerElement.textContent = "Offer Ended!";
            return;
        }
        
        const minutes = Math.floor(timeRemaining / 60);
        const seconds = timeRemaining % 60;

        timerElement.textContent = `${minutes}m ${seconds}s`;
        timeRemaining--;
    }, 1000);
}

window.onload = startCountdown;