console.log("If else if");

let ocena = 4;
if(ocena == 5) {
    console.log("Ocena je odlican 5!");
}
else if(ocena == 4) { //Ako if else zamenimo sa if, radice ali morace da prodje kroz ceo kod, dok kod if else kad se uslov ispuni prebacuje se na neki drugi problem
    console.log("Ocena je vrlo dobar 4!");
}
else if(ocena == 3) {
    console.log("Ocena je dobar 3!");
}
else if(ocena == 2) {
    console.log("Ocena je dovoljan 2!");
}
else if (ocena == 1) { //ne stavljamo else da neko ne bi uneo veci broj od 5 ili manji od 1
    console.log("Ocena je nedovoljan 1!");
}
else {
    console.log("Pogresan unos ocene!");
}

//////////////////

// let b1 = 5;
// let b2 = 9;
// let b3 = 7;

// let maks = b1; // pretpostavka za maksimalni broj


// if(maks < b2) {
//     //ako je moja pretpostavka losa radim update
//     maks = b2;
// }

// if(maks < b3) {
//     //ako je moja pretpostavka losa radim update
//     maks = b3;
// }

// document.body.innerHTML += `<p>${maks}</p>`;

// ovde else if ne bi radio kako treba, posle prvog if bi stao i ne bi dosao do else_if-a



//////////////////////////////////////////////////////////////////////////////////////////////

// VEZBA

// 1) Za dva uneta broja ispisati koji je veći a koji je manji.

let b1 = 10;
let b2 = 16;

if(b1 > b2) {
    console.log(`Broj ${b1} je veci od broja ${b2}`);
}
else {
    console.log(`Broj ${b2} je veci od broja ${b1}`);
}

// 2) Ispitati da li je uneta temperatura u plusu ili je u minusu. Ukoliko je temperatura nula, računati da je u plusu

let temp = 0;
if (temp < 0) {
    console.log(`Temperatura ${temp} je u minusu.`);
}
else {
    console.log(`Temperatura ${temp} je u plusu.`);
}

// 7) Na osnovu unetog broja poena ispitati koju ocenu profesor treba da upiše učeniku. Učenik je položio ispit ukoliko ima više od 50 poena, u suprotnom je pao ispit. 

let ucenik = 1000;

let ocena6 = 50;
let ocena7 = 60;
let ocena8 = 70;
let ocena9 = 80;
let ocena10 = 90;

if(ucenik < 0) {
    console.log("Los unos bodova");
}
else if(ucenik < ocena6){
    console.log("Ucenik je pao.");
}
else if(ucenik >= ocena6 && ucenik <= 59){
    console.log("Ucenik je dobio ocenu 6.");
}
else if (ucenik >= ocena7 && ucenik <= 69){
    console.log("Ucenik je dobio ocenu 7.");
}
else if (ucenik >= ocena8 && ucenik <= 79){
    console.log("Ucenik je dobio ocenu 8.");
}
else if (ucenik >= ocena9 && ucenik <= 89){
    console.log("Ucenik je dobio ocenu 9.");
}
else if (ucenik >= ocena10 && ucenik <= 100){
    console.log("Ucenik je dobio ocenu 10.");
}
else {
    console.log("Los unos bodova");
}


// 8) Preuzeti koji je dan u nedelji sa računara i ispitati da li je to radni dan ili je u pitanju vikend.

let datum = new Date();
let dan = datum.getHours();

if (dan == 0 || dan == 6) {
    console.log("U pitanju je vikend.");
}
else {
    console.log("U pitanju je radni dan.");
}

// 9) Za vreme preuzeto sa računara ispisati 
// dobro jutro za vreme manje od 12 sati ujutru, 
// dobar dan za vreme manje od 18 sati popodne i u ostalim slučajevima ispisati dobro veče.


if(dan == 0) {
    console.log(`Danas je nedelja, vikend`);

}
else if (dan == 6) {
console.log(`Danas je subota, vikend`);
}

