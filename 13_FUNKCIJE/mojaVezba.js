// 1. Napisati funkciju pozdrav kojoj se prosleđuje ime i prezime, a funkcija ispisuje pozdrav. Na primer za uneto ime Jelena i prezime Matejić, funkcija ispisuje Zdravo Jelena Matejić.

function pozdrav(ime, prezime) {
    console.log(`Zdravo ${ime} ${prezime}.`);
}
pozdrav(`Aleksandar`, `Zikic`);


// 2. Napisati funkciju zbir koja računa zbir dva realna broja.
// Šta bi trebalo izmeniti da bi se dobila razlika, proizvod ili količnik dva broja.

function zbir(b1, b2) {
    let s = b1 + b2;
    let o = b1 - b2;
    let m = b1 * b2;
    let d = b1 / b2;
    let vrednost = s;  // menjamo svrhu funkcije menjanjem slova
    return vrednost;
}

let v = zbir(10, 2);
console.log(v);

// 3. Napisati funkciju neparan koja za uneti ceo broj n vraća tačno ukoliko je neparan ili netačno ukoliko nije neparan.

function neparan(n) {
    let tacnost                       // promenjiva se definise pre if-a
    if (n % 2 == 1) {
        // let tacnost = "tacno";     // problem kada je else tacno
        tacnost = "tacno";    
    }
    else {
        tacnost = "netacno";
    }
    return tacnost;
}

let parnost = neparan(6);
console.log(parnost);

// 4. Napisati funkciju maks2 koja vraća veći od dva prosleđena realna broja. Zatim napisati funkciju maks4 koja vraća najveći od četiri prosleđena realna broja.

///////// prvi deo
function maks2(b1, b2) {
    if (b1 > b2) {
        max = b1;
    }
    else {
        max = b2;
    }
    return max;
}

let veciOd2 = maks2(-7, 6);
console.log(veciOd2);

////////// drugi deo

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

let veciOd4 = maks4(5, 7, -8, 4);
console.log(veciOd4);

// 5. Napisati funkciju koja prikazuje sliku za prosledjenu adresu slike.

function slika(url) {
    let picture = `<img src=${url}>`;           // 1. nacin

    return picture;                             // 1. nacin
    // return url;                              // 2. nacin
}

let s = slika(`picture.jpg`);
document.body.innerHTML += s;                       //  1. nacin 
// document.body.innerHTML +=`<img src=${s}>`;      //  2. nacin

// 6. Napisati funkciju koja za unetu boju na engleskom jeziku boji tekst paragrafa u tu boju.

function color(boja) {
    
    return boja;
}

let bParagrafa = color(`red`)

document.body.innerHTML +=`<p style="color: ${bParagrafa};">Lorem ipsum dolor sit amet.</p>`;

// 7. Napisati program koji sadrži funkciju sedmiDan koja za uneti broj n ispisuje n-ti dan u nedelji (npr. za 0 ispisuje “Nedelja”, za 1 se ispisuje „Ponedeljak“, za 2 se ispisuje „Utorak“, ... ,  a za 7 opet “Nedelja”).



function sedmiDan(n) {
    let dan;
    if (n == 0) {
        dan = `nedelja`;
        console.log(`Danas je ${dan}.`);
    }
    else if (n == 1) {
        dan = `ponedeljak`;
        console.log(`Danas je ${dan}.`);
    }
    else if (n == 2) {
        dan = `utorak`;
        console.log(`Danas je ${dan}.`);
    }
    else if (n == 3) {
        dan = `sreda`;
        console.log(`Danas je ${dan}.`);
    }
    else if (n == 4) {
        dan = `cetvrtak`;
        console.log(`Danas je ${dan}.`);
    }
    else if (n == 5) {
        dan = `petak`;
        console.log(`Danas je ${dan}.`);
    }
    else if (n == 6) {
        dan = `subota`;
        console.log(`Danas je ${dan}.`);
    }
    else if (n == 7) {
        dan = `nedelja`;
        console.log(`Danas je ${dan}.`);
    }
    else {
        console.log(`Pogresan unos.`);
    }
    
}

sedmiDan(7);

//////////// drugi deo

// Pitanje: Kako bismo realizovali ovaj zadatak da se tražio n-ti mesec u godini?

function mesec(m) {
    let month;
    if (m == 0) {
        month = "januar";
        console.log(`Danas je ${month}.`);
    }
    else if (m == 1) {
        month = "februar";
        console.log(`Danas je ${month}.`);
    }
    else if (m == 2) {
        month = "mart";
        console.log(`Danas je ${month}.`);
    }
    else if (m == 3) {
        month = "april";
        console.log(`Danas je ${month}.`);
    }
    else if (m == 4) {
        month = "maj";
        console.log(`Danas je ${month}.`);
    }
    else if (m == 5) {
        month = "jun";
        console.log(`Danas je ${month}.`);
    }
    else if (m == 6) {
        month = "jul";
        console.log(`Danas je ${month}.`);
    }
    else if (m == 7) {
        month = "avgust";
        console.log(`Danas je ${month}.`);
    }
    else if (m == 8) {
        month = "septembar";
        console.log(`Danas je ${month}.`);
    }
    else if (m == 9) {
        month = "oktobar";
        console.log(`Danas je ${month}.`);
    }
    else if (m == 10) {
        month = "novembar";
        console.log(`Danas je ${month}.`);
    }
    else if (m == 11) {
        month = "decembar";
        console.log(`Danas je ${month}.`);
    }
    else {
        console.log(`Pogresan unos.`);
    }
    
}

