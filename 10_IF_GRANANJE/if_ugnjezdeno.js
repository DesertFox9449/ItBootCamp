// 19)Za tri uneta broja ispisati koji od njih je najveći, koji od njih je srednji, a koji od njih je najmanji, ovoga puta korišćenjem ugnježdenog grananja.

let b1 = 5;
let b2 = 2;
let b3 = 4;

if(b1 > b2) {
    if(b1 > b3) {
        console.log(`Broj ${b1} je najveci.`);
        if (b2 > b3) {
            console.log(`Broj ${b2} je srednji.`);
            console.log(`Broj ${b3} je najmani.`);
        }
        else {
            console.log(`Broj ${b3} je srednji.`);
            console.log(`Broj ${b2} je najmani.`);
        }
    }
    else {
        console.log(`Broj ${b1} je srednji`);
        if (b2 > b3){
            console.log(`Broj ${b2} je najveci.`);
            console.log(`Broj ${b3} je najmani.`);
        }
        else {
            console.log(`Broj ${b2} je najmani.`);
            console.log(`Broj ${b3} je najveci.`);
        }
    }    
}
