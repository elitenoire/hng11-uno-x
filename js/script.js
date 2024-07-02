let intervalTimerID = 0

function syncClock() {
    const timeElement = document.querySelector('[data-testid="currentTimeUTC"]');
    const dayElement = document.querySelector('[data-testid="currentDay"]');

    const now = new Date();
    const utcTime = now.toUTCString().split(" ")[4];
    const utcDay = new Intl.DateTimeFormat('en-GB', { weekday: 'long', timeZone: 'UTC' }).format(now)

    if (timeElement) {
        timeElement.textContent = utcTime;
    }
    if (dayElement) {
        dayElement.textContent = utcDay;
    }
}

function onDOMContentLoaded() {
    syncClock();
    intervalTimerID = setInterval(syncClock, 1000);
}

function onUnload() {
    clearInterval(intervalTimerID);
}

document.addEventListener("DOMContentLoaded", onDOMContentLoaded)

window.addEventListener("unload", onUnload)

