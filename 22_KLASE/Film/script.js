import {Film} from "./film.js";

let f1 = new Film(`Batman`, `Kristofer Nolan`, 2006, [8.2, 9.3, 7.9]);
let f2 = new Film(`Ajkula`, `Stiven Spilberg`, 1999, [8, 9, 7, 6]);
let f3 = new Film(`Spasavanje Redova Rajana`, `Tom Henks`, 2008, [7, 6, 7, 7, 8, 7]);
let f4 = new Film(`Kad jaganjci utihnu`, `Neko`, 2001, [10, 10, 9, 9, 10, 8]);
console.log(f1);
console.log(f1.naslov);
f1.naslov = `    `;
console.log(f1.naslov);
f1.stampaj();

f1.stampaj();
f2.stampaj();
f3.stampaj();
// Testiranje setera za naslov
f1.naslov = `Betmen`;
f1.stampaj();
f2.stampaj();

// console.log(f1.ocene);


// Testiranje getera za naslov
console.log(f1.reditelj);

// Dodavanje ocene u film jedan
f1.dodajOcenu(10);
f1.stampaj();

// Prikaz svih filmova u tabelici

let tabelica = 
`<table border="1">
    <tr>
        <th>Naziv Filma</th>
        <th>Reziser</th>
        <th>Godina Izdanja</th>
        <th>Ocene</th>
        <th>Prosek</th>
    </tr>
    
`;
let filmovi = [f1, f2, f3, f4];
filmovi.forEach(film => {
    tabelica += 
    `
    <tr>
        <td>${film.naslov}</td>
        <td>${film.reditelj}</td>
        <td>${film.godina}</td>
        <td>${film.ocene}</td>
        <td>${film.prosek()}</td>
    </tr>
    `;
});
tabelica += `</table>`
document.body.innerHTML += tabelica;


console.log(f1.prosek()); // radi

// Napraviti funkciju vekFilmova kojoj se prosleđuje niz filmova i ceo broj (vek), a funkcija ispisuje samo one filmove koji su stvoreni u prosleđenom veku
console.log(`Napraviti funkciju vekFilmova kojoj se prosleđuje niz filmova i ceo broj (vek), a funkcija ispisuje samo one filmove koji su stvoreni u prosleđenom veku`);
function vekFilmova(nizFilmova, vek) {
    nizFilmova.forEach(film => {

        let mojFilm = film.godina / 100;
        mojFilm = Math.ceil(mojFilm);
        if(vek == mojFilm) {
            film.stampaj();
        }
        
    });
}
vekFilmova(filmovi, 21);

// Napraviti funkciju prosecnaOcena kojoj se prosleđuje niz filmova, a koja određuje i vraća  prosečnu ocenu svih filmova.
console.log(`Napraviti funkciju prosecnaOcena kojoj se prosleđuje niz filmova, a koja određuje i vraća  prosečnu ocenu svih filmova.`);
let prosecnaOcena = (niz) =>{
    let suma = 0;
    let br = 0;
    let avrg = ``;
    niz.forEach(film => {
        film.ocene.forEach(ocena => {
            suma += ocena;
            br++;
        });
    });
    avrg = suma / br;
    return avrg;
};

console.log(prosecnaOcena(filmovi));


// Napraviti funkciju najboljeOcenjeni kojoj se prosleđuje niz filmova, a ona vraća najbolje ocenjeni film.
console.log(`Napraviti funkciju najboljeOcenjeni kojoj se prosleđuje niz filmova, a ona vraća najbolje ocenjeni film.`);
function najboljeOcenjeni(nizFilmova) {
    let max = nizFilmova[0];
    console.log(max);
    nizFilmova.forEach(film => {
        if(max.prosek() < film.prosek()){
            max = film;
        }
    });
    return max.naslov;
}
console.log(najboljeOcenjeni(filmovi)); 

// Napraviti funkciju osrednjiFilm kojoj se prosleđuje niz filmova a ona vraća film koji je najbliži prosečnoj oceni svih filmova.
console.log(`Napraviti funkciju osrednjiFilm kojoj se prosleđuje niz filmova a ona vraća film koji je najbliži prosečnoj oceni svih filmova.`);
/*
globani prosek = 7;
merimo rastojanje
film 1 avg = 7.5 (film1avg - globaniProsek = 0.5)
film 2 avg = 8.9 (film2avg - globaniProsek = 1.9)
film 3 avg = 6.9 (film1avg - globaniProsek = -0.1)
...
*/
let osrednjiFilm = arr => {
    let globaniProsek = prosecnaOcena(filmovi);
    let filmNajbliziProseku = arr[0] // pretpostavka da je prvi film najblizi proseku
    let najmanjaRazlikaOdProseka = Math.abs(globaniProsek - filmNajbliziProseku.prosek());
    arr.forEach(f => {
        let prosecnaOcenaFilma = f.prosek();
        if(Math.abs(globaniProsek - prosecnaOcenaFilma) < najmanjaRazlikaOdProseka) {
            najmanjaRazlikaOdProseka = Math.abs(globaniProsek - prosecnaOcenaFilma);
            filmNajbliziProseku = f;
        }
    });
    return filmNajbliziProseku;
};
console.log(osrednjiFilm(filmovi));

