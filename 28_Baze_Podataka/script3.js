// 1) Pristupanje konkretnom dokumentu u kolekciji
// 2) Pristupanje svim ili odredjenim dokumentima iz kolekcije

// 1)
db.collection(`customers`)
.doc(`customer1`)
.get() // nema parametara za get metodu
.then((doc) => {
    if(doc.exists) {
        console.log(`Postoji dokument ${doc.id}`);
        let obj = doc.data(); // metoda data konvertuje dokument u JS objekat
        console.log(obj);
    }
    else{
        console.log(`Ne postoji dokument ciji je ID: ${doc.id}`);
    }
    // Polja: doc.id (string), doc.exists (boolean)
    // Metoda: doc.data() // konvertuje u JS objekat
})
.catch(() => {
    console.log(`Nemoguce je uhavtiti dokument`);
});

// obrati paznju na exists,
// uvek se dobije objekat
// ako je exists == true, znaci da je dokument tu

////////////////////////////////////////////////////

// 2) Pristupanje svim dokumentima
db.collection(`customers`)
.get()
.then((snapshot) => {
    console.log(snapshot);  // trenutni prikaz kolekcije dokumenata
    if(!snapshot.empty) {
        let allDocs = snapshot.docs; // allDocs je pravi niz
        allDocs.forEach(doc => {
            console.log(doc.id, doc.data());
        });
    }
    else{
        console.log(`Nema dokumenata u kolekciji`);
    }
})
.catch((err) => {
    console.log(`Nemoguce je dohvatiti dokumente iz kolekcije: ${err}`);
})

// 1) Dohvatanje dokumenata u odredjenom redosledu
// 2) Dohvatanje odredjenog broja dokumenata iz kolekcije
// 3) Dohvatanje dokumenata koji zadovoljavaju odredjene kriterijume (filtriranje)

// 1)
///////////
db.collection(`customers`)
.orderBy("age", "desc") 
// desc znaci descending, opadajuci 
// asc  znaci ascending, rastuci
// metoda za sortiranje po polju(name)/(age) 
// get vraca Promise, zato orderBy mora da bude pre get()
// ako su godine iste, ocitace imena po redosledu u dokumentima
.orderBy("name")
// stavimo dva uslova
// moramo da postavimo index
// index se samo jednom kreira
.get()
.then((snapshot) => {
    console.log(snapshot);  // trenutni prikaz kolekcije dokumenata
    if(!snapshot.empty) {
        let allDocs = snapshot.docs; // allDocs je pravi niz
        allDocs.forEach(doc => {
            let obj = doc.data();
            console.log(obj.name + " " + obj.age + " " + obj.salary);
        });
    }
    else{
        console.log(`Nema dokumenata u kolekciji`);
    }
})
.catch((err) => {
    console.log(`Nemoguce je dohvatiti dokumente iz kolekcije: ${err}`);
})




// 2)
////////////

db.collection(`customers`)
.orderBy("name")
.orderBy("age", "desc") 
.orderBy("salary", "desc")
.limit(2) // broj dokumenata koje zelimo da prikazemo
.get()
.then((snapshot) => {
    console.log(snapshot);  
    if(!snapshot.empty) {
        let allDocs = snapshot.docs; 
        allDocs.forEach(doc => {
            let obj = doc.data();
            console.log(obj.name + " " + obj.age + " " + obj.salary);
        });
    }
    else{
        console.log(`Nema dokumenata u kolekciji`);
    }
})
.catch((err) => {
    console.log(`Nemoguce je dohvatiti dokumente iz kolekcije: ${err}`);
})

// 3)
/////////////
db.collection(`customers`)
.where("age", "<=", 25) // 1string, polje // 2string, uslov poredjenja
// .where("salary", "==", 470) // mora novi index ovde
.orderBy("age", "desc")
.orderBy("name")
// .orderBy("age", "desc") 
// .orderBy("salary", "desc")
// .limit(2) // broj dokumenata koje zelimo da prikazemo
.get()
.then((snapshot) => {
    console.log(snapshot);  
    if(!snapshot.empty) {
        let allDocs = snapshot.docs; 
        allDocs.forEach(doc => {
            let obj = doc.data();
            console.log(obj.name + " " + obj.age + " " + obj.salary);
        });
    }
    else{
        console.log(`Nema dokumenata u kolekciji`);
    }
})
.catch((err) => {
    console.log(`Nemoguce je dohvatiti dokumente iz kolekcije: ${err}`);
});

/////////////////////////////////////
// Iz kolekcije customers, pročitati sve klijente sortirane po imenu.
// Iz kolekcije customers, pročitati sve klijente koji:
// Imaju adresu u Nišu,
db.collection(`customers`)
.where("addresses", )
.get()
.then((snapshot) => {
    if(!snapshot.empty){
        let allSnap = snapshot.docs;
        docs.forEach(doc => {
            console.log(doc.name);
        });
    }
})
.catch(() => {

}); 