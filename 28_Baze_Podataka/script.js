// db - objekat baze, vucemo ga iz HTML fajla
console.log(db);

// pristupanja kolekciji
let customers = db.collection(`customers`);
console.log(customers);

// db i customers su JS objekti

// pristupanje dokumentu
// 1. kolekcija
let doc1 = customers.doc(`customer1`);
console.log(doc1);

let doc2 = db.collection(`tasks`).doc(`task1`);
console.log(doc2);

console.log(doc2);

/*
za pristup dokumentu
db.collection(`...`).doc(`...`)

Kod dokumenata ima 4 operacije:
    CRUD (Create, Read, Update, Delete)
    Create : doc.set(...)
    Read   : doc.get(...)
    Update : doc.update(...)
    Delete : doc.delete(...)
Sve cetiri operacije kao rezultat vracaju Promise()
Sto znaci: Nakon njih lancamo .then() i .catch()

*/

// Dodajemo novi dokument preko set() metode
// db.collection("customers").doc(customer6).set()

let obj = {
    name: "Vesna",
    age: 22,
    addresses: [`Nis, Leskovac`],
    salary: 470.00
};

//db.collection(`customers`).doc(`customer6`).set(obj)
db.collection(`customers`).doc(`customer6`).set(obj)
.then(() => {
    console.log(`Dodat novi dokument u kolekciju customers.`);
})
.catch((err) => {
    console.log(`Doslo je do greske prilikom dodavanja novog dokumenta ${err}`);
});





db.collection(`customers`).doc(`customer6`).set(
    {height: 180},
    {merge: true})
.then(() => {
    console.log(`Spojen dokument customer6 u kolekciju customers.`);
})
.catch((err) => {
    console.log(`Doslo je do greske prilikom dodavanja novog dokumenta ${err}`);
});


////////////////////////////////////////////////////
// Da proverimo da li je prvo objekat unesen

db.collection(`customers`).doc(`customer7`).set(obj)
.then(() => {
    console.log(`Dodat novi dokument u kolekciju customers.`);
    return db.collection(`customers`).doc(`customer6`).set(
        {height: 180},
        {merge: true})
    
})
.then(() => {
    console.log(`Spojen dokument customer6 u kolekciju customers.`);
})
.catch((err) => {
    console.log(`Doslo je do greske prilikom dodavanja novog dokumenta ${err}`);
});

let datum1 = new Date(`2022-01-26 12:00:00`);
let datum2 = new Date(`2022-01-26 13:00:00`);

let obj2 =  {
    title: `Fudbal`,
    start_date:  firebase.firestore.Timestamp.fromDate(datum1),
    due_date:  firebase.firestore.Timestamp.fromDate(datum2),
    priority: false,
    description: `Fudbal sa drugarima iz ITBootcamp-a`
};

db.collection(`tasks`)
.doc(`task4`)
.set(obj2)
.then(() => {
    console.log(`Uspesno dodat task.`);
})
.catch(msg => {
    console.log(`Neuspesno dodat task: ${msg}`);
});


// Update
db.collection(`tasks`)
.doc(`task2`)
.update({
    priority: true
})
.then(() => {
    console.log(`Uspesno promenjeno polje u dokumentu`);
})
.catch(err => {
    console.log(`Greska prilikom menjanja dokumenta: ${err}`);
});


// Delete
db.collection(`customers`)
.doc(`customer8`)
.delete() // nema parametara
.then(() => {
    console.log(`Uspesno izbrisan dokument.`);
})
.catch(err => {
    console.log(`Greska prilikom brisanja: ${err}`);
});

console.log(`Test poruka`);

// Drugi nacin za dodavanje dokumenta
// add nema posebnih ID jeva, sama generise ID dokumenta
db.collection(`tasks`)
.add({
    title: `Vezba za projekat`,
    description: `Vezbanje JS-a`,
    start_date: firebase.firestore.Timestamp.fromDate(new Date(2022-01-29)),
    due_date: null,
    priority: true
})
.then(() => {
    console.log(`Sve je proslo superiska`);
})
.catch(() => {
    console.log(`Nije sve proslo superiska.`);
})

/*
db.collection().add() <=> db.collection().doc().set()
- dodaje novi dokument sa random generisanim ID-em

db,collection().doc(id).set()
- dodaje novi dokument sa zadatim id-em
*/