// Napraviti funkciju najmanjaOcenaNajboljeg kojoj se prosleđuje niz filmova a ona određuje najbolji film i ispisuje njegovu najslabiju ocenu.
console.log(`Napraviti funkciju najmanjaOcenaNajboljeg kojoj se prosleđuje niz filmova a ona određuje najbolji film i ispisuje njegovu najslabiju ocenu.
`);
let najFilm = arr => {
    let najbolji =arr[0].prosek();
    let naj = arr[0];
    let max = arr[0];
    console.log(max);
    arr.forEach(film => {
        if(max.prosek() < film.prosek()){
            max = film;
        }
    });
    return max;
}
let najmanjaOcenaNajboljeg = arr =>  {
    let najBoljiFilm = najFilm(arr);
    let oceneNajboljegFilma = najBoljiFilm.ocene; 
    let najslabijaOcena = oceneNajboljegFilma[0];
    oceneNajboljegFilma.forEach( o => {
        if(o < najslabijaOcena) {
            najslabijaOcena = o;
        }
    });
    console.log(najslabijaOcena);
}
najmanjaOcenaNajboljeg(filmovi)
// console.log(najmanjaOcenaNajboljeg(filmovi));

// Napisati funkciju najmanjaOcena kojoj se prosleđuje niz filmova, a koja vraća koja je najmanja ocena koju je bilo koji film dobio.
console.log(`Napisati funkciju najmanjaOcena kojoj se prosleđuje niz filmova, a koja vraća koja je najmanja ocena koju je bilo koji film dobio.`);
function najmanjaOcena(array) {
    let min = Number.MAX_SAFE_INTEGER;
    array.forEach(film => {
        film.ocene.forEach(ocena => {
            if(min > ocena){
                min = ocena;
            }
        });
    });
    return min;
}
console.log(najmanjaOcena(filmovi));

// Napisati funkciju najcescaOcena kojoj se prosleđuje niz ocena, a ona vraća ocenu koju su filmovi najčešće dobijali. 
console.log(`Napisati funkciju najcescaOcena kojoj se prosleđuje niz ocena, a ona vraća ocenu koju su filmovi najčešće dobijali. `);

// let fi1 = [8.2, 9.3, 7.9, 10];
// let fi2 = [8, 9, 7, 6];
// let fi3 = [7, 6, 7, 7, 8, 7];
// f = [8.2, 9.3, 7.9, 10, 8, 9, 7, 6, 7, 6, 7, 7, 8, 7];
// let f = [];
// f = f.concat(fi1, fi2, fi3);
// f = f.concat(fi1);
// f = f.concat(f2);
// f = f.concat(f3);
// console.log(f);
let sveOcene = array => {
    let arrSveOcene = [];
    array.forEach(f => {
        arrSveOcene = arrSveOcene.concat(f.ocene);
    });
    return arrSveOcene;
};
console.log(sveOcene(filmovi));

// Niz koji prosledjijemo je niz svih ocena
let najcescaOcena = arr => {
    let pretpostavkaElem = arr[0];
    let pretpostavkaElemPojavljivanja = 1; // Sigurno se jednom pojavio
    for(let i = 0; i < arr.length; i++) {
        let tekuci = arr[i]; // zvezdica
        let tekuciBrPojavljivanja = 0;
        for(let j = 0; j < arr.length; j++) {
            if(tekuci == arr[j]) {
                // naišli smo na isti element
                tekuciBrPojavljivanja++;
            }
        }
        if(pretpostavkaElemPojavljivanja < tekuciBrPojavljivanja) {
            pretpostavkaElemPojavljivanja = tekuciBrPojavljivanja;
            pretpostavkaElem = tekuci;
        }
    }
    return pretpostavkaElem;
}
let sve = sveOcene(filmovi); // niz svih ocena
console.log(najcescaOcena(sve));

// Napraviti funkciju iznadOcene kojoj se prosleđuje ocena i niz filmova, a ona vraća niz onih filmova koji su bolje ocenjeni (veća im je prosečna ocena) od prosleđene ocene.
console.log(`Napraviti funkciju iznadOcene kojoj se prosleđuje ocena i niz filmova, a ona vraća niz onih filmova koji su bolje ocenjeni (veća im je prosečna ocena) od prosleđene ocene.`);

let iznadOcene = (ocena, array) => {
    let nizFilmova = [];
    array.forEach(f => {
        if (f.prosek() > ocena) {
            nizFilmova.push(f);
        }
    });
    return nizFilmova;
};

console.log(iznadOcene(7.4, filmovi));


// Napisati funkciju iznadOceneNoviji kojoj se prosleđuje ocena i niz filmova  a koja treba da na ekranu da ispiše sve podatke o najnovijem filmu koji zadovoljava prosleđenu ocenu
console.log(`Napisati funkciju iznadOceneNoviji kojoj se prosleđuje ocena i niz filmova  a koja treba da na ekranu da ispiše sve podatke o najnovijem filmu koji zadovoljava prosleđenu ocenu`);

function iznadOceneNoviji(ocena, array) {
    let maxGod = 1800;
    // math.round ili samo >= ???
    array.forEach(film => {
        if(Math.round(film.prosek()) == ocena) {
            if(maxGod < film.godina) {
                maxGod = film.godina;
            }
        }
    });
    // provera
    array.forEach(film => {
        if(maxGod == film.godina && Math.round(film.prosek()) == ocena) {
            console.log(film);
        }
    });
}
iznadOceneNoviji(8, filmovi);