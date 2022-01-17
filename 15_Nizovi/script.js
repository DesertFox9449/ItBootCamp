// let cars = ["Toyota", "BMW", "Volvo"];

// console.log(cars);

// let numbers = [6, -7, 5.6, -3.14];
// console.log(numbers);

// let random = [6, "Stefan", -8.8, true, [1, 2, 3]];
// console.log(random);

// // pozicioniranje  INDEX; 0, 1, 2, 3, 4, 5 /// pozicija elementa u nizu

// console.log(cars[0]); // Da pristupimo pojedinacnim info iz niza koristimo [] zagrade i broj
// console.log(cars[0,2]);
// console.log(cars[3]);

// console.log(random[4]); // niz niza
// console.log(random[4][1]); // pristupamo nizu unutar niza, 
// //let random = [6, "Stefan", -8.8, true, [1, 2, 3]]; // [1, 2, 3]] == random[4][1]);

// cars[0] = "Peugeot"; // menjamo vrednost index-a 0 novom vrednoscu
// console.log(cars);

// // cars[0] = undefined; // brise element iz niza
// // console.log(cars);

// for (let i = 0; i < cars.length; i++) { //  i <= cars.length - 1 //// je isto
//     console.log(cars[i]);
// }


// ////////////////////////////////////////

// // 1. Ispisati sve elemente niza od 5 stringova.

// let number = [1, 2, 13, 4, 5, 6, 7, 8, 9, 10];
// for(let i = 0; i < number.length; i++) {
//     console.log(number[i]);
// }

// // 2. Odrediti zbir elemenata celobrojnog niza.
// let suma = 0;
// for (let i = 0; i < number.length; i++) {
//     suma += number[i];
// }
// console.log(suma);

// // 3. Odrediti proizvod elemenata celobrojnog niza.
// let proizvod = 1;
// for (let i = 0; i < number.length; i++) {
//     proizvod *= number[i];
// }
// console.log(proizvod);

// // 4. Odrediti srednju vrednost elemenata celobrojnog niza.
// let sredVred = 0;
// suma = 0 ;
// let i = 0;
// for (i; i < number.length; i++) {
//     suma += number[i];

// }
// sredVred = suma / (i);
// console.log(sredVred);
// console.log(i);

// // 5. Odrediti maksimalnu vrednost u celobrojnom nizu.
// let max = 0;
// i = 0;
// for (i; i < number.length; i++) {
//     if (max < i) {
//         max = i;
//     }
// }
// console.log(max);

///////////////////////////////////////////////

////////// Stefan ///////////

let niz = [1, 8, 11, 5, 2];
let niz2 = [1, -8, 13, 0, 2];
let niz3 = [1, 4];

// mozemo da koristimo funkciju za niz da ne bi pisali cod ponovo za sva tri

let sumaElemenata = niz => {
    let suma = 0;                 // suma mora da bude lokalna promenljiva, nikako van funkcije
    for (let i = 0; i < niz.length; i++) {
    
        suma = suma + niz[i];
    }
    return suma;  
    // return suma;  console.log(suma); // Ne Moze return posle console.log-a
    return `Suma elemenata je: ${suma}`; // moze
}
console.log(`Suma elemenata prvog niza je ${sumaElemenata(niz)}.`);
console.log(`Suma elemenata drugog niza je ${sumaElemenata(niz2)}.`);
console.log(`Suma elemenata treceg niza je ${sumaElemenata(niz3)}.`);

// Odrediti proizvod elemenata celobrojnog niza.

let proizvodElemenata = niz => {
    let proizvod = 1;
    for (let i = 0; i < niz.length; i++) {
        proizvod *= niz[i];

    }
    return proizvod;
}
console.log(proizvodElemenata(niz2));
console.log(proizvodElemenata(niz3));

