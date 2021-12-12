
// Logicki operatori - Redosled
// 1. negacija
// 2. and
// 3. or

// if(!true && true) -> false
// if(!true && true || false) -> ( false && true || false) -> (false || false) -> false
// if((!ture && true) || false)

let pol = "z";
let god = -27;

if (pol == "m" && god >="18") {
    console.log(`Osoba je muskog pola i punoletna je.`);
}
else if (pol == "m" && god < 18 && god >=0) {
    console.log(`Osoba je muskog pola i maloletna je.`);
}
else if (pol == "z" && god >= 18) {
    console.log(`Osoba je zenskog pola i punoletna je.`);
}
else if (pol == "z" && god < 18 && god >=0) {
    console.log(`Osoba je zenskog pola i maloletna je.`);
} 
else {
    console.log(`Pogresan unos podataka.`);
}


////////////////////

pol = "M";
if (pol == "z" || pol == "Z" || pol == "ž" || pol == "Ž") {
    document.body.innerHTML = `<img src="female.png">`;
}
else if (pol == "m" || pol == "M") {
    document.body.innerHTML = `<img src="male.png">`;
}
else {
    document.body.innerHTML = `Pogresan unos podataka.`;
}
////////////////////

pol = "z";
god = 15;

if ((pol == "z" || pol == "Z" || pol == "ž" || pol == "Ž") && god >= 18) {
    console.log(`Osoba je zenskog pola i punoletna je.`);
}
//... && 0<=god<18 -> 0<=god && god < 18 odnosno god => 0 && god<18
else if ((pol == "z" || pol == "Z" || pol == "ž" || pol == "Ž") && god >=0 && god <18 ) {
    console.log(`Osoba je zenskog pola i maloletna je.`);
}
else if((pol == "m" || pol == "M") && god>= 18) {
    console.log(`Osoba je muskog pola i punoletna je.`);
}
else if ((pol == "m" || pol == "M") && god >= 0 && god < 18) {
    console.log(`Osoba je muskog pola i maloletna je.`);
}
else {
    console.log(`Pogresan unos.`);
}