else {
    console.log(`Danas je radni dan`);
}

// 9)  

// 11) Radno vreme jedne programerske firme je od 9h do 17h. Preuzeti vreme sa računara i ispitati da li u to vreme firma radi ili ne radi.



// 13) Za uneti broj ispitati da li je paran ili nije.

let broj = 4;
if (broj % 2 == 0) {
    console.log(`Broj ${broj} je paran.`);
}
else {
    console.log(`Broj ${broj} je neparan.`);
}

// 14) Za uneti broj ispisati da li je deljiv sa 3 ili ne.

broj = 8;
if (broj % 3 == 0) {
    console.log(`Broj ${broj} je deljiv sa 3.`);
}
else {
    console.log(`Broj ${broj} nije deljiv sa 3.`);
}

// 15) Za dva uneta broja, od većeg učitanog broja oduzeti manji i rezultat ispisati na ekranu.

let broj1 = 10;
let broj2 = 12;
if (broj1 > broj2) {
    console.log(broj1 - broj2);
}
else {
    console.log(broj2 - broj1);
}

// 16) Za uneti broj ispitati da li je on manji od nule, veći od nule ili jednak nuli. 
// Ukoliko je manji ili jednak nuli ispisati njegov prethodnik, a ukoliko je veći od nule ispisati njegov sledbenik.

broj = -8;
if (broj <= 0) {
    broj = broj - 1; // broj-- ili broj -= 1
    console.log(broj);
}
else {
    broj = broj + 1;// broj++ ili broj += 1
    console.log(broj);
}

// // 17) Za tri uneta broja ispisati koji od njih je najveći, koji od njih je srednji, a koji od njih je najmanji, korišćenjem if – else if strukture.

// a = 3;
// b = 7;
// let c = 1;
// let imaginarni = a;
// if (imaginarni > b)




///////////////////////////////////////// Jelena 13)
// brojevi koji se dele sa dva bez ostatka su parni
let k = 8;
if(k % 2 == 0) {
    console.log(`Broj ${k} je paran.`);
}
else {
    console.log(`Broj ${k} je neparan.`);
}

// 14)
// nesto / 0 = beskonacno (+ ili - beskonacno)
// 0 / nesto = 0
// 0 je paran broj
k = 0;
if(k % 3 != 0) {
    console.log(`Broj ${k} nije deljiv brojem 3.`);
}
else {
    console.log(`Broj ${k} je deljiv brojem 3.`);
}
//Jelena
//  17) Za tri uneta broja ispisati koji od njih je najveći, koji od njih je srednji, a koji od njih je najmanji, korišćenjem if – else if strukture.

let a1 = 45;
let a2 = 65;
let a3 = 35;

let maks = a1;
if(maks < a2) {
    maks = a2;
}
if(maks < a3) {
    maks = a3;
}
console.log(`Najveci broj je ${maks}`);

// Najmanji broj

let min = a1;
if(min > a2) {
    min = a2;
}

if(min > a3) {
    min = a3;
}
console.log(`Najmanji broj je ${min}`);

// Srednji broj
// Vazi samo za 3 broja
let srednji = a1 + a2 + a3 - min - maks;
console.log(`Sednji broj je ${srednji}`);

// 18) Za učitani broj ispitati da li je ceo.
// 1. Nacin

let s = 15.3;
console.log(s%1);

if (s % 1 == 0) {
    console.log(`Broj ${s} je ceo broj.`);
}
else {
    console.log(`Broj ${s} nije ceo broj.`);
}
// 2. Nacin
s = 14.5;
console.log(Math.floor(s)); // Moze i sa round i ceil
if(Math.floor(s) == s) {
    console.log(`Broj ${s} je ceo broj.`);
}
else {
    console.log(`Broj ${s} nije ceo broj.`);
}
// Ako nema nikave promene pri zaokruzivanju u pitanju je ceo broj


