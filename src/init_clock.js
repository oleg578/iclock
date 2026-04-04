const now = new Date();
const minutes = now.getMinutes();
const hours = now.getHours();
const setClock = function (h, m) {
    const minutesDeg = m * 6; // 360° / 60 = 6° per minute
    const hoursDeg = (h % 12) * 30 + m / 2; // 360° / 12 = 30° per hour
    const minuteHand = document.getElementById("minute-hand");
    const hourHand = document.getElementById("hour-hand");
    if (!minuteHand || !hourHand) {
        return;
    }
    hourHand.style.setProperty('--rotation', hoursDeg.toString());
    minuteHand.style.setProperty('--rotation', minutesDeg.toString());
};
setClock(hours, minutes);

export { setClock };
