// /*
// 1. Zadatak
// Pera i Mika su kupili dva ista džempera. Pera je dao p dinara, Mika je dao m dinara i dobili su kusur od k dinara. Brojeve p, m i k odredite proizvoljno.
// Na osnosvu unetih vrednosti, u konzoli ispisati koliki kusur treba da dobije Pera, a koliki kusur treba da dobije Mika, da bi jednako platili svako svoj džemper.
// */
// let p = 2000;
// let m = 1500;
// let k = 400;
// // ukupno para
// let ukupno = 2000 + 1500;
// let cenaZaDva = ukupno - k;
// let cenaZa1 = cenaZaDva / 2;
// console.log(cenaZa1);
// let peraKusur = p - cenaZa1;
// let mikaKusur = m - cenaZa1;
// if(peraKusur >= 0) {
//     console.log(`Pera treba da dobije kusur od ${peraKusur}.din`);
// }
// else {
//     console.log(`Pera treba da vrati Miki ${peraKusur*(-1)}.din`);
// }

// if(mikaKusur >= 0) {
//     console.log(`Pera treba da dobije kusur od ${mikaKusur}.din`);
// }
// else {
//     console.log(`Pera treba da vrati Miki ${mikaKusur*(-1)}.din`);
// }

// /*
// 2. Zadatak
// Knjiga ima n poglavlja (broj n unosite sami).
// Čitalac je prvog dana pročitao a poglavlja, a drugog dana dva poglavlja više nego prvog dana.
// Na osnovu dodeljenih vrednosti, u konzoli ispisati koliko poglavlja je preostalo čitaocu da pročita do kraja knjige. Pretpostaviti da su vrednosti promenljivih n i a ispravno unete.
// Ako je čitaocu ostalo da pročita manje od polovine ukupnog broja poglavlja, u konzoli ispisati poruku “Ostalo je da se procita još manje od polovine knjige”.
// */

// let n = 10;
// let a = 2;
// let b = a + 2;
// let procitano = (a + b);
// let ostatak = n - procitano;
// if (n / 2 > ostatak) {
//     console.log(`Ostalo je da se procita još manje od polovine knjige`);
// }
// else {
//     console.log(`Ostalo je da se procita još vise od polovine knjige`);
// }

// /*
// Neka je u dnevni kalorijski unos neke osobe zadat u kilo džulima (kJ). Izvršiti konverziju te vrednosti u kalorije (kcal), ako se konverzija vrši po formuli: 1 kcal = 4.1868 kJ. Ukoliko je dobijena vrednost manja od 2000 kcal, ispisati u konzoli poruku “​potrebno je povećati dnevni unos”. U suprotnom, ispisati u konzoli poruku  “​nije potrebno povećati dnevni unos”.
// */

// let kJ = 2000;
// let kcal = kJ / 4.1868;
// console.log(kcal);
// if(kcal > 2000) {
//     console.log(`Nije potrebno povećati dnevni unos`);
// }
// else {

//     console.log(`Potrebno je povećati dnevni unos`);
// }

// Date su dve promenljive u kojima su dati vreme u satima i minutima.  Izračunati koliko minuta je prošlo do ponoći.
// let sati = 10;
// let min = 25;
// // kon sati u min;
// let uMin = sati * 60 + minuti;
// console.log(uMin);
// let ponocMin = 24 * 60;
// let doPonoci = ponocMin - uMin;
// console.log(doPonoci);

// Date su dve promenljive kojima se zadaje cena robe i uneta novčanica kojom kupac plaća račun. Ispisati koliki kusur kasirka treba da mu vrati.
// let cena = 2200;
// let novac = 3000;
// let kusur = novac > cena ? `Kusur je ${novac - cena}.din.`: `Kupac je duzan da doplati ${(novac - cena)*(-1)}.din.`
// console.log(kusur);

// // Uraditi zadatak 1 tako da se dohvati trenutno vreme, i za njega odredi koliko minuta je prošlo od ponoći.
// let date = new Date();
// let sati = date.getHours();
// let minuti = date.getMinutes();
// let uMin = sati * 60 + minuti;

// console.log(uMin);

// let i = 1;
// while (i > -10 ) {
//     console.log(i);
//     i--;
// }

// Ispisati brojeve od 1 do 20:
// let ievi =``;
// let i = 1;
// while (i <= 20) {
//     ievi += i + " ";
//     console.log(i);
//     i++;
// }

// let x = 1;
// while (x <= 20) {
//     if(x % 2 == 0) {
//         console.log(x);
//     }
//     x++;
// }

