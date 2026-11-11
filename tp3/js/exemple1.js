const prixHT = 120;
const tva = 19;
const prixTTC = prixHT + prixHT * tva / 100;
console.log(`Prix TTC : ${prixTTC} DT`);