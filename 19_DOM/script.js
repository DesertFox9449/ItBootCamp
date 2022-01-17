console.log(document);
console.log(typeof document);

console.log(document.body);
console.log(typeof document.body);

let p1 = document.getElementById(`p2`);
console.log(p1);
console.log(typeof p1);

let cont = document.getElementsByClassName(`container`);
console.log(cont);
console.log(typeof cont);

for (let i = 0; i < cont.length; i++) {
    console.log(cont[i]);
}
// cont.forEach(element => {  // ne mozemo da koristimo forEach
//     console.log(element);
// });
// Prepravimo to u niz
let contNiz = Array.from(cont);
contNiz.forEach(element => {  
    console.log(element);
});

let paragrafi = document.getElementsByTagName(`p`);
for (let i = 0; i < paragrafi.length; i++) {
    console.log(paragrafi[i]);
} 

let linkovi = document.getElementsByName(`link`);
for(let i = 0; i < linkovi.length; i++) {
    console.log(linkovi[i]);
}

// CSS Selektor
p1 = document.querySelector(`#p1`); // kao u css-u
console.log(p1);

// imamo dva css container taga, vraca samo prvi
cont = document.querySelector(`.container`); // kao u css-u
console.log(cont);

// ALL je ukljucen, vraca oba
cont = document.querySelectorAll(`.container`);
console.log(cont);

// moze forEach i for petlja jer je u pitanju pravi niz
for (let i = 0; i < cont.length; i++) {
    console.log(cont[i]);
}

cont.forEach(elem => {
    console.log(elem);
});
/// query selektor za sve paragrafe
paragrafi = document.querySelectorAll(`p`);
console.log(paragrafi);

// jer se tako napise u CSS-u
linkovi = document.querySelectorAll("[name='link']");
console.log(linkovi);


////////////////////////////
/// Vezba
////////////////////////////

// Dohvatiti prvi paragraf na stranici.
let prvi = document.querySelector(`p`);

// Dohvatiti prvi div tag sa klasom „error“.

let prviDiv = document.querySelector(`.error`);
console.log(prviDiv);

// Dohvatiti poslednji red u tabeli.
let zadnjiRed = document.querySelector(`tr:last-child`);
console.log(zadnjiRed);
// console.log(typeof zadnjiRed);
// for (let i = 0; i < zadnjiRed.length; i++) {
//     console.log(zadnjiRed[i]);
// }
// console.log(zadnjiRed[1]);

// Dohvatiti sve linkove na stranici.
linkovi = document.links;
console.log(linkovi);

// Dohvatiti sve slike na stranici.
let slike = document.images;
console.log(slike);

// Sve elemente ispisati u konzoli.
let sviElementi = document.querySelectorAll(`*`);
console.log(sviElementi);




// Dohvatiti prvi div tag sa klasom „error“.
// drugi nacin
let div2 = document.getElementsByClassName(`error`);
console.log(div2[0]);
console.log(div2[div2.length - 1]);




p1.innerHTML = "Promenjen tekst paragrafa"; //moze ili = ili +=
p1.innerHTML += "Promenjen <span>tekst</span> paragrafa";
let sviLinkovi = document.querySelectorAll("a");
sviLinkovi.forEach(link => {
    //HTML atributi
    link.href = "https://www.google.com";
    link.target = "_blank"; //dodajemo novu stvar u linkove
    // CSS stilovi
    // link.style.color = "green";
    // link.style.textDecoration = "none";
    //CSS stilovi - drugi nacin:
    link.style = "color: green; text-decoration:none;" // += ne radi za style
    // ako obrisemo ovde text-decoration:none onda link.style.textDecoration="none" nece raditi jer link.style obrise sve prethodne link.style.stagod i onda je bolje koristiti link.style.stagod nego samo link.style
    //preko metode
    link.setAttribute('name', 'link2'); //isto kao i link.name = "link2"
    link.setAttribute("style", "color: green; text-decoration: none;") //isto kao i link.style = "..."
});

// 1. Selektovati sve paragrafe i u svakom od njih pridodati tekst `VAZNO!!!`
let para = document.querySelectorAll(`p`);


para.forEach(element => {
    element.innerHTML += `<p>VAZNO!!!</p>`;
});

// Svim linkovima na stranici postaviti padding na 5px, font size na 18px i text-decoration na none.

let linkoviA = document.links;
console.log(typeof linkoviA);
for (let i = 0; i < linkoviA.length; i++) {
    linkoviA[i].style = `padding: 5px; font-size: 18px;`; //sa .style sve se brise
    if (i % 2 != 0) { // neparni index - parni link       // nema += kod .style
        linkoviA[i].style = `background-color: green; color: purple;`;
    }
    else {
        linkoviA[i].style = `background-color: blue; color: white;`;
    }
} 
// Parnim linkovima staviti zelenu pozadinsku boju i ljubicastu boju teksta, a neparnim linkovima plavu pozadinsku boju i belu boju teksta.

// Svim slikama na stranici koja su sa ekstenzijom .png, postaviti okvir na debljinu 2px i crvenu boju. 

let sveSlike = document.querySelectorAll(`img`);
// for (let i = 0; i < sveSlike.length, i++) {
//     if (sveSlike[i])
// }
// Napraviti niz od najmanje tri imena. Proći nizom i imena ispisati:

// Svako u novom linku. Ako ime počinje na slovo „S“, link se otvara u novom tabu, a inače se otvara na istoj stranici.

let ime = [`Pera`, `Zika`, `Sika`];

ime.forEach(element => {
    // startsWith
    if (element[0] == `S` || element[0] == `s` ) {
        document.body.innerHTML += `<a href="#" target="_blank">${element}</a>`;
    }
    else {
        document.body.innerHTML += `<a href="#" target="_self">${element}</a>`;
    }
});


// U listi kao stavke liste. Naizmenično stavke liste obojiti sa dve različite boje.

function ulIme(names) {
    let ul = `<ul>`
    names.forEach((element, index) => {
        if (index % 2 == 0) {
            ul += `<li style="color: red;">${element}</li>`;
        }
        else {
            ul += `<li style="color: orange;">${element}</li>`;
        }
    });
    ul += `</ul>`;
    document.body.innerHTML += ul;
}
ulIme(ime);

////////////////////////////// 

// Svim parnim paragrafima na stranici dodati klasu error, a svim neparnim paragrafima dodati klasu success

paragrafi.forEach(p => {
    p.classList.toggle('.error');
});
console.log();


