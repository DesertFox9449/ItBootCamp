// Ispisati brojeve u while i for petljama

// let a = 1;
// while (a <= 5) {
//     console.log(`Na redu je broj ${a}`);
//     a++;
// }
// // verzije
// // 1)
// for(let i = 1; i <= 5; i++) {
//     console.log(`For petlja iteracija ${i}.`);
// }

// 2)
// let i = 1;
// for(i; i <= 5; i++) {
//     console.log(`For petlja iteracija ${i}.`);
// }

// 3)
// let i = 1;
// for(; i <= 5; i++) {
//     console.log(`For petlja iteracija ${i}.`);
// }
/////////////////////////////////////////////////////


//////////////////////////////////////////////////////////

// 2) Ispisati brojeve od 20 do 1 
// i je iterator / iteracija
// for(i = 20; i >= 1; i--) {
//     console.log(i);
// }
//////////////////////////////////////////////////////////

// 3) Ispisati parne brojeve od 1 do 20 

// for(i = 1; i <= 20; i++){
//     if (i % 2 == 0) {
//         console.log(`Broj ${i} je paran.`);
//     }
// }

// b) nacin
// i = i + 2;
// ;i++, i++
// nikako i+2 samo, nije OK
// for(i = 2; i<=20; i+=2){
//     console.log(`Broj ${i} je paran.`);
// }
///////////////////////////////////////////////////////////

// 4) Ispisati dvostruku vrednost brojeva od 5 do 15 

// for(i = 5; i <= 15; i++) {
//     let b = i;
//     b = b * 2;
//     console.log(b);
// }

// 5) Odrediti sumu brojeva od 1 do n
// i = 1;
// let n = 10;
// let suma = 0;
// for(i = 1; i <= n; i++) {
//     suma = suma + i;

// }
// console.log(suma);

//// 5)       ////////Jelena
// let suma = 0;
// for(suma, i = 1, n = 100; i <= n; i++){
//     suma += i; // suma = suma + i;
// }
// console.log(suma);

// 6) Odrediti sumu brojeva od n do m 
// n = 2;
// let m = 12;
// suma = 0;
// for

// 7) Odrediti proizvod brojeva od n do m

// n = 3;
// m = 6;
// let p = 1;
// for(i=n; i <= m; i++) {
//     p *= i; // p = p * i;

// }
// console.log(`Proizvod brojeva od ${n} do ${m} je ${p}.`);

//////////////////////////////

// 9) Preuzeti proizoljne tri slike sa istom ekstenzijom i imenovati ih 1, 2 i 3. 
// For petljom u HTML-u ispisati svaku od sličica uz pomoć brojača (iteratora).
// <img src="slike/1.jpg">
// <img src="slike/2.jpg">
// <img src="slike/3.jpg">

// for(i = 1; i<=3; i++) {
//     document.body.innerHTML += `<img src="slike/${i}.jpg">`;
// }
///////////////////////////////

// 11) Prebrojati koliko ima brojeva deljivih sa 13 u intervalu od 5 do 150.

// n = 5;
// m = 150;
// let br = 0;
// for(i = 5; i <= 150; i++) {
//     if(i % 13 == 0) {
//         br++;
//     }
// } 
// console.log(`U intervalu od ${n} do ${m} ima ${br} brojeva deljivih sa 13.`);

// 12) Ispisati aritmetičku sredinu brojeva od n do m.

n = 5;
m = 10;
suma = 0;
br = 0;
let sredina;
for(i = n; i <= m; i++) {
    suma = suma + i;
    br = br + 1;

}
sredina = suma / br;
console.log(`Aritmetička sredina brojeva od ${n} do ${m} je ${sredina}.`);


// 15) Prebrojati i izračunati sumu brojeva od n do m kojima je poslednja cifra 4.
n = 1;
m = 20;
suma = 0;
i;
for(i = n; i <= m; i++){
    if (i % 10 == 4) {
        suma = suma + i;

    }
}
console.log(`Suma brojeva od ${n} do ${m} kojima je poslednja cifra 4 je ${suma}`);

// 16) Odrediti sumu brojeva od n do m koji nisu deljivi brojem a
n = 1;
m = 4;
let a = 2;
suma = 0;
for(i = n; i <= m; i++) {
    if(i % a != 0) {
        suma = suma + i;
    }

}
console.log(`Suma brojeva od ${n} do ${m} koji nisu deljivi sa ${a} je ${suma}.`);

