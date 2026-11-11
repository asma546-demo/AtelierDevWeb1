const n = Number(prompt("Table de quel nombre ?"));
let texte = "";
for (let i = 1; i <= 5; i++) {
texte = texte + `${n} x ${i} = ${n * i}\n`;
}
alert(texte);