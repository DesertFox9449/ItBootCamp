console.log("IF_Else grananje");

if(true) {
    console.log("Uslov je ispunjen.");
}
else {
    console.log("USlov nije ispunjen.");
}


if(false) {
    console.log("Uslov je ispunjen.");
}
else {
    console.log("USlov nije ispunjen.");
}

///////////////////////////////////////

a = 10;
b = 7;
if(a < b) {
    console.log("Broj a je strogo manji od broja b");
}
else {
    // console.log("Broj a je veci ili jednak od broja b");
    // `` backtikovi pre broja 1 na tastaturi
    console.log(`Broj ${a} je "veci" ili 'jednak' od broja ${b}`);
    // ${} samo i iskljucivo radi pod beacktickovima
    // mogu se koristiiti "" i ' sa backtikovima
}
/////////////////////////////

let god = 17;
if(god >= 18) {
    console.log("Osoba je punoletna");
}
else {
    console.log("Osoba je maloletna");
}

////////////////////////////////////////////////////////
// 1)
a = 8;
b = 8; 
if(a > b) {
    console.log("broj a je veci od b");
}
else if (a < b) {
    console.log("broj b je veci od a");
}
else {
    console.log("broj a jednak broju b");
}

// 2)

let temperatura = -10;
if (temperatura <= 0) {
    console.log("Temperatura je ispod nule.");
}
else {
    console.log("Temperatura je iznad nule.");
}

// 4)
let datum = new Date();
let vreme = datum.getHours() + 1;
console.log(vreme)
if (vreme <= 12) {
    console.log("Jutro je!");
}
else {
    console.log("Podne je!");
}




// 6) 

let j = 5;
let k = 3;
let p = 25;
if (j > k ) {

    if (j > p) {
        console.log("a je najveci broj");
    }
}
else if (k > p) {
    console.log("b je najveci broj");
}
else {
    console.log("c je najveci broj");
}

/////////////////////////////////////////
// Jelena
// 1)
let br1 = 5;
let br2 = 6;

if(br1 > br2) {
    console.log(`Broj ${br1} je veci od broja ${br2} `);
}
else {
    console.log(`Broj ${br2} je manj ili jednak od broja ${br1} `);
}

// 2) 

let temp = -10;
if(temp >= 0) {
    document.body.innerHTML = `<p style="color:red;">Temperatura od ${temp} stepeni je u plusu</p>`;
}
else {
    document.body.innerHTML = `<p style="color:blue;">Temperatura od ${temp} stepeni je u minusu</p>`;
}

// 3) ZA VEZBU --- u odnosu na pol    if else

let pol = "m"; 
if (pol == "m") {
    // Prikazi avatar muskarca
    document.body.innerHTML += `<img src="Male.png" alt="">`;
    // += kad se nesto dodaje HTML-u
    // razlikuje mala i velika slova tako da "M" nije isto sto i "m"
}
else {
    // Prikazi avatar zene
    document.body.innerHTML += `<img src="Female.png" alt="">`;
}

// 6) Zadatak

let b1 = 5;
let b2 = 9;
let b3 = 7;

let maks = b1; // pretpostavka za maksimalni broj


if(maks < b2) {
    //ako je moja pretpostavka losa radim update
    maks = b2;
}

if(maks < b3) {
    //ako je moja pretpostavka losa radim update
    maks = b3;
}

document.body.innerHTML += `<p>${maks}</p>`;
// document.write.innerHTML += `<p>${maks}</p>`;
// +=  dodaje na predhodni sadrzaj body elementa
// ako stavimo = lepimo preko svega u body-u