// 4. Odrediti srednju vrednost elemenata celobrojnog niza.
let arSr = niz => {
    let suma = 0;
    let broj = 0;
    for (let i = 0; i < niz.length; i++) {
        suma += niz[i];
        broj++;
    }
    return (broj != 0) ? suma / broj : 0; // kada je broj 0 ispisace nulu, a ne NaN
}

let arSr2 = niz => {
    let suma = sumaElemenata(niz); // pozivamo funkciju za sumu elemenata 
    let broj = niz.length;
    return (broj != 0) ? suma / broj : 0;

}

let arSr3 = niz => (niz.length != 0) ? sumaElemenata(niz) /niz.length : 0;
// dodatno skracenje



console.log(arSr(niz));
console.log(arSr(niz3));
console.log(arSr([]));


console.log(arSr2([]));
console.log(arSr2(niz));
console.log(arSr2(niz3));

console.log(arSr3([]));
console.log(arSr3(niz));
console.log(arSr3(niz3));

/////////// 4. varijacija
////////// Odrediti srednju vrednost parnih elemenata niza



 ///////////////////////////            NIZ




let arSrParnih = niz => {
    let suma = 0;
    let broj = 0;
    for (let i = 0; i < niz.length; i++) {
        if (niz[i] % 2 == 0) {
            suma += niz[i];
            broj++;
        }
    }
    // proveravamo da li ima parnih elemenata
    return broj == 0 ? 0 : suma / broj;
}

console.log(arSrParnih(niz));
console.log(arSr([1, 2, "Pera"])); // NaN
console.log(arSr([1, 2, [3 , 4, 5]])); // NaN

// 5. Odrediti maksimalnu vrednost u celobrojnom nizu.

let maks1 = niz => {
    let max = 0;
    for (let i = 0; i < niz.length; i++) {
        if (max < niz[i]) {
            max = niz[i];
        }
    }
    return max;
}
console.log(maks1(niz));

// 6. Odrediti minimalnu vrednost u celobrojnom nizu.

let mini1 = niz => {
    
    let min = 1000000;
    for (let i = 0; i < niz.length; i++) {
        if (min > niz[i]) {
            min = niz[i];
        }
    }
    return min;
}
console.log(mini1(niz));

// 7. Odrediti indeks maksimalnog elementa celobrojnog niza.

let indexMax = niz => {
    index = "";
    let max = maks1(niz);
    for(let i = 0; i < niz.length; i++) {
        if(niz[i] == max) {
            index = i;
        }
    }
    return index;
}
console.log(indexMax(niz));

// 8. Odrediti indeks minimalnog elementa celobrojnog niza.

let indexMin = niz => {
    index = "";
    let min = mini1(niz);
    for(let i = 0; i < niz.length; i++) {
        if (niz[i] == min) {
            index = i;
        }
    }
    return index;
}
console.log(indexMin(niz));

//////////////////////////////   Stefan   ////////////////////////////

// 5. Odrediti maksimalnu vrednost u celobrojnom nizu.

let maxVrednost = niz => {
    let max = niz[0];
    for (let i = 1; i < niz.length; i++) { // krecemo od drugog elementa u nizu jer je max = niz[0]
        if (niz[i] > max) {
            max = niz[i];
        }
    }
    return max;
}

console.log(maxVrednost(niz));

/*
Ulaz: let niz = [1, 11, 2, 6, 11];
max = 1

i |   niz[i]    |  max
------------------------------
1 |     11      |   11
2 |     2       |   11
3 |     6       |   11
4 |     11      |   11
*/


/* 

Ulaz: let niz = [1, 8, 11, 5, 2];

max = 1 // prvi element niza

i |   niz[i]    |  max
------------------------------
1 |     8       |   8
2 |     11      |   11
3 |     5       |   11
4 |     2       |   11

*/

// 6. Odrediti minimalnu vrednost u celobrojnom nizu.