// Kreirati n paragrafa sa proizvoljnim tekstom i naizmenično ih obojiti u tri različite boje
// let broj = 12;
// let i = 1;
// while (i <= broj) {
//     if(i % 3 == 2) {
//         document.body.innerHTML += `<p style="color: red">Hello there number ${i}</p>`;
//     }
//     else if (i % 3 == 1) {
//         document.body.innerHTML += `<p style="color: blue">Hello there number ${i}</p>`;
//     }
//     else {
//         document.body.innerHTML += `<p style="color: green">Hello there number ${i}</p>`;
//     }
//     i++;
// }

// Odrediti da li je dati prirodan broj n prost. Broj je prost ako je deljiv samo sa jedan i sa samim sobom.
// let n = 7;
// let i = 1;
// let broj = 0;
// let brojevi = "";
// while(i <= n) {
//     if(n % i == 0) {
//         broj++;
//         brojevi += i + " ";
//     }
//     i++;
// }

// if(broj > 2) {
//     console.log(`Broj ${n} nije prost, deljiv je sa ${broj} broja, ${brojevi}.`);
// }
// else {
//     console.log(`Broj ${n} je prost, deljiv je sa ${broj} broja, ${brojevi}.`);
// }

// Odrediti proizvod svih brojeva deljivih sa 11 u intervalu od 20 do 100.

// let n = 20;
// let m = 100;
// let p = 1;
// for(let i = n; i < m; i++) {
//     if(i % 11 == 0) {
//         p *= i;
//         console.log(i);
//     }
// }
// console.log(p);

// Ispisati aritmetičku sredinu brojeva od n do m.
// const n = 0;
// const m = 10;
// let suma = 0;
// let i = n;
// while (i <= m) {
//     suma += i;
//     i++;
// }
// let aritSred = suma / (m + 1 - n);
// console.log(aritSred);

// Kreirati 64 span elemenata i rasporediti ih kao na slici desno, tako da elementi izgledaju kao polja šahovske table. U realizaciji ovog zadatka koristiti for petlju. *

// let brojDiv = 8;
// let m = 8;
// let b = 0;
// let sumB = 1;

// for(let i = 1; i <= brojDiv; i++) {
//     b = sumB
//     let div = `<div>`;
//     if(i % 2 == 1) {
//         for( ; b <= m; b++) {
//             if(b % 2 != 0) {
//                 div += `<span>${b}</span>`;
//             }
//             else {
//                 div += `<span style="background-color: black; color: #fff">${b}</span>`;
//             }

//         }

//     }
//     else {
//         for( ; b <= m; b++) {
//             if(b % 2 != 0) {
//                 div += `<span style="background-color: black; color: #fff;">${b}</span>`;
//             }
//             else {
//                 div += `<span>${b}</span>`;
//             }

//         }
//     }
//     div += `</div>`;
//     document.body.innerHTML += div;

//     console.log(b);
//     sumB = b;

//     m += 8;
// }

// Stringovi

// let ceo = "#kivi, banana, pomorandza";
// let banana = ceo.slice(1,);
// console.log(banana);
// let newCeo = ceo.replace("kivi", "jagoda");
// console.log(newCeo);

// let ime = "Pera";
// let prezime = "jna";
// ime = ime.toLowerCase();
// prezime = prezime.toUpperCase();
// console.log(ime);
// console.log(prezime);

// console.log(ime[1]);

// let pet = 5;
// pet = pet.toString();
// console.log(typeof pet);
// pet = parseInt(pet)
// console.log(pet);

// let mojBroj = 7.2199;
// mojBroj = mojBroj.toFixed(0);
// console.log(mojBroj);

// console.log(document.implementation);

// console.log("24" * "2");
`use strict`;

// add elements
// const friends = ["Michael", "Steven", "Peter"];
// console.log(friends);
// friends[2] = "Jason";
// console.log(friends);
// console.log(friends.push(`John`));
// console.log(friends);
// friends.unshift(`Jay`);
// console.log(friends);

// // remove elements
// const popped = friends.pop(); // last element
// console.log(friends);
// console.log(popped);

// friends.shift(); // izbacuje prvi element niza
// console.log(friends);

// console.log(friends.indexOf(`Steven`));

// console.log(friends.includes(`Steven`));

// const foods = ["apples", "oranges", "carrots"];
// const tomato = foods.push("tomato");
// console.log(tomato);
// const strawberry = foods.unshift("strawberry");
// console.log(strawberry, tomato);
// console.log(foods);
// const pop = foods.pop();
// console.log(pop);
// const shift = foods.shift();
// console.log(shift);
// console.log(foods);

