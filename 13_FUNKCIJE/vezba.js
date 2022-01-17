
// Napisati funkciju zbir koja računa zbir dva realna broja.
// Šta bi trebalo izmeniti da bi se dobila razlika, proizvod ili količnik dva broja.

function zbir(b1, b2) {
    let suma = b1 + b2;
    let pro = b1 * b2;
    let d = b1 / b2;
    let o = b1 - b2;
    let promena = suma;
    return promena;
}

let z = zbir(2, 4);
console.log(z);

// Napisati funkciju neparan koja za uneti ceo broj n vraća tačno ukoliko je neparan ili netačno ukoliko nije neparan

function neparan(n) {
    if (n % 2 != 0) {
        n = "tacno";
        
    }
    else {
        n = "netacno";
    }
    return n;
}

let parNep = neparan(3); 
console.log(parNep);

////////////////////////////////////// Jelena
// Napisati funkciju zbir koja računa zbir dva realna broja.
// Šta bi trebalo izmeniti da bi se dobila razlika, proizvod ili količnik dva broja.

function racunaj(b1, b2, operacija) {
    if (operacija == "+") {
        let rezultat = b1 + b2;
        console.log(rezultat);
    }
    else if (operacija == "-") {
        let rezultat = b1 -b2;
        console.log(rezultat);
    
    }
    else if (operacija == "*") {
        let rezultat = b1 * b2;
        console.log(rezultat);
    }
    else if (operacija == "/") {
        if (b2 == 0) {
            console.log(`Deljenje nulom nije dozvoljeno.`); //deljenje nulom nije dozvoljeno
        }
        else {
            let rezultat = b1 / b2;
        console.log(rezultat);
        }
        
    }
    else {
        console.log("Pogresan unos.");
    }
}

racunaj(5, 4, "+");
racunaj(5, 4, "-");
racunaj(5, 4, "*");
racunaj(5, 4, "/");
racunaj(5, 0, "/");
racunaj(5, 0, "%");

if(true) { //============================
    let test = "Zdravo";
    if (test == "Zdravo") {           // let radi samo u sklopu {} zagrada
        console.log(test);
           //============================
    } 
}
// console.log(test);

function racunaj(b1, b2, operacija) {
    let rezultat = "";
    if (operacija == "+") {
         rezultat = b1 + b2;
        
    }
    else if (operacija == "-") {
         rezultat = b1 - b2;
        
    
    }
    else if (operacija == "*") {
         rezultat = b1 * b2;
        
    }
    else if (operacija == "/") {
        if (b2 == 0) {
            rezultat = `Deljenje nulom nije dozvoljeno.` //deljenje nulom nije dozvoljeno
        }
        else {
             rezultat = b1 / b2;
        console.log(rezultat);
        }
        
    }
    else {
        rezultat = "Pogresan unos.";
    }
    console.log(rezultat);
}

racunaj(5, 4, "$");

// let se vidi samo u okviru sklopa {}, dok se var vidi svuda
//proba = "Proba";   // var
if (true) {
    proba = "";   // auto dodeljuje var
    //let proba = "proba";
}
console.log(proba);

if (true) {
    var promenljiva = "promenljiva";
    if (true) {
        var promenljiva = "hmmmm"    // var promenljiva se posmatara na globalnom nivou
        console.log(promenljiva);
    }
    console.log(promenljiva);
}



// 3. Zadatak
// 3. Napisati funkciju neparan koja za uneti ceo broj n vraća tačno ukoliko je neparan ili netačno ukoliko nije neparan.

function neparan(n) {
    
    if (n % 2 != 0) {
        return true; // neparan
        // return "true" je opet tacno
    }
    else {
        return false; // paran
    }
}

let nep = neparan(3);
console.log(nep);

// drugi nacin

function neparan1(n) {
    let rez = true; //pretpostavaka da je n neparan broj, true
    if (n % 2 == 0) {
        rez = false; // ako to nije tacno, onda je false
    }
    return rez;
}

let nep1 = neparan1(6);
console.log(nep1);

//////////////////

// treci nacin

function neparan2(n) {
    return n % 2 != 0;
}

let nep2 = neparan2(163);
console.log(nep2);


////////////////////////////////////

// Napisati funkciju maks2 koja vraća veći od dva prosleđena realna broja. Zatim napisati funkciju maks4 koja vraća najveći od četiri prosleđena realna broja.

function maks2(b1, b2) {
    let veci = b1
    if (veci < b2) {
        veci = b2;
    }
    return veci;
}

let max2 = maks2(-9, 7);
console.log(max2);

///  Drugi deo

function maks4(b1, b2, b3, b4) {
    let max = b1;
    if (max < b2) {
        max = b2;
    }
    if (max < b3) {
        max = b3;
    }
    if (max < b4) {
        max = b4;
    }
    return max;
}

let max4 = maks4(1,2,3,4);
console.log(max4);

// 5. Napisati funkciju koja prikazuje sliku za prosledjenu adresu slike.

function slika(url) {
    document.body.innerHTML +=`<img src="${url}";>`;
}
slika("1.jpg");

// 6. Napisati funkciju koja za unetu boju na engleskom jeziku boji tekst paragrafa u tu boju.

function boja(color) {
    document.body.innerHTML +=`<p style="color: ${color};">Hello there!!!</p>`;
}
boja("green");


// 7. Napisati program koji sadrži funkciju sedmiDan koja za uneti broj n ispisuje n-ti dan u nedelji (npr. za 0 ispisuje “Nedelja”, za 1 se ispisuje „Ponedeljak“, za 2 se ispisuje „Utorak“, ... ,  a za 7 opet “Nedelja”).

