let getSomething = () => {
    //
    let obj = new Promise((resolve, reject) => { // promis ocekuje funkciju kao parametar     Promise (<anonymous>)
        // resolve i reject vracaju string necega u zavisnosti od rezultata
        // resolve(`Nesto reslove`);  // Sve OK proslo
        
        // ako nesto nije proslo kako treba
        // reject(`Nesto reject`); // Greska
    }); 
    // console.log(obj);
    // vraca Promise objekat
    return obj;
    
};
// Ako je Promise() varatio resolve, realizuje se .then() grana
// Ako je Promise() varatio reject, realizuje se .catch() grana
getSomething().then(a => {
    console.log(`Aktivirana je .then grana ${a}`); // a dobija vrednost one poruke koja se prosledjuje u resolve
}).catch(b => {
    console.log(`Aktivirana je .catch grana${b}`); // b dobija vrednost one poruke koja se prosledjuje u reject
});