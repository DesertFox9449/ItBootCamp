/*
Kreirati kolekciju movies u kojoj svaki dokument sadrži sledeća polja:
Name (string),
Director (objekat koji se sastoji od imena i prezimena režisera),
Release_year (number),
Genres (niz stringova),
Rating (number – decimalni broj).


Napisati skript koji:
Dodaje nekoliko filmova u bazu,
Menja podatke o nekim filmovima u bazi,
Dodaje žanr nekom filmu,
Briše žanr nekom filmu,
Menja ime ili prezime nekom režiseru.

*/

let film2 = {
    name: `The Godfather`,
    director: {
        firstname: `Francis`,
        lastname: `Copola`
    },
    
    release_year: 1972,
    genres: [`Crime`, `Drama`],
    rating: 10
};

let film3 = {
    name: ` The Dark Knight`,
    director: {
        firstname: `Cristopher`,
        lastname: `Nolan`
    },
    release_year: 2008,
    genres: [`Action`, `Crime`],
    rating: 9
};

let film4 = {
    name: ` The Godfather: Part II`,
    director: {
        firstname: `Patak`,
        lastname: `Daca`
    },
    release_year: 1974,
    genres: [`Crime`, `Drama`],
    rating: 9
};

let film5 = {
    name: ` The Lord of the Rings: The Return of the King`,
    director: {
        firstname: `Peter`,
        lastname: `Jackson`
    },
    release_year: 2003,
    genres: [`Action`, `Horror`, `Adventure`,`Drama`],
    rating: 9
};

let filmovi = [film2. film3, film4, film5];


// Imao sam problema sa petljom prilikom postavljanja filmova pa sam na karaju ovako uradio


db.collection(`movies`)
.doc(`movie2`)
.set(film2) 
.then(() => {
    console.log(`Uspesno dodat film broj 2`);
})
.catch(() => {
    console.log(`Doslo je do greske pri postavljanja filma u bazu podataka.`);
});

db.collection(`movies`)
.doc(`movie3`)
.set(film3) 
.then(() => {
    console.log(`Uspesno dodat film broj 3`);
})
.catch(() => {
    console.log(`Doslo je do greske pri postavljanja filma u bazu podataka.`);
});

db.collection(`movies`)
.doc(`movie3`)
.set(film3) 
.then(() => {
    console.log(`Uspesno dodat film broj 3`);
})
.catch(() => {
    console.log(`Doslo je do greske pri postavljanja filma u bazu podataka.`);
});

db.collection(`movies`)
.doc(`movie4`)
.set(film4) 
.then(() => {
    console.log(`Uspesno dodat film broj 4`);
})
.catch(() => {
    console.log(`Doslo je do greske pri postavljanja filma u bazu podataka.`);
});

db.collection(`movies`)
.doc(`movie5`)
.set(film5) 
.then(() => {
    console.log(`Uspesno dodat film broj 5`);
})
.catch(() => {
    console.log(`Doslo je do greske pri postavljanja filma u bazu podataka.`);
});

/////////////////////////////
// dodavanje zanra
db.collection(`movies`)
.doc(`movie3`)
.update({
    genres: [`Action`, `Crime`, `Drama`]
})
.then(() => {
    console.log(`Update je prosao savrseno`);
})
.catch(() => {
    console.log(`Doslo je do greske prilikom update-a.`);
})

// rejting filma
db.collection(`movies`)
.doc(`movie2`)
.update({
    rating: 9.2
})
.then(() => {
    console.log(`Update je prosao savrseno`);
})
.catch(() => {
    console.log(`Doslo je do greske prilikom update-a.`);
});

// brisanje zanra filmu 5
// preko update-a
db.collection(`movies`)
.doc(`movie5`)
.update({
    genres: ["Action", "Adventure", "Drama"]
})
.then(() => {
    console.log(`Brisanje je proslo savrseno`);
})
.catch(() => {
    console.log(`Doslo je do greske prilikom brisanja.`);
});

// menjanje imena i prezimena nekom reziseru

db.collection(`movies`)
.doc(`movie4`)
.update({
    director: {
        firstname: `Francis`,
        lastname: `Copola`
    },
})
.then(() => {
    console.log(`Promena imena i prezimena je prosla savrseno.`);
})
.catch(() => {
    console.log(`Doslo je do greske pri promeni imena i prezimena.`);
});

// petlja za brisanje
/*
for(let b = 0; b < 4; b++) {
        db.collection(`movies`)
        .doc(`movie${b + 2}`)
        .delete() 
        .then(() => {
            console.log(`Uspesno dodat film broj 2`);
            
        })
        .catch(() => {
            console.log(`Doslo je do greske pri postavljanja filma u bazu podataka.`);
    });
};
*/