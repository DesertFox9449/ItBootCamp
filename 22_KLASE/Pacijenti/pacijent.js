export class Pacijent {
    constructor (i, v, t) {
        this.ime = i;
        this.visina = v;
        this.tezina = t;
    }
    // za ime
    set ime (i) {
        i = i.trim();
        if (i.length > 0) {
            this._ime = i;
        }
        else {
            this._ime = `Slavica it is`;
        }
    }
    get ime () {
        return this._ime;
    }
    // visina
    set visina (v) {
        if(v > 0 && v < 250) {
            this._visina = v / 100;
        }
        else {
            this._visina = 180 / 100;
        }
    }
    get visina () {
        return this._visina;
    }
    // tezina
    set tezina (t) {
        if (t > 0 && t < 550) {
            this._tezina = t;
        }
        else {
            this._tezina = 80;
        }
    }
    get tezina () {
        return this._tezina;
    }
    // metode
    stampaj() {
        console.log(this.ime, this.visina, this.tezina );
    }
    stampajListu() {
        let htmlLista = 
        `<ul>
            <li>Ime: ${this.ime}</li>
            <li>Visina: ${this.visina}</li>
            <li>Tezina: ${this.tezina}</li>
        </ul>`;
        return htmlLista;
    }
    Bmi() {
        let BMI = this.tezina / this.visina ** 2;
        return BMI;
    }
    Kritican() {
        let krit = this.Bmi();
        console.log(krit);
        if (krit < 15 || krit > 40) {
            return true;
        }
        else {
            return false;
        }
    }
}