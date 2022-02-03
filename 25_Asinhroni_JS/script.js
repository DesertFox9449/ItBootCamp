let request = new XMLHttpRequest();
// ready state
// metodoloski radjeno
/*
request.addEventListener(`readystatechange`, () => {
    if(request.readyState == 1) {
        console.log(`Uspostavljena konekcija`);
    }
    else if(request.readyState == 2) {
        console.log(`Poslat je zahtev serveru`);
    }
    else if(request.readyState == 3) {
        console.log(`Prihvata se odgovor - u statusu preuzimanja`);
    }
    else if(request.readyState == 4) {
        console.log(`Odgovor je preuzet: ${request.responseText}`);
    }
    
});
*/ 
// ako koristimo anonimnu funkciju /// this.readyState === 4 
request.addEventListener(`readystatechange`, function() {
    if(this.readyState === 4 && this.status === 200) {
        //console.log(this.responseText);
        let data = JSON.parse(this.responseText);
        console.log(typeof data);
        console.log(data);
    }
    else if(this.readyState === 4) {
        console.log(`Couldn't fetch data`);
        console.log(this);
    }
});

// request.addEventListener(`readystatechange`, () => {
//     if(request.readyState === 4 && request.status === 200) {
//         console.log(request.responseText);
//     }
//     else if(request.readyState === 4) {
//         console.log(`Couldn't fetch data`);
//         console.log(request);
//     }
// });
request.open(`GET`, `https://jsonplaceholder.typicode.com/users/`); // url posta
request.send();
// ostvarili smo vezu sa serverom
// treba da povucemo data sa servera


// Uspostaviti konekciju ka endpointu za users resurs: 

let myRequest1 = new XMLHttpRequest();
let myRequest2 = new XMLHttpRequest();
let myRequest3 = new XMLHttpRequest();
let myRequest4 = new XMLHttpRequest();
let myRequest5 = new XMLHttpRequest();
myRequest1.addEventListener(`readystatechange`, () => {
    if(myRequest1.readyState === 4 && myRequest1.status === 200) {
        //console.log(this.responseText);
        let objekti = JSON.parse(myRequest1.responseText);
        console.log(typeof objekti);
        console.log(objekti);
        console.log(`Ispisati u konzoli one korisnike čiji website ima domen „.com“.`);
        objekti.forEach(objekat => {
            
            if(objekat.website.includes(`.com`)) {
                console.log(objekat.name);
            }
            
            
        });
        console.log(`Ispisati korisnike čije ime sadrži reč „Clementin“`);
        objekti.forEach(objekat => {
            
            // Ispisati korisnike čije ime sadrži reč „Clementin“.
            if(objekat.name.includes(`Clementin`)) {
                console.log(objekat.name);
            }
        });
        console.log(`Ispisati korisnike koji rade u kompaniji čije ime sadrži reč „Group“, ili reč „LLC“.`);
        objekti.forEach(objekat => {
            
            // Ispisati korisnike koji rade u kompaniji čije ime sadrži reč „Group“, ili reč „LLC“.
            if(objekat.company.name.includes(`Group`) || objekat.company.name.includes(`LLC`)){
                console.log(objekat.name);
            }
        });

        console.log(`Ispisati sve različite gradove u kojima rade ovi korisnici.`);
        // dva niza
        let nizGradova = [];
        let nizGradovaJedin = [];
        objekti.forEach(objekat => {
            nizGradova.push(objekat.address.city)
        });
        // console.log(nizGradova);
       
        // provera duplih gradova
        nizGradova.forEach(grad => {
            if(nizGradovaJedin.includes(grad)) {

            }
            else{
                nizGradovaJedin.push(grad)
            }
        });
        console.log(nizGradovaJedin);

        // Ispisati broj korisnika koji žive na adresi čije su obe vrednosti geografske dužine i geografske širine negativni brojevi.
        console.log(`Ispisati broj korisnika koji žive na adresi čije su obe vrednosti geografske dužine i geografske širine negativni brojevi.`);
        let b = 0;
        objekti.forEach(objekat => {
        //    console.log( objekat.address.geo);
            let gps = objekat.address.geo;
            if(gps.lat < 0 && gps.lng < 0) {
                b++;
            }
            
        });
        console.log(`Broj korisnika koji zive na adresi cije su obe vrednosti geografske dužine i geografske širine negativni brojevi je: ${b}!`);
        
        
    }
    else if(myRequest.readyState === 4) {
        console.log(`Better luck next time.`);
    }
});
myRequest1.open(`GET`, `https://jsonplaceholder.typicode.com/users`);
myRequest1.send();

