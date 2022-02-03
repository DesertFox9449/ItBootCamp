// console.log(`1`);
// console.log(`2`);

// setTimeout(function () {
//     console.log(`3`);    // Anonimna funkcija
// }, 1000 * 2);

// function ispis() {
//     console.log(`3`);
// }

// setTimeout(ispis, 1000 * 2); // nema ispis(), jer se ne poziva, to je callBack funkcija




//Prvi nacin
window.setTimeout( () => { // window moze i ne mora // return ako nema {} zagrade
    console.log(`3`);      // prvi parametar callback funkcija, arrow funkcija 
}, 1000 * 4);  // tajmer u milisekundama /// 1 sec = 1000 ms

// arrow funkcija se uvek vezuje za window objekat
// ako se /this/ korisiti u objektu, on se opet odnosi na window kod arrow funkcije
// zato se arrow funkcija ne korisiti u metodama

//////////////////////////////////////////////////////////////////////////////////
// prvi primer
// let btn1 = document.getElementById(`btn1`);    // arrow funckija poziva window
// btn1.addEventListener(`click`, () => {
//     console.log(this);
// });

// for(let i = 1; i < 50000; i++) {  // istovremeno programiranje jer blokira ceo kod
//     console.log(i);
// }
// blokirajuci kod

// asinhrono programiranje

// let btn1 = document.getElementById(`btn1`);        // anonimna funkcija poziva objekat button
// btn1.addEventListener(`click`, function() {        // callBack funckija moze da bude, imenovana, anonimna, ili arrow
//     setTimeout( () => {                            // bitno da pazimo na /this/ 
//         console.log(`Klik na dugme`);
//     }, 2000);                            
// });

let btn1 = document.getElementById(`btn1`);     
let div = document.getElementById(`result`);   
let timer = null;
btn1.addEventListener(`click`, function() {  
    
    let datum = new Date();
    let sati = datum.getHours();
    let minuti = datum.getMinutes();
    let sekunde = datum.getSeconds()      
    
    if (timer == null) {
        timer = setTimeout(() => {
            div.innerHTML = `${sati} h: ${minuti} min: ${sekunde} sec`;
            console.log(timer);
            timer = null;
        }, 2000);
    }
    else {
        alert(`Tajmer iznosi 4 sekunde`)
    }
    
    
});

let btn2 = document.getElementById(`btn2`);
btn2.addEventListener(`click`, function() {
    clearTimeout(timer); 
    timer = null;
});
