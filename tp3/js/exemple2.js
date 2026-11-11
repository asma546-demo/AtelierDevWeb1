const minutes = Number(prompt("Durée en minutes ?"));
const heures = Math.floor(minutes / 60);
const reste = minutes % 60;
alert(`${minutes} min = ${heures} h ${reste} min`);