let minVrednost = niz => {
    let min = niz[0];
    for (let i = 1; i < niz.length; i++) { // krecemo od drugog elementa u nizu jer je max = niz[0]
        if (niz[i] < min) {
            min = niz[i];
        }
    }
    return min;
}

console.log(minVrednost(niz));

// 9. Odrediti broj elemenata celobrojnog niza koji su veći od srednje vrednosti.


let zbir = niz => {

let suma = 0;
    for (let i = 0; i < niz.length; i++) {
        suma += niz[i];
    }
    return suma;
}


let bVeciS = (niz) => {
    let broj = 0;
    let ariSre = zbir(niz) / niz.length;
    console.log(ariSre);
    for (let i = 0; i < niz.length; i++) {
        if (niz[i] > ariSre) {
            broj++;
        }
    }
    return broj
}

console.log(bVeciS(niz));

// 10. Izračunati zbir pozitivnih elemenata celobrojnog niza.

let mojNiz = [1, 2, 3, ,4 , 10, 11];

let zbirPoz = niz => {
    let suma = 0;
    for (let i = 0; i < niz.length; i++) {
        if (niz[i] >= 0) {
            suma += niz[i];
        }
    }
    return suma;
}
console.log(zbirPoz(mojNiz));

// 11.  Odrediti broj parnih elemenata u celobrojnom nizu

let parniNiz = niz => {
    let broj = 0;
    for (let i = 0; i < niz.length; i++) {
        if (niz[i] % 2 == 0) {
            broj++;
        }
    }
    return broj;
}
console.log(parniNiz(mojNiz));

// 12.  Odrediti broj parnih elemenata sa neparnim indeksom.

let mojNiz1 = [1, 2, 3, 4, 10, 11, 22, 23, 42, 44];
//             0, 1, 2, 3  , 4,  5,  6,  7,  8,  9
let pNizNIn = niz => {
    let broj = 0;
    for (let i = 0; i < niz.length; i++) {
        if ((niz[i] % 2 == 0) && (i % 2 == 1)) {
            broj++;
        }
    }
    return broj;
}
console.log(pNizNIn(mojNiz1));

// 13. Izračunati sumu elemenata niza sa parnim indeksom.

let sumaPIndex = niz => {
    let suma = 0;
    for (let i = 0; i < niz.length; i++) {
        if (i % 2 == 0) {
            suma += niz[i];
        }
    }
    return suma;
}

console.log(sumaPIndex(mojNiz1));

// 14.  Promeniti znak svakom elementu celobrojnog niza.

let mojNiz2 = [1, -2, 3, 4, 10, 11, -22, 23, 42, -44];

let promZnak = niz => {
    let printMe = "";
    for (let i = 0; i < niz.length; i++) {
        // if (i >= 0) {
        //     printMe += (niz[i] * -1) + " ";
        // }
        // else {
        //     printMe += (niz[i] * -1) + " ";
        // }
        printMe += (niz[i] * (-1)) + " ";
    }
    return printMe;
}
console.log(promZnak(mojNiz2));

// let mojNiz1 = [1, 2, 3, 4, 10, 11, 22, 23, 42, 44];
// //             0, 1, 2, 3  , 4,  5,  6,  7,  8,  9



// 16. niz stavki za kupovinu
// Dat je niz stavki za kupovinu (članovi niza su stringovi). Prolaskom kroz niz napraviti neuređenu listu i ispisati je u html dokument.

let zaKupovinu = ["jabuke", "kruske", "banane", "hleb", "meso"];

let kupovina = niz => {
    let ul = "<ul>";
    for (let i = 0; i <= niz.length - 1; i++) {
        ul +=`<li>${niz[i]}</li>`;
    }
    ul += "</ul>";
    return ul;
}

// kupovina(zaKupovinu);
document.getElementById(`d1`).innerHTML += kupovina(zaKupovinu);

// 17. Dat je niz imena košarkaškog tima. Prolaskom kroz niz formirati tabelu u čijim su redovima imena tima, i tabelu ispisati u html dokument.

