// Primeri CallBack Funkcija

let myFunc = callback => {
    callback()
}
// realizacija callback funkcije, vrsi se prilikom poziva roditeljske funkcije
myFunc(() => {
    console.log(`Callback okinuta`);
});

///////////////////////////////////////

let sum = callback => {
    callback(5, 7);
    let br1 = 6;
    let br2 = 4;
    callback(br1, br2);
}
// 1.
// Realizacija funkcije se prosledjije kao parametar
sum((x, y) => {
    console.log(x + y);
});
// 2.
// Kreiramo posebnu funkciju za realizaciju i onda je prosledimo kao parametar
// ne mora da bude anonimna
function printSum(a, b) {
    console.log(a + b);
}
sum(printSum); // poziv funkcije koja realizuje ide bez zagrada
///////////////////////////////////////////

let my = f => { // ne mora da se zove callback, to je samo parametar, samo asocira da je to callback funkcija
    f(`Jelena`)
}
my(x => {
    console.log(`Hello ${x}`);
});

///////////////////////////////////////

let racunaj = (string, cb) => { // cb je CallBack
    console.log(string);
    cb(7, 3);
}

racunaj(`Oduzimanje`, (x, y) => {
    console.log(x - y);
});

// konzol log od konzol loga ne radi, mora da se radi      return

racunaj(`Mnozenje`, (x, y) => {
    console.log(x * y);
});

//////////////////////////////////////////

let racunaj2 = (str, cb) => {
    let a = 11;
    let b = 15;
    console.log(str, cb(a, b));
}

racunaj2(`Deljenje`, (a, b) => {
    let res = a / b;
    return res;
});
////////////////////////////////

let racunaj3 = (str, a, b, cb) => {
    console.log(str, cb(a, b));
}

racunaj3(`Deljenje`, 15, 17, (a, b) => {
    let res = a / b;
    return res;
});