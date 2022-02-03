    // dodajemo parametre
    // resusrs - putanja
let getTodos = resource => {


        // 1. kreiranje XML objekta
    let request = new XMLHttpRequest();

     // 2. Otvaranje kreiranog zahteva
     request.open(`GET`, resource);
     // 3. Saljemo zahtev
     request.send();

    let p = new Promise((resolve, reject) => {
        request.addEventListener(`readystatechange`, () => {
            if(request.readyState === 4 && request.status === 200) {
                // Sve je OK!
                // console.log(request.responseText);   vise nam nije potreban
                // callback(request.responseText, undefined);
                resolve(request.responseText);
    
            }
            else if(request.readyState === 4) {
                // Nesto nije OK
                // console.log(`Ne mogu da dohvatim podatke.`);
                // callback(undefined, `Ne mogu da dohvatim podatke.`);
                reject(`Ne mogu da dohvatim podatke.`);
            }
        });
        
    });
    return p; // vracam objekat Promise
}    

 // 1. Zelim da se ucita todos.json, 
 // 2. da se ucita fruit.json   
 // 3. da se ucita vegetables.json   

 getTodos(`../JSON/todos.json`).then(data => {
    console.log(`Promise todos resolved`, data); 
    return getTodos(`../JSON/fruits.json`);  // vracam Promise na koji se odnosi sledeci then
 }).then(data => {
     console.log(`Promise fruits resolved`, data);
     return getTodos(`../JSON/vegetable.json`, data); // vracam Promise na koji se odnosi sledeci then
 }).then(data => {
    console.log(`Promise vegetables resolved`, data);
 }).catch(err => {
    console.log(`Promise rejected`, err); 
 });

console.log(`Kraj`);
