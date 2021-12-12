console.log("Pozdrav iz JavaScript datoteke!");

// let x = 3;
// console.log(x);

// javlja se greska jer je let x deklarisana
// u drugom JS fajlu
// sve datoteke interaguju jedna sa drugom u HTML-u
// Postoje moduli koji razdvajaju kod datoteka
// radicemo to kasnije 

let a = 3, b = 6;
// isto sto i
// let a = 3;
// let b = 6;
console.log(a * b);

console.log ("Pera" + " " + "Stankovic")
//isto sto i
console.log ("Pera" + " Stankovic")
console.log ("Pera" * " Stankovic") // NaN (Not a Number)

b = b / a;
console.log (a, b); // a = 3. b = 2
a = b * a + a; // 2 * 3 + 3 = 6 + 3 = 9
console.log(a, b); // a = 9, b = 2

b = (a - 2 * b) / b; // (9 - 2 * 2) / 2 = (9 - 4) / 2 = 5 / 2 = 2.5
console.log(a, b);




//a = a + 10; // 9 + 10 = 19 
// promenljiva a se povecava za 10
// isto sto i
a += 10;
console.log(a);

// b = b / a; je isto sto i
b /= a;
console.log(b);

// ++ povecava vrednost za 1
// -- smanjuje vrednost za 1

// a = a + 1;
// a += 1;
//a++; // 3 razlicita nacina 
// a = 19 + 1 / a = 20

// moze i  
++a
console.log(a);

// a++ i ++a su nekad iste vrednosti, nekad ne

let c = 5;
console.log(c++); 
// Prvo se iskoristi stara vrednost promenljive u izrazu, pa se onda vrednost promenjive poveca / c = 5
console.log(c); 
// Tek nakon narednog pozivanja se vrednost povecava za 1/ c = 5 + 1 = 6

let d = 3;
console.log(++d);
// Vrednost promenjive je povecana, pa se onda nova vrednost koristi u izrazu / d = 3 + 1 = 4
console.log(d);
// Vrednost je takodje 4

c = 4;
d = 3; 
x = (c++) * (--d); // 4 * 2 = 8
console.log(c, d, x); 
// c = ? d = ? x = ?
// c = 5 d = 2 x = 8

//Deljenje po modulu/ OStatak pri deljenju
console.log(7 % 2); // 7 = 3 * 2 + 1 ====1
console.log(9 % 2); // 9 = 4 * 2 + 1 ====1
console.log(180 % 60); // 180 = 3 * 60 + 0 ====0 
// Modul sa 60 moguci rezultati 0, 1, 2, ..., 59

console.log(365 % 7);
// razlika u danima u godini 1

console.log(4 ** 3);
// Stepenovanje

c = 3;
d = 1 + (c ** 3) // 1 + (3 * 3 * 3) = 1 + 27 = 28

// Nisu svuda potrebne zagrade
// Prati se matematicka prednost operacija

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





