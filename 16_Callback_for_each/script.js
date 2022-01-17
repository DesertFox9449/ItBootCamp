//////// Zadatak 1

// function ispisKonzola(niz) {
//     let res = "";
//     for(let i = 0; i < niz.length; i++) {
//         res += niz[i] + " ";
//     }
//     console.log(res);
// }



// function ispisHTML(niz) {
//     let res = "";
//     for(let i = 0; i < niz.length; i++) {
//         res += niz[i] + " ";
//     }
//     document.body.innerHTML +=`<div>${res}</div>`;
// }


// let brojevi = [1, 6, -4, 9];
// ispisKonzola(brojevi);
// ispisHTML(brojevi);

// za konzolu
function ispisKonzola(poruka) {
    console.log(poruka);
}

// za HTML
function ispisStranica(poruka) {
    document.body.innerHTML +=`<div>${poruka}</div>`;
}

// 
function ispisNiza(niz, cb) {
    let res = "";
    for(let i = 0; i < niz.length; i++) {
            res += niz[i] + " ";
    }
    cb(res);
}

let brojevi = [1, 6, -4, 9];
ispisNiza(brojevi, ispisKonzola); // nema prarametara za ovu funkciju
//                  callback funkcija nema parametara

ispisNiza(brojevi, ispisStranica); // nema prarametara za ovu funkciju
//                  callback funkcija nema parametara



// Isti zadatak, samo se pozivaju anonimne funkcije

ispisNiza(brojevi, function(poruka) {
    console.log(poruka);
});

ispisNiza(brojevi, function(poruka) {
    document.body.innerHTML += `<div>${poruka}</div>`;
});

// Isti zadatak, samo se pozivaju Arrow funkcije

ispisNiza(brojevi, poruka => {
    console.log(poruka);
});

ispisNiza(brojevi, poruka => {
    document.body.innerHTML += `<div>${poruka}</div>`;
})


// Odrediti max broj elemenata i min elemenata u nizu

// max

function maxEle(niz) {
    let max = niz[0];
    let b = 0;
    for (let i = 1; i < niz.length; i++) {
        if (max < niz[i]) {
            max = niz[i];
        }
    }
    for (let i = 0; i < niz.length; i++) {
        if (max == niz[i]) {
            b++;
        }
    }
    console.log(b, max);
}

let nizBrojeva = [1, 2, 7, 4, -7, -8, 7, -8, -3, -8];
maxEle(nizBrojeva);

function minEle(niz) {
    let min = niz[0];
    let b = 0;
    for (let i = 1; i < niz.length; i++) {
        if (min > niz[i]) {
            min = niz[i];
        }
    }
    for (let i = 0; i < niz.length; i++) {
        if (min == niz[i]) {
            b++;
        }
    }
    console.log(b, min);
}
minEle(nizBrojeva);



//////////////////////////

function minMax(niz) {
    let max = niz[0];
    let min = niz[0];
    for (let i = 1; i < niz.length; i++) {
        if (max < niz[i]) {
            max = niz[i];
        }
        if (min > niz[i]){
            min = niz[i];
        }
    }
    console.log(min, max);
    // cb(max);
    // cb(min);
}
minMax(nizBrojeva);

// function brojMaxMin(niz, max, min) {
//     let bMax = 0;
//     let bMin = 0;
//     for (let i = 0; i < niz.length; i++) {
//         if (max == niz[i]) {
//             bMax++;
//         }
//         if (min == niz[i]) {
//             bMin++;
//         }
//     }
//     console.log(bMax, max);
//     console.log(bMin, min);
// }
    
// brojMaxMin(nizBrojeva, minMax);


////////////////////////////// Stefan ///////////////////////////////////

/*
a) odredi broj maksimalnih elemenata u celobrojnom nizu
b) odredi broj minimalnih elemenata u celobrojnom nizu
 */

// function brojMaxEl(niz) {
//     let max = niz[0];
//     for (let i = 1; i < niz.length; i++) {
//         if (niz[i] > max) {
//             max = niz[i];
//         }
//     }
//     let broj = 0;
//     for (let i = 0; i < niz.length; i++) {
//         if (niz[i] == max) {
//             broj++;
//         }
//     }
//     return broj;
// }


// function brojMinEl(niz) {
//     let min = niz[0];
//     for (let i = 1; i < niz.length; i++) {
//         if (niz[i] < min) {
//             min = niz[i];
//         }
//     }
//     let broj = 0;
//     for (let i = 0; i < niz.length; i++) {
//         if (niz[i] == min) {
//             broj++;
//         }
//     }
//     return broj;
// }

function maxEl(niz) {
    let max = niz[0];
    for (let i = 1; i < niz.length; i++) {
        if (niz[i] > max) {
            max = niz[i];
        }
    }
    return max;
}

function minEl(niz) {
    let min = niz[0];
        for (let i = 1; i < niz.length; i++) {
            if (niz[i] < min) {
                min = niz[i];
            }
        }
        return min;
}

function brojSvojstvoNiz(niz, svojstvo) {
    let s = svojstvo(niz); // prosledjuje se niz funkciji maxEl ili minEl kada se poziva
    let broj = 0;
    for (let i = 0; i < niz.length; i++) {
        if (niz[i] == s) {
            broj++;
        }
    }
    return broj;
}

let temperature = [0, 0, 1, 2, 2, 1, 2, 1, 0, 0];


console.log(brojSvojstvoNiz(temperature, maxEl));
console.log(brojSvojstvoNiz(temperature, minEl));














