//"use strict"; // Strict - mora da se kuca sve bez greske, ide u prvoj liniji koda

/* 
// Zadatak 1
var sati = 10;
var minuti = 27;
var prosliSati =  sati;
var prosliMinuti =  minuti;

console.log("Proslo je tacno " + sati + " sati" + " i " + minuti + " minuta od ponoci!");

// Zadatak 2
var sviMinuti = sati * 60 + minuti;

console.log("Proslo je tacno " + sviMinuti + " minuta od ponoci!")

// Zadatak 3
var cenaRobe = 1250;
var uplata = 2000;
var kusur = uplata - cenaRobe;
console.log("Vas kusur je " + kusur + " dinara!") 

// Zadatak 4
var dinar = 2000;
var evro = 200;
const razlika = 117

var dinarVsEuro = dinar / razlika;
console.log("Za " + dinar + " dinara mozete kupiti " + dinarVsEuro + " evra");

var euroVsDinar = evro * razlika;
console.log("Za " + evro + " evra mozete kupiti " + euroVsDinar + " dinara");

//Zadatak 5

var dolar = 20;
var evro2 = 50;
const razlika2 = 1.1;

var dolarVsEuro = dolar / razlika2;
console.log("Za " + dolar + " dolara mozete dobiti " + dolarVsEuro + " evra");

var evroVsDolar = evro2 * razlika2;
console.log("Za " + evro2 + " evra mozete dobiti " + evroVsDolar + " dolara");

*/

// Zdatak 1
let s = 15;
let m = 21;
const danMin = 24 * 60; 

let = odPonoci = s * 60 + m;
console.log("Proslo je " + odPonoci + " minuta od ponoci!");

let = doPonoci = danMin - odPonoci; // (24 - s) * 60 - m;

// Zadatak 2

// Prvi nacin
let minOdPonoci = 921; 
// minOdPonoci = _____ * 50 + minSada
// minOdPonoci - minSada = ____ * 60
// (minOdPonoci - minSada) / 60 = ____
let minSada = minOdPonoci % 60;
let satSada = (minOdPonoci - minSada) /60;
console.log("Sada je " + satSada + ":" + minSada);

// Drugi nacin
//console.log(minOdPonoci / 60); // Deljenje varaca realan broj
//console.log(Math.floor(minOdPonoci / 60)); //- ceo broj manji ili jednak od rezultata 
// Treba nam Math.floor

//console.log(Math.ceil(minOdPonoci / 60)); // - ceo broj manji ili jednak od rezultata 
//console.log(Math.round(minOdPonoci / 60)); // - ceo broj rezultat zaokruzivanja

let satSada2 = Math.floor(minOdPonoci / 60);
let minSada2 = minOdPonoci % 60;
console.log("Sada je " + satSada2 + ":" + minSada2);

//Greska prilikom deklarisanja
// k = 9;
// console.log(k);
// automatski je deklarise kao     var, sto moze da bude problem ako je ti ne deklarises

// Zadatak 3

let cenaRobe = 1750;
let novcanica = 2000;

let kusur = novcanica - cenaRobe;
console.log("Kusur koji treba da se vrati je " + kusur + " dinara!");

// Zadatak 6


// let juro = 100;
// let din = 2000;
// const kursEd = 117; 

// let juroVsDin = juro * kursEd;
// console.log("Mozete kupiti " + juroVsDin + " dinara za " + juro + " evra!");

// let dinVsJuro = din / kursEd;
// console.log("Mozete kupiti " + dinVsJuro + " evra za " + din + " dinara!");

// // Zadatak 7

// let euro = 100;
// let dollar = 200;
// let dinar = 5000;
// const kursDd = 104;
// let dollarVsDinar = dollar * kursDd;
// console.log("Mozete kupiti " + dollarVsDinar + " dinara za " + dollar + " dolara!");

// let dinarVsDollar = dinar / kursDd;
// console.log("Mozete kupiti " + dinarVsDollar + " dolara za " + dinar + " dinara!");

// const kursDolaraUEvre = 0.88;
// let dollarVsEvro = dollar * kursDolaraUEvre;
// console.log("Mozete kupiti " + dollarVsEvro + " evra za " + dollar + " dolara!");

// let evroVsDollar = euro / 0.88;
// console.log("Mozete kupiti " + evroVsDollar + " dolara za " + euro + " evra!");

// Zadatak 6 Stefan

let novacEvri = 200;
let kursEvri = 1117.5782;

let evriUDinare = novacEvri * kursEvri;
console.log("imamo ");

let novacDinari = 1000;
let dinariUEvre = novacDinari / kursEvri;
console.log("Imamo ");

// Zadatak 7 Stefan

let kursDolari = 104.7281

let k1 = novacEvri * kursEvri;
let k2 = k1 / kursDolari;
console.log("Imamo " + k2 + " dolara nakon razmere");

let novacDolari = 200;
let k3 = novacDolari * kursDolari / kursEvri;
console.log("Imamo " + k3 + " dolara nakon razmere" );

// Trenutno vreme i datum

let datum = new Date(); // datum postaje objekat koji sadrzi info o trenutnom datumu i vremenu

// https://www.w3schools.com/js/js_date_methods.asp

let godina = datum.getFullYear();
console.log(godina);

let mesec = datum.getMonth() + 1; // 0 - 11 zbog toga dodajemo 1 da bi bilo od 1 - 12
console.log(mesec, godina);

let danUMesecu = datum.getDate();
console.log(danUMesecu, mesec, godina);

let danUNedelji = datum.getDay();
console.log(danUNedelji); // 0 - 6   gde je nedelja 0, pon 1, uto 2...


















