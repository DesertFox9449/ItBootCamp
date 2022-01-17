class Film {
    constructor(n, r, god, o) {
        this.naslov = n;
        this.reditelj = r;
        this.godina = god;
        // this._ocene = o; pre setera
        this.ocene = o; // posle setera
    }
    // naslov
    set naslov (n) {
        let n1 = n.trim();
        if(n1.length > 0) {
            this._naslov = n1;
        }
        else {
            this._naslov = `Nema naslova`;
        }
    }
    get naslov () {
        return this._naslov;
    }
    //  reditelj
    set reditelj (r) {
        let r1 = r.trim();
        if(r1.length > 0) {
            this._reditelj = r1;
        }
        else {
            this._reditelj = `Nema reditelja`;
        }
    }
    get reditelj () {
        return this._reditelj;
    }
    // godina
    set godina (god) {
        if (god > 1900) {
            this._godina = god;
        }
        else {
            this._godina = `Pogresan unos`;
        }
    }
    get godina () {
        return this._godina;
    }
    stampaj() {
        console.log(this);
    }
    // ocene
    set ocene(o) {
        this._ocene = o;
    }
    get ocene() {
        return this._ocene;
    }
    // DODAVANJE JEDNE OCENE
    dodajOcenu(novaOcena) {
        // seter ocekuje ceo niz, zato ne mozemo da koristimo seter
        this.ocene.push(novaOcena);
    }
    // Napraviti metod prosek koji vraća prosečnu ocenu 
    prosek() {
        let suma = 0;
        let avrgOcena = ``;
        this.ocene.forEach(ocena => {
            suma += ocena;
          
        });
        avrgOcena = suma / this.ocene.length;
        return avrgOcena;
    }
}

export {Film};