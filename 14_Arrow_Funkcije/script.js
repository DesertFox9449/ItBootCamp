function suma(a, b) {  // definicija funkcije
    return a + b;
}
console.log(suma(4, 5));  // poziv f-je




// Anonimne funkcije

// function (a, b) {
//     return a + b;
// }




// Anonimne funkcije,  dodela promenjive

let suma2 = function (a, b) {
    return a + b;
}
console.log(suma2(6, 6));


// Arrow funkcije (skracen zapis Anonimnih Funkcija)
                //zbog => znaka
let suma3 = (a, b) => {
    return a + b;
}

console.log(suma3(5, 3));

// Arrow funcija a ispis poruke

let hello = () => {
    console.log(`Helo there madafaka!`);
}

hello(); // prazne zagrade jer nema promenjivih

////////////////////////////

let pozdrav = (ime, prezime) => {
    console.log(`Zdravo ${ime} ${prezime}.`);
}
pozdrav("Kristijan", "Zdravkovic");
pozdrav(`Vladan`, `Stojic`);

////////////////////////////
// Arrow f-ja kojom se prosedjuje ime i godine korisnika, a ona ispisuje ime i da li je korisnik punoletan ili ne

let korisnik = (ime, godine) => {
    if (godine < 18) {
        
        let poruka = `${ime} je maloletan.`;
        document.body.innerHTML +=`<p style="color: green;">${poruka}</p>`;
    }
    else {
        let poruka = `${ime} je punoletan.`;
        document.body.innerHTML +=`<p style="color: blue;">${poruka}</p>`;
    }
}

korisnik(`Pera`, 28);
korisnik(`Zika`, 17);


//////////////////////////////////////////////////////

/* 
Napisati funkciju neparan koja za uneti ceo broj n vraća tačno ukoliko je neparan ili netačno ukoliko nije neparan.


Napisati funkciju maks2 koja vraća veći od dva prosleđena realna broja. Zatim napisati funkciju maks4 koja vraća najveći od četiri prosleđena realna broja.


Napisati funkciju koja prikazuje sliku za prosledjenu adresu slike.


Napisati funkciju koja za unetu boju na engleskom jeziku boji tekst paragrafa u tu boju.


*/

// 3. Zadatak
// Napisati funkciju neparan koja za uneti ceo broj n vraća tačno ukoliko je neparan ili netačno ukoliko nije neparan.

let neparan = (n) => {
    let res = "";
    if (n % 2 == 1) {
        res = true;
    }
    else {
        res = false;
    }
    return res
}
neparan(3);
console.log(neparan(3));

// 4. Zadatak
//Napisati funkciju maks2 koja vraća veći od dva prosleđena realna broja. Zatim napisati funkciju maks4 koja vraća najveći od četiri prosleđena realna broja.

let maks2 = (b1, b2) => {
    return Math.max(b1,b2);
}
console.log(maks2(15, 9));

let maks4 = (b1, b2, b3, b4) => {
    return Math.max(b1 ,b2 , b3, b4);
}

console.log(maks4(5, 9, 23, 4));

// 5. Zadatak
// Napisati funkciju koja prikazuje sliku za prosledjenu adresu slike.

let slika = (url) => {
    document.body.innerHTML +=`<img src="${url}">`;
}
slika("1.jpg")

// 6. Zadatak
// Napisati funkciju koja za unetu boju na engleskom jeziku boji tekst paragrafa u tu boju.

let boja = (color) => {
    document.body.innerHTML +=`<p style="color: ${color};">Hello there!</p>`;
}
boja("orange") ;

// 7. 
//Napisati program koji sadrži funkciju sedmiDan koja za uneti broj n ispisuje n-ti dan u nedelji (npr. za 0 ispisuje “Nedelja”, za 1 se ispisuje „Ponedeljak“, za 2 se ispisuje „Utorak“, ... ,  a za 7 opet “Nedelja”).
// Pitanje: Kako bismo realizovali ovaj zadatak da se tražio n-ti mesec u godini?

let sedmiDan = (day) => {
    let rez = "";
    day = day % 7;
    switch (day) {
        case 0:
            rez = `Danas je nedelja.`;
            break;

        case 1:
            rez = `Danas je ponedeljak.`;
            break;

        case 2:
            rez = `Danas je utorak.`;
            break;

        case 3:
            rez = `Danas je sreda.`;
            break;

            
        case 4:
            rez = `Danas je cetvrtak.`;
            break;

        case 5:
            rez = `Danas je petak.`;
            break;

        case 6:
            rez = `Danas je subota.`;
            break;


    
        default:
            rez = `Los unos.`;
            break;
    }
    return rez;
}

