export class ChatUI {
    constructor(cr) {
        this.list = cr;
    }
    set list(cr) {
        this._list = cr
    }
    get list() {
        return this._list;
    }
    
    templateLI(data) {
    let newDate = data.created_at.toDate();
    let htmlLI = 
    `
    <li>
        ${data.username}
        <br>
        ${data.message} 
        <br>
        ${this.formatDate(newDate)}

    </li>
    `;
    this.list.innerHTML += htmlLI;

    }
    
    formatDate(date) {

        let dan = date.getDate();
        let mesec = date.getMonth() + 1;
        let godina = date.getFullYear();
        let sati = date.getHours();
        let minuti = date.getMinutes();

        // dodavanje nule na da vrednosti imaju dve cifre
        dan = String(dan).padStart(2,"0");
        mesec = String(mesec).padStart(2,"0");
        sati = String(sati).padStart(2,"0");
        minuti = String(minuti).padStart(2, "0");

        let novoVreme = `${dan}.${mesec}.${godina}. - ${sati}:${minuti}`;
        return novoVreme;
    }

    delete() {
        this.list.innerHTML = "";
    }


}