// const jonas = {
//     firstName: "Jonas",
//     lastName: "Schmedtmann",
//     age: 2037 -1991,
//     job: "teacher",
//     firends: ["Michael", "Peter", "Steven"]
// };

// console.log(jonas);
// console.log(jonas.lastName);
// console.log(jonas[`lastName`]);

// const nameKey = "Name";
// console.log(jonas[`first` + nameKey]);
// console.log(jonas[`last` + nameKey]);

// const intrestedIn = prompt(`What do you want to know between firstName, lastName, age, job, and friends`);

// jonas.location = "Portugal";
// jonas["twitter"] = "@jonasschmedtman";
// jonas.married = true;

// jonas[intrestedIn] ? console.log(jonas[intrestedIn]) : console.log(`Wrong input!`);

// if(jonas[intrestedIn]) {
//     console.log(jonas[intrestedIn]);
// }
// else {
//     console.log(`Wrong input!`);
// }

// if(undefined) {
//     console.log(`hello`);
// }
// else {
//     console.log(`Bye`);
// }

// Jonas has 3 friends, and his best friend is called Michael.
// console.log(`${jonas.firstName} has ${jonas.firends.length} friends, and his best friend is called ${jonas.firends[0]}`);

// const jonas = {
//     firstName: "Jonas",
//     lastName: "Schmedtmann",
//     birthYear: 1991,
//     job: "teacher",
//     firends: ["Michael", "Peter", "Steven"],
//     hasDriverslicence: true,

//     // calcAge: function(birthYear) {
//     //     return 2022 - birthYear;
//     // }

//     // calcAge() {
//     //     return 2022 - this.birthYear;
//     // }

//     calcAge() {
//         this.age = 2022 - this.birthYear;
//         return this.age;
//     },

//     combInfo() {
//         console.log(`${this.firstName} is a ${this.calcAge()}-year old ${this.job}, ${this.hasDriverslicence ? `and he has a drivers licence`: `and he doesn't have a drivers licence`}.`);
//     }
// };

// console.log(jonas.calcAge(2000));
// console.log(jonas[`calcAge`](jonas[`birthYear`]));
// console.log(jonas[`calcAge`]());
// console.log(jonas.age);

// // Jonas is a 31-year old teacher, and he has a drivers licence.
// jonas.combInfo();

// for(let i = 1; i < jonasArray.length; i++) {
//     if(typeof jonasArray[i] == `object`) {
//         jonasArray[i].forEach(element => {
//             console.log(element);
//         });
//     }
//     else {
//         console.log(jonasArray[i]);
//     }

// }
// let newTypeOf = [];
// for(let i = 0; i < jonasArray.length; i++) {
//     newTypeOf.push(typeof jonasArray[i]);
//     // newTypeOf[i] = typeof jonasArray[i];

// }

// console.log(newTypeOf);

// continue and break
// --- continue with string ---
// for(let i = 1; i < jonasArray.length; i++) {
//     if(typeof jonasArray[i] !== `string`) continue;

//         console.log(jonasArray[i]);
// }
// // --- Break with number ---
// for(let i = 1; i < jonasArray.length; i++) {
//     if(typeof jonasArray[i] == `object`) break;

//         console.log(jonasArray[i]);
// }

// for(let i = 0; i < 11; i++) {
//     if(i % 2 != 0) break
//     console.log(i);
// }

// function hello() {
//     console.log(`Hello`);
//     if(true) break;
//     console.log(`There`);
// }
// hello();

// const jonasArray = [
//   "Jonas",
//   "Schmedtmann",
//   1991,
//   "teacher",
//   ["Michael", "Peter", "Steven"],
// ];
// console.log(jonasArray);

// let i = jonasArray.length - 1;
// for(i; i >= 0; i--) {
//     console.log(jonasArray[i]);
// }
// let dice = Math.trunc(Math.random() * 6 + 1);
// while (dice != 6) {

//     console.log(dice);
//     dice = Math.trunc(Math.random() * 6 + 1);
//     if(dice === 6) console.log(6);
// }

// let dice = Math.random() * 100;
// dice = Math.trunc(dice);
//     console.log(dice);
// let p = 0;
// while (p < jonasArray.length) {
//   console.log(jonasArray[p]);
//   p++;
// }

// console.log();

// BUG FIXME
// console.log(`Hello`);
