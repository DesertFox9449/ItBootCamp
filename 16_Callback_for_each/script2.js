/////////////////////////////////

//////// forEach petlja

////////////////////////////////

let a = [1, 9, -6, 5, 0];
/*
function ispis(element) {
    console.log(`Element niza je: ${element}.`);
}

a.forEach(ispis); // ne koristi se cesto
*/

// Arrow funkcija se koristi cesto
a.forEach(element => {
    console.log(`Element: ${element}`);
})

// forEach petlja ne radi samostalno, mora da postoji neki niz






let ja = niz => {

}; // ; treba da bude na kraju Arrow funkcije

// let x = 5;  // jedna komanda



//////////////////////// Stefan /////////////////////////

// Odrediti zbir elemenata celobrojnog niza.

let zbir = (niz) => {
    let s = 0;
    niz.forEach(el => {
        s += el;
    });
    return s;
};

console.log(zbir(a));

// 
// Odrediti zbir parnih elemenata celobrojnog niza.

let zbirParnih = (niz) => {
    let s = 0;
    niz.forEach(el => {
        if (el % 2 == 0) {
            s += el;
        }       
    });
    return s;
};

console.log(zbir(a));
console.log(zbirParnih(a));

// Odrediti zbir parnih indeksa elemenata celobrojnog niza.
let zbirElParniIndex = (niz) => {
    let s = 0;
    niz.forEach((el, index) => { // imamo dva parametara u funkciji pa mora ()
        if (index % 2 == 0) {  // po drugom parametru on UVEK navodi index elementa
            s += el;
        }       
    });
    return s;
};

console.log(zbirElParniIndex(a));


//////////////////////////////////////////////////////////////

// Zadatak 3
// Odrediti proizvod elemenata celobrojnog niza.

let proizvod = niz => {
    let p = 1;
    niz.forEach(element => {
        p *= element;
    });
    return p;
};


a = [1, 9, -6, 5, 1];

console.log(proizvod(a));

// Zadatak 4
// Odrediti srednju vrednost elemenata celobrojnog niza.

let srednjaVrednost = niz => {
    let suma = 0;
    let ariSre = ``;
    niz.forEach(element => {
        suma += element;
    });
    ariSre = suma / niz.length;
    console.log(ariSre);
};

srednjaVrednost(a);

// Zadatak 5
// Odrediti maksimalnu vrednost u celobrojnom nizu.

let maks = niz => {
    let max = 0;
    niz.forEach(element => {
        if (element > max) {
            max = element;
        }
    });
    console.log(max);
};
maks(a);
// a = [1, 9, -6, 5, 1];

// Zadatak 6
// Odrediti minimalnu vrednost u celobrojnom nizu.

let mini = niz => {
    let min = 0; // ako su brojevi svi u minusu nece da radi
    niz.forEach(element => {
        if (element < min) {
            min = element;
        }
    });
    console.log(min);
};
// a = [1, 9, -6, 5, 1];
mini(a);

// Zadatak 7
// Odrediti indeks maksimalnog elementa celobrojnog niza.

let indexMax = niz => {
    let max = 0;
    niz.forEach(element => {
        if (element > max) {
            max = element;
        }
    });

};

// STEFAN
/////////////////////////////////////////////
// Zadatak 7
// Odrediti indeks maksimalnog elementa celobrojnog niza.

let indexMax1 = niz => {
    let max = niz[0];
    let imax = 0;
    niz.forEach((el, i) => {
        if(el > max) {
            max = el;
            imax = i;
        }

    });
    return imax;
};

console.log(indexMax1(a));


// Zadatak 8
// Odrediti indeks minimalnog elementa celobrojnog niza.
// koristimo funkcije od ranije

let indexMaxCallback = (niz) => {
    let max = maxEl(niz);
    let imax;
    niz.forEach((el, i) => {
        if(el == max) {
            imax = i;
        }
    });
    return imax;
};

///////

let indexMinCallback = (niz) => {
    let min = minEl(niz);
    let imin;
    niz.forEach((el, i) => {
        if(el == min) {
            imin = i;
        }
    });
    return imin;
};

//////////////////////////////////////

let indexSvojstvo = (niz, svojstvo) => {
    let s = svojstvo(niz);
    let index;
    niz.forEach((el, i) => {
        if(el == s) {
            index = i;
        }
    });
    return index;
};

console.log(indexSvojstvo(a, maxEl));
console.log(indexSvojstvo(a, minEl));

