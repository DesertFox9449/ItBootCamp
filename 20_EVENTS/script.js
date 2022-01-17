
// dohvati HTML element
let pKlikni = document.getElementById("klikni");

// 2. Na element postavljamo osluskivac
pKlikni.addEventListener("click", () => {
    console.log(`Jednom kliknuto na paragraf`);
});




/////////////////////////

// 1. 
let pKlikniDva = document.getElementById("dvaKlika");
console.log(pKlikniDva);
// 2
pKlikniDva.addEventListener("dblclick", () => {
    console.log(`Dva puta kliknuto an paragraf.`);
});


//////////////////////////////
// Plus brojac

//1.
let btnPlus = document.getElementById(`plus`);
console.log(btnPlus);
// 2.
let res = 0;
let spanRes = document.getElementById("res"); // id span-a
btnPlus.addEventListener(`click`, () => {
    res++;
    // console.log(res);
    spanRes.innerHTML = res;
    if (res > 0) {
        spanRes.style.color = "blue";
    }
    else {
        spanRes.style.color = "red";
    }
});

let btnMinus = document.getElementById(`minus`);
res = 0;

btnMinus.addEventListener(`click`, () => {
    res--;
    spanRes.innerHTML = res;
    if (res < 0) {
        spanRes.style.color = "blue";
    }
    else {
        spanRes.style.color = "red";
    }
});

let btnHello = document.getElementById(`hello`);
let inputIme = document.getElementById(`ime`);
let pHelloIspis = document.getElementById(`helloIspis`);

btnHello.addEventListener(`click`, () => {
    let inputImeValue = inputIme.value;
    pHelloIspis.innerHTML = `Hello ${inputImeValue}`; 
});