// Vezbanja sa casa
// 1) Date su dve promenljive u kojima su dati vreme u satima i minutima.  Izračunati koliko minuta je prošlo od ponoći.
/*
let sati = 15;
let minuti = 52;
let ukupniMinuti = sati * 60 + minuti;
// Posto ponoc pocinje 00:00 varijabla "ukupniMinuti" nam daje resenje
console.log("Proslo je ukupno " + ukupniMinuti + " minuta od ponoci.");
*/



// 2) Za dato vreme u minutima koji su prošli od ponoći, odrediti koliko je to u satima i minutima.

// let minuti = 600;
// let minutiUSati = 60;
// let sati = Math.floor(minuti/minutiUSati); 
// let sotMinuti = minuti % minutiUSati;
// console.log("U " + minuti + " minuta je proteklo " + sati + " sata i " + sotMinuti + " minuta od ponoci.");


// 3) Date su dve promenljive kojima se zadaje cena robe i uneta novčanica kojom kupac plaća račun. Ispisati koliki kusur kasirka treba da mu vrati.
 
// let cenaRobe = 789;
// let uplata = 2000;
// let kusur = uplata - cenaRobe;
// console.log("Uplatili ste " + uplata + " dinara, cena robe je " + cenaRobe + " dinara, vas kusur je " + kusur + " dinara.");

// 4) Uraditi zadatak 1 tako da se dohvati trenutno vreme, i za njega odredi koliko minuta je prošlo od ponoći.
/*
let trenutnoVremeSati = 15.5;
let minutiUSati = 60;
let trenutnoVremeMinuti = trenutnoVremeSati * minutiUSati;
console.log("Proslo je " + trenutnoVremeMinuti + " minuta od ponoci");

// Vreme do ponoci bi imalo vise smisla

let ponocSati = 24;
let ponocMinuti = ponocSati * minutiUSati;
let doPonociMinuti = ponocMinuti - trenutnoVremeMinuti;
console.log("Trenutno je ostalo " + doPonociMinuti + " minuta do ponoci.");
*/

// 5) Ispisati u konzoli današnji datum u formatima dd.mm.yyyy. i yyyy/mm/dd.
/*
let dd = 28;
let mm = 11;
let yy = 2021;
console.log("Danas je nedelja " + dd + "." + mm + "." + yy + ".");
console.log("Danas je nedelja " + yy + "." + mm + "." + dd + ".");
*/

// 6) Data je promenljiva u kojoj je ukupan broj evra koji posedujemo, kao i promenljiva u kojoj je vrednost trenutnog kursa. Odrediti koliko ćemo imati dinara nakon razmene. Uraditi isto i za konverziju iz dinara u evre.
// 7) Data je promenljiva u kojoj je ukupan broj evra koji posedujemo, kao i promenljive u kojima je vrednost kurseva evro-dinar, kao i dolar-dinar, redom. Odrediti koliko ćemo imati dolara nakon razmene. Uraditi isto i za konverziju iz dolare u evre.

/*
let evri = 120;
let dinari = 8900;
let kursEUD = 117;
let evriUDinare = evri * kursEUD;
let dinariUEvre = dinari / kursEUD;

console.log("Za " + evri + " evra mozete kupiti " + evriUDinare +  " dinara." );
console.log("Za " + dinari + " dinara mozete kupiti " + dinariUEvre +  " evra." );
*/
/*
let evri = 120;
let dinari = 8900;
let dolari = 200;

let kursEUDin = 117;
let kursDUD = 104;
let kursDolUE = 1.13;

//Dolari u evre
let dolariUEvre = dolari / kursDolUE;
console.log("Za " + dolari + " dolara mozete kupiti " + dolariUEvre +  " evra." );

//Evri u dolare
let evriUdolare = evri * kursDolUE;
console.log("Za " + evri + " evra mozete kupiti " + evriUdolare +  " dolara." );

//Evri u dinare
let evriUDinare = evri * kursEUDin;
console.log("Za " + evri + " evra mozete kupiti " + evriUDinare +  " dinara." );

//Dinari u evre
let dinariUEvre = dinari / kursEUDin;
console.log("Za " + dinari + " dinara mozete kupiti " + dinariUEvre +  " evra." );

//Dolari u dinare
let dolariUDinari = dolari * kursDUD;
console.log("Za " + dolari + " dolara mozete kupiti " + dolariUDinari +  " dinara." );

//Dinari u dolare
let dinariUdolari = dinari / kursDUD;
console.log("Za " + dinari + " dinara mozete kupiti " + dinariUdolari +  " dolara." );
*/

// 8) Temperatura iz Celzijusa u Farenhajte i obrnuto.
/*
let c = 20;
let f = -10;
let cUF = c * 1.8 + 32;

console.log(c + " stepeni na celzijusovoj skali je " + cUF + " na ferenhajtovoj skali." );

let fUC = (f - 32) / 1.8;
console.log(f + " stepeni na ferenhajtovoj skali je " + fUC + " na celzijusovoj skali." );
*/

// 9) Temperatura iz Celzijusa u Kelvine i obrnuto.
/*
let k = 20;
let c = 30;

let kUC = k - 273.15;
console.log(k + " stepeni na kelvinovoj skali je " + kUC + " na celzijusovoj skali." );

let cUK = c + 273.15;
console.log(c + " stepeni na celzijusovoj skali je " + cUK + " na kelvinovoj skali." );
*/







