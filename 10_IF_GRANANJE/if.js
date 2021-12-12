console.log("If naredba graanja");

if(false) {
    console.log("Uslov je ispunjen");
}

console.log("Neki kod...");

// Da bi proverili vrednost IF koristimo operatore poredjenja
// ==, !=, <, >, <=, >=...

let a = 7;
let b = 7;
// a = b  je dodela vrednosti
if (a == b) {
    console.log("a i  b su jednake vrednosti");
}

a = 10;
b = 14;

if(a != b) {
    console.log("a i b nisu jednake vrednosti");
}

a = 4;
b = 4;
if (a < b) {
    console.log("a je strogo manje od b");
}


if (a <= b) {
    console.log("a je manje ili jednako b");
}


////////////////////////////////////////
// Operatori poredjenja tipa i vrednosti

a = 5;
b = "5";
c = a + b;
console.log(c); //konkatenacija

// proverava samo jednakost po vrednosti (nije bitan tip)
if(a == b) {
    console.log("a i b su jednake vrednosti");
}
a = "5";
b = "5";

// proverava jednakost po tipu i po vrednosti (bitan tip)
if(a === b) {
    console.log("a i b su jednaki po vrednosti i po tipu");
}

// !== da li su dve promenjive razlicite bilo po tipu, bilo po vrednosti

a = 7;
b = "7";
if(a !== b) { //nije jednako
    console.log("a i b nisu isti bilo po tipu bilo po vrednosti");
}
/////////////////////

let x = 3;
let y = 2;
let z = 5;
if(x + y == z) {
    console.log("x + y je jednako  z");
}
if( x = z + 2) { // dodela vrednosti
    console.log("hello"); // konzola kaze da je true, ali je to greska
}
