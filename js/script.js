let intervalTimerID = 0

function syncClock() {
    const timeElement = document.querySelector('[data-testid="currentTimeUTC"]');
    const dayElement = document.querySelector('[data-testid="currentDay"]');
    const meridianElement = document.getElementById("meridianUTC");

    const now = new Date();
    const utcTime = now.toUTCString().split(" ")[4];
    const meridian = now.getUTCHours() >= 12 ? "PM" : "AM";
    const utcDay = new Intl.DateTimeFormat('en-GB', { weekday: 'long', timeZone: 'UTC' }).format(now)

    if (timeElement) {
        timeElement.textContent = utcTime;
    }
    if (meridianElement) {
        meridianElement.textContent = meridian;
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

