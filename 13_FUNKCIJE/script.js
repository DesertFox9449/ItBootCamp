console.log(`Funkcije`);


// Upisujemo funkciju
// Ona se ne izvrsava dok se ne pozove
function zdravo (params) {
    console.log(`Zdravo svete!!!`);
}

// pozivamo funkciju
zdravo();
console.log(`Hello`);
zdravo();



// let $tekst = `Jelena`;

// // Ne moze da se menja ime
// function stampaj(params) {
//     console.log($tekst);
// }

// stampaj();




// Da bi se koristila varijabla mora da se nadje u ()
function stampaj(tekst) {
    console.log(tekst);
}

stampaj(); // undefined
stampaj(`Jelena`); // unosimo sta zelimo da stampamo
stampaj(`Stefan`); // promenljiva $tekst dobija vrednost "Stefan"

let ime = `Sofija`;
stampaj(ime); // mozemo da unosimo vrednost promenljive $ime kao vrednost $tekst

// parametar = function (parametar) {} 

// argument = stampaj(`Jelena`); -> stampaj(argument); Jelena je argument

///////////////////////////////////

function korisnik (ime, prezime) {
    console.log(`Ulogovani korisnik je ${ime} ${prezime}.`);
}
korisnik("Stefan", "Stanimirovic");
korisnik("Jelena", "Matejic");

/////////////////////

function korisnikGodine(ime, prezime, godine) {
    console.log(`Ulogovani korisnik je ${ime} ${prezime} i ima ${godine} godina.`);
}

korisnikGodine("Aleksandar", "Zikic", "27");
korisnikGodine(`Pera`, `Peric`, 17);

//////////////////////

// zbir neka dva broja

function zbirDvaBroja(x, y) {
    let zbir = x + y;  // let je lokalna varijabla, vazi samo za tu funkciju
    console.log(zbir); // Ispisuje vrednost
                       // Funkcija ispisuje 
}

zbirDvaBroja(3, 6);
zbirDvaBroja(7, 9);
zbirDvaBroja(15, 12);

//////////////////////

// Kad hocemo da vrati zbir dva broja

function vratiZbirDvaBroja(a, b) {
    let zbir = a + b; // Ovo je okej zato sto zbir vazi samo za ovu funkciju

    // console.log(`Vrati zbir.`);
    return zbir;      // Da vratimo rezultat iz funkcije nazad  
                      // Navodi se samo jedna vrednost, nikad vise od jedne
    // console.log(`Vrati zbir iza return-a.`);                  
                      // Posle return-a se prekida funkcija
                      // Nista se ne izvrsava nakon return
                      // Funkcija vraca
}


let rez = vratiZbirDvaBroja(50, 70);  // vracamo vrednost iz funkcije u novu promenljivu
console.log(rez);

rez = vratiZbirDvaBroja(16, 15); // Ponovo pozivamo promenljivu sa funkcijom
console.log(rez);

let rez1 = vratiZbirDvaBroja(4, 6); // rez1 = 10;
let rez2 = vratiZbirDvaBroja(5, 7); // rez2 = 12;
let rez3 = vratiZbirDvaBroja(rez1, rez2); // rez = 22
console.log(rez3);

let rez4 = vratiZbirDvaBroja(4 + 5, 1 + 3);
console.log(rez4);

let rez5 = vratiZbirDvaBroja(vratiZbirDvaBroja(7,9), 3);
console.log(rez5);

let rez6 = vratiZbirDvaBroja(vratiZbirDvaBroja(1,2), vratiZbirDvaBroja(5, 3) );
console.log(rez6);

//////////////////////////////////

// 0 < voda se ledi
// 0 >= tecno ag stanje
// 100 >= gas

function voda(temperatura) {
    console.log(`Uneli ste temperaturu od ${temperatura} stepeni C.`);
    if (temperatura <= 0) {
        console.log(`Voda je u cvrstom agregatnom stanju.`);
    }
    else if (temperatura >= 100) {
        console.log(`Voda je u gasovitom agregatnom stanju.`);
    }
    else {
        console.log(`Voda je u tecnom agregatnom stanju.`);
    }
    return temperatura;
    // ovde moze samo else if, nikako samo if
}
// kada se nesto ne moze naci u dva skupa - koristimo if else
// kada se stvari preklapaju u skupovima - koristimo if
let v = voda(3);
console.log(v);
voda(100);