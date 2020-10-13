// ==========================================
// --> LOG DE WAARDE VAN IEDER ANTWOORD DIRECT IN DE TERMINAL <--
// ==========================================

// ==========================================
// 1. Declareer een variabele en sla daar de uitkomst van 4 plus 5 in op.                           // geeft 9
// ==========================================

const outcome1 = 4 + 5;
console.log(outcome1);

// ==========================================
// 2. Declareer een variabele en sla daar de uitkomst van 7 maal 52 in op.                          // geeft 364
// ==========================================

const outcome2 = 7 * 52;
console.log(outcome2);

// ==========================================
// 3. Declareer een variabele en sla daar de uitkomst van 4 + 3 in op, vermenigvuldigd met 7.       // geeft 49
// ==========================================

const outcome3 = (4 + 3) * 7;
console.log(outcome3);

// ==========================================
// 4. Declareer een variabele en sla daar de uitkomst van 36 gedeeld door 6, maal 2 in op.          // geeft 12
// ==========================================

const outcome4 = (36 / 6) * 2;
console.log(outcome4);

// ==========================================
// 5. Declareer twee variabelen en zet daarin respectievelijk de waardes 'zoet' en 'sappig'.
// Declareer nog een variabele en sla daarin de samenvoeging van bovenstaande variabelen in op.     // geeft 'zoetsappig'
// ==========================================

const word1 = 'zoet';
const word2 = 'sappig';
const word3 = word1 + word2;
console.log(word3);

// ==========================================
// 6. Declareer een variabele voor jouw voornaam en een variabele voor jouw achternaam en zet de waardes erin.
// Declareer vervolgens een variabele voor jouw volledige naam en plak bovenstaande variabelen aan elkaar.
// Zorg dat er een spatie tussen zit zonder iets aan de originele variabelen te veranderen.        // geeft bijv. 'Henk Pieters'
// ==========================================

const firstName = 'Henk';
const lastName = 'Pieters';
const fullName = firstName + ' ' + lastName;
console.log(fullName);

// ==========================================
// 7. Declareer een variabele voor jouw woonplaats en een variabele voor provincie en zet de waardes erin.
// Declareer vervolgens een variabele voor jouw locatie en plak jouw de woonplaats en provincie aan elkaar.
// Zorg dat er een komma en spatie tussen zit zonder iets aan de originele variabelen te veranderen. // geeft bijv. Maastricht, Limburg
// ==========================================

const city = 'Maastricht';
const state = 'Limburg';
const location = city + ', ' + state;
console.log(location);