myRequest2.open(`GET`, `https://jsonplaceholder.typicode.com/users`);
myRequest2.send();

myRequest3.open(`GET`, `https://jsonplaceholder.typicode.com/users`);
myRequest3.send();

myRequest4.open(`GET`, `https://jsonplaceholder.typicode.com/users`);
myRequest4.send();

myRequest5.open(`GET`, `https://jsonplaceholder.typicode.com/users`);
myRequest5.send();


/////////////////////////////////////////////////////////////////////////////
// resove and reject
let getUsers = (resolve, reject) => {
    let request = new XMLHttpRequest();
    request.addEventListener(`readystatechange`, function() {
        if(this.readyState === 4 && this.status === 200) {
            // radi nesto kada je sve u redu
            let data = JSON.parse(this.responseText);
            resolve(data);
        }
        else if(this.readyState === 4) {
            // radi nesto kada je doslo do greske
            reject(`Doslo je do greske!`);
        }
    });
    request.open(`GET`, `https://jsonplaceholder.typicode.com/users`);
    request.send();
};

let zad2 = (niz) => {
    niz.forEach(kor => {
        if(kor.website.includes(`.com`)) {
            console.log(kor.name);
        }
    });
};

let zad3 = (niz) => {
    niz.forEach(kor => {
        if(kor.name.includes(`Clementin`)) {
            console.log(kor.name);
        }
    });
};

let zad5 = (niz) => {
    let gradovi = [];
    niz.forEach(kor => {
        if(!gradovi.includes(kor.address.city)) {
            gradovi.push(kor.address.city);

        }
    });
    console.log(gradovi);
};

// greska funkcija
let ispisPorukeStranica = (poruka) => {
    document.body.innerHTML += `<p class="error">${poruka}</p>`;
};

let ispisPorukeKonzola = (poruka) => {
    console.log(poruka);
}
getUsers(zad2, ispisPorukeStranica);
getUsers(zad3, ispisPorukeKonzola);
// getUsers(zad4, ispisPorukeStranica);
getUsers(zad5, ispisPorukeStranica);
// zadatak 4
// na licu mesta moze da se odradi
getUsers((niz) => {
            niz.forEach(kor => {
                if(kor.company.name.includes("Group") || kor.company.name.includes("LLC")){
                    console.log(kor.name);
                }
            });
},
         (poruka) => {
             document.body.innerHTML += `<p class="error>${poruka}</p>"`;
         });
//////////////////////////////////////////////////
  
let getSportisti = (resolve, reject) => {
    let sportisti = new XMLDocument();
    sportisti.addEventListener(`readystatechange`, () =>{
        if(sportisti.readyState === 4 && sportisti.status === 200) {
            let data = JSON.parse(sportisti.responseText);
            resolve(data);
        }
        else if(sportisti.readyState === 4) {
            reject(`This is not working.`)
        }
    });
};

sportisti.open(`GET`, `sportisti.json`);
sportisti.send();

zadatak3 = (array) => {
    let suma = 0;
    let avrgH = 0;
    array.forEach(s => {
        suma += s.visina;
    });
    avrgH = suma / array.length;
    console.log(avrgH);
};

let ispisGreske = (message) => {
    console.log(message);
    
}

getSportisti(zadatak3, ispisGreske);

