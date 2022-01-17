import { Pacijent } from "./pacijent.js";

let p1 = new Pacijent(`Jelena`, 173, 66);
let p2 = new Pacijent(`Ana`, 180, 72);
let p3 = new Pacijent(`Pera`, 190, 140);
let p4 = new Pacijent(`Mika`, 167, 57);
let p5 = new Pacijent(`Mila`, 150, 70);

console.log(p1.ime);
p1.ime = `         `;
console.log(p1.ime);

p1.stampaj();
console.log(p1.Bmi());
console.log(p1.Kritican());

p2.stampaj();
console.log(p2.Bmi());
console.log(p2.Kritican());

p3.stampaj();
console.log(p3.Bmi());
console.log(p3.Kritican());

let pacijenti = [p1, p2, p3, p4, p5];

// Ispisati podatke o pacijentu sa najmanjom težinom.
let btnMinTez = document.getElementById(`minTez`);
let spanMinTezRez = document.getElementById(`minTezRez`);
btnMinTez.addEventListener(`click`, () => {
    // uzimamo geter .tezina
    let min = pacijenti[0]; // pretpostavka // pacijenti[0] je objekat, a pacijenti[0].tezina je tezina pacijenta
    pacijenti.forEach(p => {
    if (min.tezina > p.tezina) {
        min = p;
    }
    // treba nam ceo objekat, ne samo tezina
    });

    spanMinTezRez.innerHTML = min.stampajListu();
    // console.log(min);
    // min.stampaj();
    
});

// Ispisati podatke o pac sa najvecim BMI

let btnMaxBMI = document.querySelector(`#maxBMI`);
let maxBMIres = document.querySelector(`#maxBMIrez`);

btnMaxBMI.addEventListener(`click`, () => {
    let maxBMI = pacijenti[0]; // Pretpostavka
    for(let i = 1; i < pacijenti.length; i++) {
        if(maxBMI.Bmi() < pacijenti[i].Bmi()) {
            maxBMI = pacijenti[i];
        }
    }
    maxBMIres.innerHTML = maxBMI.stampajListu();
});

// tabela
// ime visina tezina BMI Kritican
// kritince oboji u crveno
// dugme koje oboji kriticne
// stampaj jedan red