mesec(11);

// 8. Napisati funkciju deljivSaTri koja se koristi u ispisivanju brojeva koji su deljivi sa tri u intervalu od n do m.
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
    console.log(`Brojevi deljivi sa tri u rasponu od ${n} do ${m} su ${brojevi}, i ima ih ${b}.`);
    // return b;
    return brojevi, b;         // kako da se ovo resi
}

let d = deljivSaTri(1, 60);
console.log(d);

// 9. Napisati funkciju sumiraj koja određuje sumu brojeva od n do m. 
// Brojeve n i m proslediti kao parametre funkciji.

function sumiraj(n, m) {
    let suma = n + m;
    return suma;
}

let sum = sumiraj(10, 12);
console.log(sum);

// 10. Napisati funkciju množi koja određuje proizvod brojeva od n do m.
// Brojeve n i m proslediti kao parametre funkciji.

function mnozi(n, m) {
    proizvod = n * m;
    return proizvod;
}

let m = mnozi(2, 7);
console.log(m);

// 11. Napraviti funkciju koja vraća aritmetičku sredinu brojeva od n do m.
// Brojeve n i m proslediti kao parametre funkciji.

function sredina(n, m) {
    let arm = (n + m) / 2;
    return arm;
}

let sred = sredina(2, 4);
console.log(sred);

// 12. Napisati funkciju koja vraća aritmetičku sredinu brojeva kojima je poslednja cifra 3 u intervalu od n do m. Brojeve n i m proslediti kao parametre funkciji.

function armSredina(n, m) {
    let arm = 0;
    let suma = 0;
    let b = 0;
    for (let i = n; i <= m; i++) {
        if (i % 10 == 3) {
            suma += i; 
            b++
        }

    }
    arm = suma / b;
    return arm;
}

let armSred = armSredina(1, 13);
console.log(armSred);

// 13. Napisati funkciju kojoj se prosleđuje ceo broj a ona ispisuje tekst koji ima prosleđenu veličinu fonta.

function font(velicina) {
    
    document.body.innerHTML +=`<p style="font-size: ${velicina};">Hello there!!!</p>`;
}
font("2em");

// 14. Napisati funkciju koja pet puta ispisuje istu rečenicu, a veličina fonta rečenice treba da bude jednaka vrednosti iteratora. 

function recenice(v) {
    for (let i = v, m = v + 5; i < m; i++) {
        document.body.innerHTML +=`<p style="font-size: ${i}em;">Happy New Year!!!</p>`;
        
    }
}
recenice(1);

// 15. Dobili ste plaćenu programersku praksu u trajanju od n meseci. Prvog meseca, plata će biti a dinara, a ako budete vredno radili svakog narednog meseca ćete dobiti povišicu od d dinara. Brojeve n, a i d određujete sami.
//  Napišite funkciju kojoj se prosleđuju brojevi n i a. Funkcija treba da vrati vrednosti koliko ćete ukupno novca zaraditi, ukoliko svakog meseca budete dobijali povišicu.
//  Testirati zadatak (pozvati funkciju i ispisati vrednost koju ona vraća).

// let n = 4;          // meseci prakse
// let a = 50000;      // plata prvog meseca
// let d = 5000;       // povisca svakog meseca

function praksa(n, a, d) {
    let i = 1;
    let suma = 0;
    let b = 0;
    while (i <= n) {
        
        if (i == 1) {
            suma += a;
        }
        else {
            b++;
            suma += a + (d * b);
        }
        
        i++;
    }
    console.log(`Ako radite ${n} meseci vasa ukupna zarada bi iznosila ${suma} dinara.`);
    return suma;
}
let pra = praksa(3, 50000, 5000);

// 16. Zadatak
  
// Na igrama bez granica, ekipi je postavljen zadatak da za što kraće vreme pređe stazu na kojoj se nalazi pokretni most. Takmičaru ove ekipe od polazne tačke do mosta treba t sekundi. Tačno p sekundi od kada takmičar može da krene sa polazne tačke (tj. od početka merenja) most počinje da se podiže. Od trenutka podizanja pa do spuštanja mosta protiče n sekundi i prelaz preko mosta za to vreme nije moguć. Nakon toga most ostaje spušten. Takmičari za čekanje kod mosta dobijaju negativne poene, pa je tim rešio da napravi program koji će im tačno odrediti u kojoj sekundi treba da pođu sa startne pozicije kako ne bi dobijali negativne poene. Pomozite timu da napravi funkciju na osnovu prosleđenih vrednosti t, p i n. Funkcija vraća koliko sekundi nakon početka merenja vremena treba da pođe, kako bi prošli poligon bez zaustavljanja.
// npr: t=15, p=20, n=25, čekanje je 0s
// npr: t=15, p=10, n=12, čekanje je 7s

// staza------------============------------
//                  pokretni most
// I........t........
// pol tacka
//                   ||||||||||||
//                   most se dize