let kosarkasi = ["Teodosic", "Bogdanovic", "Bjelica", "Jokic", "Milosavljevic", "Raduljica"];



let timm = (nizIgraci) => {
    let tim = `<table>
                <tr>
                <th>Nas Tim</th>
                </tr>`;
    for (let i = 0; i <= nizIgraci.length - 1; i++) {
        tim += `<tr>
                <td>${nizIgraci[i]}</td>
                </tr>`;
    }
    tim += `</table>`
    document.body.innerHTML += tim;
}

timm(kosarkasi);

// 18 
// Dat je niz stringova čiji su članovi putanje do slika. Prikazati sve slike u html dokumentu sa putanjama navedenim u nizu.

let slike = [`cilj.png`, `misija.png`, `vizija.png`, `1.jpg`];

let s = nizSlike => {
    for (let i = 0; i < nizSlike.length; i++) {
        document.getElementById(`d2`).innerHTML += `<img src="${nizSlike[i]}">`;
    }

}
s(slike);

// 19
// Ispisati dužinu svakog elementa u nizu stringova.

let timovi = ["CSKA", "Real Madrid", "Partizan", "Mega", "Zvezda"];

let duzinaTima = niz => {

    for (let i = 0; i < niz.length; i++) {
        console.log(niz[i].length);
    }
}
duzinaTima(timovi);

// 20 
// Odrediti element u nizu stringova sa najvećom dužinom.

timovi = ["CSKA ABAABAABABA", "Real Madrid", "Partizan", "Mega", "Zvezda"];

let duzina = niz => {
    let najDuzina = 0;
    let najEle = ``;
    for (let i = 0; i < niz.length; i++) {
        if (niz[i].length > najDuzina) {
            najDuzina = niz[i].length;
            najEle = niz[i];
        }
        
    }
    // for (let i = 0; i < niz.length; i++) {
    //     if (niz[i].length == najDuzina) {
    //         najEle = niz[i];
    //     }
    // }
    console.log(najEle, najDuzina);
}

duzina(timovi);

// 21 
// Odrediti broj elemenata u nizu stringova čija je dužina veća od prosečne dužine svih stringova u nizu.

timovi = ["CSKA", "Real Madrid", "Partizan", "Mega", "Zvezda", "Virtuos"];

let veciPros = niz => {
    let duzina = 0;
    let ariSre = 0;
    let b = ``;
    for (let i = 0; i < niz.length; i++) {
        duzina += niz[i].length;
        // MOZE broj++ ako hocemo da vidimo da li ima vrednnosti u array
        // ako je prazan onda je 0
    }
    ariSre = duzina / niz.length;
    console.log(ariSre);

    for (let i = 0; i < niz.length; i++) {
        if (niz[i].length > ariSre) {
            b++
        }
    }
    console.log(b);

}
veciPros(timovi);

// 22
// Odrediti broj elemenata u nizu stringova koji sadrže slovo 'a’. 

timovi = ["CSKA", "Real Madrid", "Partizan", "Mega", "Zvezda", "Virtuos"];
//
let elementi = niz => {
    let b = ``;
    for (let i = 0; i < niz.length; i++) {
        if ((niz[i].indexOf(`a`) > -1 ) || (niz[i].indexOf(`A`) > -1)) {
            b++;
        }
    }
    console.log(b);
}
elementi(timovi);

// 23
// Odrediti broj elemenata u nizu stringova koji počinju na slovo 'a' ili 'A’.

timovi = ["CSKA", "Real Madrid", "Partizan", "Mega", "Zvezda", "Virtuos", "Apoel"];

let start = niz => {
    let b = 0;
    for (let i = 0; i < niz.length; i++) {
        if ((niz[i].startsWith("a")) || (niz[i].startsWith("A"))) {
            b++;
        }
    }
    console.log(b);
}
start(timovi);

// 24
// 