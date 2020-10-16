// ==========================================
// 1. Declareer een variabele en sla daar de uitkomst van de vergelijking "Is 10 groter dan 20?" in op        // geeft false
// ==========================================
let isGroter = 10 > 20;
console.log(isGroter);


// ==========================================
// 2. Declareer een variabele en sla daar de uitkomst van de vergelijking "Is 10 ongelijk aan 11?" in op        // geeft true
// ==========================================
let isOngelijk = 10!==11;
console.log(isOngelijk);


// ==========================================
// 3. Declareer een variabele en sla daar in op of de woorden 'zoet' en 'sappig' hetzelfde zijn                // geeft false
// ==========================================
let isHetzelfde = "zoet" === "sappig";
console.log(isHetzelfde);


// ==========================================
// 4a. Declareer een variabele en sla daar het rapportcijfer 9 in op.
// 4b. schrijf een script dat checkt of het rapportcijfer groter is dan 8.
//     Als dat zo is, loggen we 'Cum laude!' in de console.                                                     // geeft 'Cum laude!'
// ==========================================
let rapportcijfer = 9;
if (rapportcijfer > 8){
    console.log("Cum laude!");
}


// ==========================================
// 5a. Gebruik onderstaande variabelen isRaining en temperature;
// 5b. Schrijf een script dat "Je kunt een korte broek aan!" logt wanneer het niet regent EN de temperatuur hoger is dan 21 graden
// 5c. Log "Doe een jas aan!" Als het regent OF kouder is dan 12 graden
// Tip: verander de waarde van isRaining en temperature even handmatig om te kijken of jouw 2e conditie klopt
// ==========================================
let isRaining = false;
let temperature = 11;

if (isRaining === false && temperature > 21) {
    console.log("Je kunt een korte broek aan!");
}

if (isRaining === true || temperature < 12) {
    console.log("Doe een jas aan!");
}