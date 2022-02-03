// let divOrder = document.querySelector(`#order`);
// let formOrder = document.querySelector(`#order form`);
// let inputOrder = document.querySelector(`#capacity`);

// function getItem(resourse, resolve, reject) {
//     let request = new XMLHttpRequest();
//     request.addEventListener(`readystatechange`, function(){
//         if(this.readyState == 4 && this.status == 200) {
//             // sve je ok
//             let data = JSON.parse(this.responseText);
//             resolve(data);
//         }
//         else if(this.readyState == 4) {
//             // desila se neka greska
//             reject(`Couldn't fetch data.`);
//         }
//     });
//     request.open(`GET`, resourse);
//     request.send();
// }

// function submitForm1(event) {
//     event.preventDefault();

//     // da vidimo da li nesto nije na stanju
//     let capacity = inputOrder.value;
//     let ids = [];

//     getItem(`json/stock.json`, (data) => {
//         data.forEach(item => {
//             if(item.stock <= 0) {
//                 ids.push(item.id);
//             }
//         });
//         getItem(`json/weights.json`, (data) => {
//             let totalWeight = 0;
//             data.forEach(item => {
//                 if(ids.includes(item.id)){
//                     totalWeight += item.weight;
//                 }
//             });
//             console.log(`Ukupna tezina proizvoda koji treba da se naruce je ${totalWeight}`);
//             if(totalWeight > capacity) {
//                 let par = document.createElement(`p`);
//                 par.innerHTML = `Ukupna tezina proizvoda je veca od kapaciteta kamiona!`;
//                 par.style.color = `red`;
//                 par.style.fontWeight = `24px`;
//                 par.style.fontWeight = `bold`;
//                 divOrder.appendChild(par);
//             }
//             else {
//                 // treba nam cena artikala
//                 getItem(`json/prices.json`, (data) => {
//                     let totalPrice = 0;
//                     data.forEach(item => {
//                         if(ids.includes(item.id)){
//                             totalPrice += item.price;
//                         }
//                     });
//                     let par = document.createElement(`p`);
//                     par.innerHTML = `Ukupna cena pordzbine je: ${totalPrice} RSD`;
//                     par.style.color = `green`;
//                     par.style.fontWeight = `24px`;
//                     par.style.fontWeight = `bold`;
//                     divOrder.appendChild(par);
//                 }, (msg) => {
//                     console.log(msg);
//                 });
//             }
//         }, (msg) => {
//             console.log(msg);
//         });
//     }, (msg) => {
//         console.log(msg);
//     });
// }

// formOrder.addEventListener(`submit`, submitForm1);

/*
ideja: getItems() da se pozove jedan za drugim
getItems(`json/stock.json`)
getItems(`json/weights.json`)
getItems(`json/prices.json`)

Netacna Ideja, jer je svaki getItem asinhron poziv,
sto znaci da ne mora weight.json da se dohvati pre stok.json
(isto i za prices.json)

2. ideja: Redosled asinhronih poziva odvija preko callback funkcija
TACNA IDEJA, ali neprakticna (callback hell)

3. ideja: Redosled asinhronih poziva odvija preko Promis-a
*/





/////////////////////////////////////////////////////////

let divOrder = document.querySelector(`#order`);
let formOrder = document.querySelector(`#order form`);
let inputOrder = document.querySelector(`#capacity`);

function getItemReturnPromise(resourse) {
    return new Promise((resolve, reject) => {
        let request = new XMLHttpRequest();
        request.addEventListener(`readystatechange`, function(){
        if(request.readyState == 4 && request.status == 200) {
            // sve je ok
            let data = JSON.parse(request.responseText);
            resolve(data);
        }
        else if(request.readyState == 4) {
            // desila se neka greska
            reject(`Couldn't fetch data.`);
        }
        });
        request.open(`GET`, resourse);
        request.send();
    });
    
}

function submitForm2(event) {
    event.preventDefault();

    // da vidimo da li nesto nije na stanju
    let capacity = inputOrder.value;
    let ids = [];

    getItemReturnPromise(`json/stock.json`)
    .then((data) => {
        data.forEach(item => {
            if(item.stock <= 0) {
                ids.push(item.id);
            }
        });
        return getItemReturnPromise(`json/weights.json`)
    })
    .then((data) => {
        let totalWeight = 0;
        data.forEach(item => {
            if(ids.includes(item.id)) {
                totalWeight += item.weight;
            }
        });
        if(totalWeight > capacity) {
            let par = document.createElement(`p`);
            par.innerHTML = `Ukupna tezina proizvoda je veca od kapaciteta kamiona!`;
            par.style.color = `red`;
            par.style.fontWeight = `24px`;
            par.style.fontWeight = `bold`;
            divOrder.appendChild(par);
        }
        else {
            return getItemReturnPromise(`json/prices.json`);
        }
    })
    // then-opvi se uvek izvrsavaju
    .then((data) => {
        if(data != undefined) {
            let totalPrice = 0;
            data.forEach(item => {
                if(ids.includes(item.id)){
                    totalPrice += item.price;
                }
            });
            let par = document.createElement(`p`);
            par.innerHTML = `Ukupna cena pordzbine je: ${totalPrice} RSD`;
            par.style.color = `green`;
            par.style.fontWeight = `24px`;
            par.style.fontWeight = `bold`;
            divOrder.appendChild(par);
        }
    })
    .catch((msg => {
        console.log(msg);
    }));
}

formOrder.addEventListener(`submit`, submitForm2);