// Pitanje: Kako bismo realizovali ovaj zadatak da se tražio n-ti mesec u godini?

function dan(day) {
    let rez = "";
    if (day % 7 == 0) {
        rez = "Danas je nedelja."
    }
    else if (day % 7 == 1) {
        rez = "Danas je ponedeljak."
    }
    else if (day % 7 == 2) {
        rez = "Danas je utorak."
    }
    else if (day % 7 == 3) {
        rez = "Danas je sreda."
    }
    else if (day % 7 == 4) {
        rez = "Danas je cetvrtak."
    }
    else if (day % 7 == 5) {
        rez = "Danas je petak."
    }
    else if (day % 7 == 6) {
        rez = "Danas je subota."
    }
    console.log(rez);
}

dan(365);

// po modulu od 12 ili mesec == 1, 2, 3...

// 8 Napisati funkciju deljivSaTri koja se koristi u ispisivanju brojeva koji su deljivi sa tri u intervalu od n do m.
// Prebrojati koliko ima ovakvih brojeva od n do m.

function deljivSaTri(n, m) {
    let b = 0;
    let brojevi = "";
    for (let i = n; i <= m; i++) {
        if (i % 3 == 0) {
           b++;
           brojevi += i + " ";
        }
    }
    console.log(brojevi);
}
deljivSaTri(1, 10);

// 9. Napisati funkciju sumiraj koja određuje sumu brojeva od n do m. 
// Brojeve n i m proslediti kao parametre funkciji.

function sumiraj(n, m) {
    let suma = 0;
    for (let i = n; i <= m; i++) {
        suma += i;
    }
    console.log(suma);
}
sumiraj(1, 10);

// 10. Napisati funkciju množi koja određuje proizvod brojeva od n do m.
// Brojeve n i m proslediti kao parametre funkciji.

function proizvod(n, m) {
    let p = 1;
    let i = n;
    while (i <= m) {
        p *= i;
        i++;
    }
    console.log(p);
}
proizvod(1,4);

// 11. Napraviti funkciju koja vraća aritmetičku sredinu brojeva od n do m.
// Brojeve n i m proslediti kao parametre funkciji.

function sredina(n, m) {
    let suma = 0;
    let b = 0;
    for (let i = n; i<= m; i++) {
        suma += i;
        b++;
    }
    let sre = suma / b;
    return sre;
}
let armSre = sredina(0, 10);
console.log(armSre);

// Napisati funkciju koja vraća aritmetičku sredinu brojeva kojima je poslednja cifra 3 u intervalu od n do m. Brojeve n i m proslediti kao parametre funkciji.

function arm(n, m) {
    let suma = 0;
    let b = 0;
    for (let i = n; i <= m; i++) {
        if (i % 10 == 3) {
            suma += i;
            b++;
        }
    }
    let sre = suma / b;
    return sre;
}

let aS = arm(1, 13);
console.log(aS);

// 13 Napisati funkciju kojoj se prosleđuje ceo broj a ona ispisuje tekst koji ima prosleđenu veličinu fonta.

function broj(b) {
    document.body.innerHTML +=`<p style="font-size: ${b}px;">Ovo je moj paragraf!!!</p>`;
}

broj("42");


// 14 Napisati funkciju koja pet puta ispisuje istu rečenicu, a veličina fonta rečenice treba da bude jednaka vrednosti iteratora. 

function rec(font) {
    let i = font;
    let m = font +5;
    while (i < m) {
        document.body.innerHTML +=`<p style="font-size: ${i}px;">Ovo je moj paragraf!!!</p>`;
        i++;
    }
}
rec(30);

// 15. Dobili ste plaćenu programersku praksu u trajanju od n meseci. Prvog meseca, plata će biti a dinara, a ako budete vredno radili svakog narednog meseca ćete dobiti povišicu od d dinara. Brojeve n, a i d određujete sami.
//  Napišite funkciju kojoj se prosleđuju brojevi n i a. Funkcija treba da vrati vrednosti koliko ćete ukupno navca zaraditi, ukoliko svakog meseca budete dobijali povišicu.
//  Testirati zadatak (pozvati funkciju i ispisati vrednost koju ona vraća).

function praksa(n, a, d) {
    let suma = a;         // da izbegnemo   if (i==1)   jer prvog meseca nema povisice
    let b = 1;
    for (let i = 1; i <= n; i++) {
        if (i >= 2) {
            suma += a + (d * b); // povisica (d)  *  broj radnih meseci (b)
            b++;
        }
        
    }
    return suma;
}
// n = meseci rada
// a = plata
// d = povisica

let p = praksa(3, 50000, 5000);
console.log(p);



// // 12 giga 12 * 1024
// let megGig = 1024;
// let gig = 9.28;
// let megabajti = megGig * gig;
// let download = 5.3;
// let vremeS = megabajti / download;
// console.log(vremeS);
// let vremeM = vremeS / 60;
// console.log(vremeM);

function downloadTime(fileSize, downSpeed) {
    let megGig = 1024;                    // 1 gigabajt ima 1024 megabajta
    let megabajti = megGig * fileSize;    // pretvaramo gigabajte u megabajte
    let vremeS = megabajti / downSpeed;   // vreme downloada u sekundama

    let vreme = vremeS / 60;               // ukupno vreme u minutima
    let vremeMinuti = vreme % 60;          // vreme podeljeno na minute
    let vremeSati = Math.floor(vreme / 60);// vreme podeljeno na sate
    let message = `Ostalo je ${vremeSati} sati i ${vremeMinuti} minuta do kraja.`
    return message;
}

let gameDownload = downloadTime(75, 5.2);
console.log(gameDownload);