sedmiDan(1);
console.log(sedmiDan(15));

let nTiMesec = (m) => {
    let rez = "";
    switch (m) {
        case 0:
            rez = `Sada je januar, ${++m}. mesec u godini.`;
            break;

            case 1:
            rez = `Sada je februar, ${++m}. mesec u godini.`;
            break;

            case 2:
            rez = `Sada je mart, ${++m}. mesec u godini.`;
            break;

            case 3:
            rez = `Sada je april, ${++m}. mesec u godini.`;
            break;

            case 4:
            rez = `Sada je maj, ${++m}. mesec u godini.`;
            break;

            case 5:
            rez = `Sada je jun, ${++m}. mesec u godini.`;
            break;

            case 6:
            rez = `Sada je jul, ${++m}. mesec u godini.`;
            break;

            case 7:
            rez = `Sada je avgust, ${++m}. mesec u godini.`;
            break;

            case 8:
            rez = `Sada je septembar, ${++m}. mesec u godini.`;
            break;

            case 9:
            rez = `Sada je oktobar, ${++m}. mesec u godini.`;
            break;

            case 10:
            rez = `Sada je novembar, ${++m}. mesec u godini.`;
            break;

            case 11:
            rez = `Sada je decembar, ${++m}. mesec u godini.`;
            break;
    
        default:
            rez = `Pogresan unos podataka.`;
            break;
    }
    return rez;
}

console.log(nTiMesec(5));


///// Stefan ////

let slika2 = (putanja) => `<img src="1.jpg">`;  // kada je samo return
                                               // nema potrebe otvartai {} i pisati return
//document.body.innerHTML += slika3() 


//////////////////////////// maks 2 zadatak

// let maks2 = (a, b) => {
//     if(a > b) {
//         return a;
//     }
//     else {
//         return b;
//     }

// }

let max2 = (a, b) => {
    return (a > b) ? a : b;
} 

let max3 = (a, b) => (a > b) ? a : b;

console.log(max3(6, 9));


// ? : ternarni operator 
// pita tri uslova

// !(a >b)
// a + b, a && b
// __? __: __


// maks4

let max4 = (b1, b2, b3, b4) => max2(max2(b1, b2), max2(b3, b4));
    // let m1 = max2(b1, b2);
    // let m2 = max2(b1, b2);
    
    // return 
// }
console.log(max4(1, 3, 7, 10));

let max4DN = (b1, b2, b3, b4) => max2(max2(max2(b1, b2), b3), b4);

console.log(max4DN(18, 13, 37, 10));

// Da li je broj paran ili ne

let paran = n => (n % 2 == 0);
// {
    // Drugi nacin

    // if (n % 2 == 0) {
    //     return true;
    // }
    // else {
    //     return false;
    // }

    // Treci nacin
    // (n % 2 == 0)? true : false;
// }

// 8. Napisati funkciju deljivSaTri koja se koristi u ispisivanju brojeva koji su deljivi sa tri u intervalu od n do m.
// Prebrojati koliko ima ovakvih brojeva od n do m.

let deljivSaTri = (n, m) =>
{
    let deljiv = "";
    let i = n;
    let b = 0;
    while (i <= m) {
        if (i % 3 == 0) {
            deljiv += i + " ";
            b++;
        }
        i++;
    }
    console.log((b));
    return deljiv;
    
}

console.log(deljivSaTri(1, 23)); 

// 9. Zadatak
// Napisati funkciju sumiraj koja određuje sumu brojeva od n do m. 
// Brojeve n i m proslediti kao parametre funkciji.

let sumiraj = (n, m) =>
{
    let suma = 0;
    for(let i = n; i <= m; i++) {
        suma += i;
    }
    return suma;
}
console.log(sumiraj(1, 10));

//// Stefan ////
// 7. Zadatak

let sedmiDan1 = n => {
    let dan = n % 7;
    if (dan == 0) {
        return "Ned";
    }
    else if (dan == 1) {
        return "Pon";
    }
    else if (dan == 2) {
        return "Uto";
    }
    else if (dan == 3) {
        return "Sre";
    }
    else if (dan == 4) {
        return "Cet";
    }
    else if (dan == 5) {
        return "Pet";
    }
    else {
        return "Sub";
    }
}

let sedmiDan2 = dan => (dan == 0)? "Ned" :(dan == 1) ? "Pon" : (dan == 2) ? "Uto" : (dan == 3) ? "Sre" : (dan == 4)? "Cet" : (dan == 5) ? "Pet" : "Sub";

for (let i = 0; i <= 7; i++) {
    console.log(sedmiDan2(i));
}



