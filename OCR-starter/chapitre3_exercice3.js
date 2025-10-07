// Seconde suivante

// Stockez dans trois variables l'heure actuelle, les minutes actuelles et les secondes actuelles.
// Incrémentez les secondes actuelles de 1 pour obtenir la seconde suivante.
//     Vérifiez si les secondes actuelles étaient égales à 59 (la dernière seconde de la minute).
// Si les secondes actuelles étaient égales à 59, réinitialisez les secondes à 0.
// Vérifiez si les minutes actuelles étaient égales à 59 (la dernière minute de l'heure).
// Si les minutes actuelles étaient égales à 59, réinitialisez les minutes à 0.
// Vérifiez si l'heure actuelle était égale à 23 (la dernière heure de la journée).
// Si l'heure actuelle était égale à 23, réinitialisez l'heure à 0 (minuit).
//     Sinon, incrémentez l'heure actuelle.
// Affichez la nouvelle heure, les minutes et les secondes dans la console.

let actualHour = 21;
let actualMinute = 58;
let actualSecond = 59;

if (actualSecond === 59) {
    actualSecond = 0;
    actualMinute++;
    if (actualMinute === 60){
        actualMinute = 0;
        actualHour++;
        if (actualHour === 24){
            actualHour = 0;
        }
    }
} else {
    actualSecond++;
}
console.log(`l'heure actuel: ${actualHour}:${actualMinute}:${actualSecond}`)