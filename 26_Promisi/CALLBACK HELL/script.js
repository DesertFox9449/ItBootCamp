    // dodajemo parametre
    // resusrs - putanja
let getTodos = (resource, callback) => {
        // 1. kreiranje XML objekta
    let request = new XMLHttpRequest();

    request.addEventListener(`readystatechange`, () => {
        if(request.readyState === 4 && request.status === 200) {
            // Sve je OK!
            // console.log(request.responseText);   vise nam nije potreban
            callback(request.responseText, undefined);

        }
        else if(request.readyState === 4) {
            // Nesto nije OK
            // console.log(`Ne mogu da dohvatim podatke.`);
            callback(undefined, `Ne mogu da dohvatim podatke.`);
        }
    });

    // 2. Otvaranje kreiranog zahteva
    request.open(`GET`, resource);
    request.send();
};

getTodos(`../JSON/todos.json`, (data, err) => { // dva parametra,  jedan ako je sve OK, drugi je greska
    console.log(`callback okinuta`);
    // pitanje od stringa je uvek /true
    // ako je err == true, ispisati gresku
    if(err) { 
        console.log(err);  // ispisuje gresku kod todos.json fajla
    }
    else {
        console.log(data); // ispisuje podatke sa kojima dalje moze da raspolaze

        // Nakon sto su se ispisali podaci iz todos.json, pozivamo sledeci fruits.json 
        getTodos(`../JSON/fruits.json`, (data, err) => {
            if(err) {
                console.log(err);  // ako je doslo do greske u fruits.json
            }
            else {
                console.log(data); // ispisuje podatke is fruits.json fajla

                // Nakon sto su se ispisali podaci iz fruits.json, pozivamo sledeci vegetable.json 
                getTodos(`../JSON/vegetable.json`, (data, err) => {
                    if(err) {
                        console.log(err);  // ako je doslo do greske u vegetable.json
                    }
                    else {
                        console.log(data); // ispisuje podatke is vegetable.json fajla
                    }
                });
            }
        });
    }
});

// cilj je da pravimo rejuzabilnu funkciju

console.log(`Kraj`);
