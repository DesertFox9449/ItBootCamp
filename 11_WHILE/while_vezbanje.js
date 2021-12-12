// 1) spisati brojeve od 1 do 20:
// let broj = 1;

// while (broj <= 20) {
//     console.log(broj);
//     broj++;
// }


// 2) Ispisati brojeve od 20 do 1.

// broj = 20; 
// while (broj >= 1) {
//     console.log(broj);
//     broj--;
// }

// 3) Ispisati parne brojeve od 1 do 20.

// let x = 1;
// while (x <= 20) {
//     if (x % 2 == 0) {
//         console.log(x);
//         x++;
        
//     }
//     else{
//         x++;
//     }
    
// }

// 4)Kreirati n paragrafa sa proizvoljnim tekstom i naizmenično ih obojiti u tri različite boje

///////////////////////////////////// Stefan 

// Zadatak 1

let i = 1;
while(i <= 20){
    console.log(i);
    i++;
}
// i = 21 kad se zavrsi petlja

// b) Svi brojevi u istom redu


let rez = "";
i = 1;
while (i <= 20) {
    // rez = rez + 1 + " ";
    rez += i + " ";
    i++;
}
console.log(rez);

// Zadatak 2
i = 20;
while(i >= 1) {
    console.log(i);
    i--;
}

// Zadatak 3) Ispisati parne brojeve od 1 do 20.
// Dva nacina
i = 1;

while (i <= 20) {
        if ( i % 2 == 0) {
        console.log(i);
        // ako stavimo  i++  ovde pravim infinite loop
    }
    i++;
}

// Drugi nacin
// Sa parnim brojevima

i = 2;
while (i <= 20) {
    console.log(i);
    i += 2;
    // i = i + 2;
    
}

// 4) Kreirati n paragrafa sa proizvoljnim tekstom i naizmenično ih obojiti u tri različite boje

// da bi pristupili body tagu, mora da se body prvo ucita, zato skripta ide na kraj body-a
// document.body.innerHTML += "<p style='color: red;'>1 paragraf</p>";

// document.body.innerHTML += "<p style='color: purple;'>2 paragraf</p>";

// document.body.innerHTML += "<p style='color: green;'>3 paragraf</p>";

// document.body.innerHTML += "<p style='color: red;'>4 paragraf</p>";

// document.body.innerHTML += "<p style='color: purple;'>5 paragraf</p>";

// document.body.innerHTML += "<p style='color: green;'>6 paragraf</p>";

// pazi na NAVODNIKE "" i ''
// backtikovi se ne koriste iznutra "  ``  " jer je to HTML

i = 1;
let n = 16;

while (i <= n) {
    // Doda se paragraf
    // i++;
    if (i % 3 == 1){
        document.body.innerHTML += `<p style='color: red;'>${i} paragraf</p>`;
        // kada i daje ostatak 1
    }
    else if (i % 3 == 2){
        document.body.innerHTML += `<p style='color: purple;'>${i} paragraf</p>`;
        // kada i daje ostatak 2
    }
    else {
        document.body.innerHTML += `<p style='color: green;'>${i} paragraf</p>`;
        // kada i daje ostatak 3
    }
    i++;
   
}

// Zadatak 5 kasnije

// Odrediti sumu brojeva od 1 do 100;

i = 1;
let suma = 0;
while (i <= 100) {
    // iskoristi i tako da se odredi suma
    
    suma = suma + i;
    i++;
}
console.log(`Suma brojeva od 1 do 100 jednaka je ${suma}.`);


/*

-------------------------
#iteracije | i | suma
-------------------------
    0      | 1 |  0
    1      | 2 |  1
    2      | 3 |  3
    3      | 4 |  6
    4      | 5 |  10
    ...................
    ...................
    100    | 101 | 5050
*/

// Odrediti sumu brojeva od 1 do n

n = 18;
i = 1;
suma = 0;
while (i <= n) {
    suma = suma + i; 
    i++;
}
console.log(suma);

// Odrediti sumu brojeva od m do n

// 9) Odrediti proizvod brojeva od n do m

n = 3;
let m = 6;
let proizvod = 1; //ne moze nula, jer treba da se mnozi sa nulom
i = n;
while (i <= m) {
    // Iskoristi i da se izracuna proizvod
    proizvod = proizvod * i;
    i++;
}
console.log(`Proizvod brojeva od ${n} do ${m} jednak je ${proizvod}`);


// 10) Odrediti sumu kvadrata parnih i sumu kubova neparnih brojeva od n do m

broj1 = 1;
broj2 = 3;
i = broj1;
suma = 0;
while (i <= broj2 ) {
    if (i % 2 == 0){
        suma = suma + i**2;
        i++;
    }
    else {
        suma = suma + i**3;
        i++;
    }

}
console.log(suma);


// 11) Odrediti sa koliko brojeva je deljiv uneti broj k

k = 100;
x = 1;
suma = 0;
while (x <= k) {
    if (k % x == 0){
        suma++;
    }
    x++;
}
console.log(`Broj ${k} je deljiv sa ${suma} broja`);

if (lar == dom % rekom) {
    while (k >= m) {
        console.log(`The number you have used is incorrect.`);
    }
}