// 17) Odrediti proizvod brojeva od n do m koji su deljivi brojem a *
n = 1;
m = 6;
a = 3;
pr = 1;
for(i = n; i <= m; i++) {
    if(i % a == 0){
        pr *= i;
    }
}
console.log(`Proizvod brojeva od ${n} do ${m} koji su deljivi brojem ${a} je ${pr}.`);

//////////////////////////// Jelena

// 12) Ispisati aritmetičku sredinu brojeva od n do m.
n = 5;
m = 10;
suma = 0;
br = 0;
for(i = n; i < m; i++) {
    suma += i; // suma = suma + i;
    br++; // br += 1; br = br + 1;
}
let arsr = suma / br; // 45 / 6
console.log(`Aritmeticka sredina brojeva od ${n} do ${m} je ${arsr}.`);

///////////////////////////////////

// 15) Prebrojati i izračunati sumu brojeva od n do m kojima je poslednja cifra 4.

// poslednji broj se dobija deljenjem sa ostatkom brojem 10
// 426 % 10 = 6
// 9465 % 10 = 5
// 41 % 10 = 1

n = 3;
m = 45;
suma = 0;
br = 0;
for(i = n; i <= m; i++){
    if(i % 10 == 4) {
        suma += i;
        console.log(i);
        br++;
    }
}
console.log(`Broj brojeva izmedju ${n} i ${m} kojima je poslednja cifra 4 je ${br}.`);
console.log(`Suma brojeva od ${n} do ${m} kojima je poslednja cifra 4 je ${suma}`);

//////////////////////////////////

// 16) Odrediti sumu brojeva od n do m koji nisu deljivi brojem a

n = 5;
m = 10;
a = 3;
suma = 0;
for(i = n; i <= m; i++) {
    if(i % a != 0) {
        suma += i; // suma = 0; suma = 5; suma = 12; suma = 20; suma = 30;
    }
}
console.log(`Suma brojeva od ${n} do ${m} koji nisu deljivi brojem ${a} je ${suma}.`);

// OD juce

// 18) Odrediti sa koliko brojeva je deljiv uneti broj k
// FOR petljom
let k = 6;
br = 0;
for(i = 1; i <= k; i++) {
    if(k % i == 0){
        br++
    }
}
console.log(`Broj ${k} je deljiv sa ${br} broja.`);

//WHILE petlja
k = 2;
br = 0;
i = 1;
while (i <= k) {

    if(k % i == 0) {
        br++;
    }
    i++;
}
console.log(`Broj ${k} je deljiv sa ${br} broja.`);

// 19) Odrediti da li je dati prirodan broj n prost. Broj je prost ako je deljiv samo sa jedan i sa samim sobom.

// nadovezivanje na predhodni zadatak
if(br == 1) {
    console.log(`Broj nije ni prost ni slozen.`);
}
else if(br == 2) {
    console.log(`Broj je prost.`);
}
else {
    console.log(`Broj je slozen.`);
}


// 20) Napraviti tabelu sa 6 redova.
// Svaki red tabele treba da ima po dve ćelije (dve kolone).
// Svakom parnom redu dodati klasu „obojen“.
// Korišćenjem CSS-a, klasi obojen postaviti proizvoljnu boju pozadine. 

// let o ='red';
// for (let x = 1; x <= 6; x++) {
//     document.body.innerHTML += `<tr><td>tekst</td><td>tekst</td></tr>`;
//     if(x % 2 == 0){
//         document.body.innerHTML += `<tr style="background-color: red;"><td>tekst</td><td>tekst</td></tr>`;
//     }
// }


/////////////////////////////jelena
let tabela =`<table border="1">`;
for(let red = 1; red <= 6; red++){
    if (red % 2 == 0) {
        tabela +=
        `
        <tr class="roze">
            <td>Text</td>
            <td>Text</td>
        </tr>
        `;
    }
    else{
        tabela +=`
                <tr>
                    <td>Text</td>
                    <td>Text</td>
                </tr>
                `;
    }
}
tabela += `</tabele>`;
document.body.innerHTML += `</table>`;