const moyenne = Number(prompt("Moyenne sur 20 ?"));
let mention;
if (isNaN(moyenne) || moyenne < 0 || moyenne > 20) {
mention = "saisie invalide";
} else if (moyenne < 10) {
mention = "Ajourné";
} else if (moyenne < 12) {
mention = "Passable";
} else if (moyenne < 14) {
mention = "Assez bien";
} else if (moyenne < 16) {
mention = "Bien";
} else {
mention = "Très bien";
}
alert(`Moyenne ${moyenne} : ${mention}`);