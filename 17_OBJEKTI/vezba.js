// Formirati objekat dan koji sadrži:

// Datum (string u formatu YYYY/MM/DD),
// Kiša (true/false),
// Sunce (true/false),
// Oblačno (true/false),
// Vrednosti temperature (Niz temperatura tog dana).

let mojObjekat = {
    datum: `2021/12/23`,
    rain: false,
    sun: true,
    cloudy: false,
    // temp: [-9, - 8, -5, -3, 0],
    temp: [39, 38, 35, 53, 29],
    // Određuje i vraća prosečnu temperaturu izmerenu tog dana.
    prosTemp: function() {
        let suma = 0;
        this.temp.forEach(element => {
            suma += element;
        });
        srednjaTemp = suma / this.temp.length
        return srednjaTemp;
    },
    //Prebrojava i vraća koliko merenja je bilo sa natprosečnom temperaturom.
    natTemp: function(srednjaTemp) {
        let nat = srednjaTemp; // dobra odluka
        let b = 0;
        this.temp.forEach(element => {
            if (nat > element) {
                b++;
            }
        });
        return b;
    },
    // Prebrojava i vraća koliko merenja je bilo sa maksimalnom temperaturom.
    maxTemp: function(temp) {
        let max = this.temp[0];
        
        temp.forEach(element => {
            if (max < element) {
                max = element;
            }
        });
        
        let b = 0;
        temp.forEach(element => {
            if (max == element) {
                b++;
            }
        });
        return b;
    },
    // 4. Prima dva parametra koji predstavljaju dve temperature. Potrebno je da metoda vrati broj merenja u toku dana čija je vrednost između ove dve zadate temperature (ne uključujući te dve vrednosti).
    // temp: [-9, - 8, -5, -3, 0],
    izmedjuTemp: function(t1, t2) {
        
        this.temp.forEach(element => {
            if (t1 < element && t2 > element) {
                console.log(element);
            }
        });
    },
    // 5. Vraća true ukoliko je u većini dana temperatura bila iznad proseka. U suprotnom vraća false. 
    iznadProseka: function() {
        
        return (this.temp.length / 2) < this.natTemp();
             //     2.5                    2
        
    },
    // 6. Za dan se smatra da je leden ukoliko nijedna temperatura izmerena tog dana nije iznosila iznad 0 stepeni. Metod vraća true ukoliko je dan bio leden, u suprotnom metod vraća false.

    leden: function() {
        // // this.temp.forEach(t => {
        //     if(t > 0) {
        //         return false; // forEach funkcija ne radi sa returnom
        //     }
        // });
        // return true;
        for (let i = 0; i < this.temp.length; i++) {
            if (this.temp[i] > 0) {
                return false;
            }
        }
        return true;
    },
    // 7. Za dan se smatra da je tropski ukoliko nijedna temperatura izmerena tog dana nije iznosila ispod 24 stepena. Metod vraća true ukoliko je dan bio tropski, u suprotnom vraća false.
    tropski: function() {
        let hot = true;
        let min = 24;
        this.temp.forEach(element => {
            if (element < min) {
                hot = false;
            }
        });
        return hot;
    },
    // 8. Dan je nepovoljan ako je razlika između neka dva uzastopna merenja veća od 8 stepeni. Metod vraća true ukoliko je dan bio nepovoljan, u suprotnom vraća false.
    

};

// 6
console.log(mojObjekat.leden());

let prosecnaTemperatura = mojObjekat.prosTemp();
console.log(prosecnaTemperatura);

let natprosecnaTemperatura = mojObjekat.natTemp(mojObjekat.temp, mojObjekat.prosTemp(mojObjekat.temp));
console.log(natprosecnaTemperatura);

let maksimalnaTemp = mojObjekat.maxTemp(mojObjekat.temp);
console.log(maksimalnaTemp);


// 4. Prima dva parametra koji predstavljaju dve temperature. Potrebno je da metoda vrati broj merenja u toku dana čija je vrednost između ove dve zadate temperature (ne uključujući te dve vrednosti).

let izmedjuTemperatura = mojObjekat.izmedjuTemp(mojObjekat.temp[0], mojObjekat.temp[3]);

console.log(mojObjekat.iznadProseka());

console.log(mojObjekat.tropski());

// 6. Za dan se smatra da je leden ukoliko nijedna temperatura izmerena tog dana nije iznosila iznad 0 stepeni. Metod vraća true ukoliko je dan bio leden, u suprotnom metod vraća false.

// 7. Za dan se smatra da je tropski ukoliko nijedna temperatura izmerena tog dana nije iznosila ispod 24 stepena. Metod vraća true ukoliko je dan bio tropski, u suprotnom vraća false.






