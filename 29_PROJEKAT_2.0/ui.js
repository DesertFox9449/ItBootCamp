import {chatroom} from "./app.js";
import { Chatroom } from "./chat.js";
// klasa
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
    // ispis poruka
    templateLI(doc) {
    
    let id = doc.id;
    let data = doc.data();
    let newDate = data.created_at.toDate();
    let htmlLI;
    if(localStorage.ime == null){
        localStorage.ime = `anonymous`;
    }
    if(data.username == localStorage.ime) {
        htmlLI = 
    `
    <li class="floatRight" id="${id}">
        <span class="user">${data.username}</span>
        <br>
        <span class="message">${data.message}</span> 
        <br>
        <span class="date">${this.formatDate(newDate)}</span>
        <img src="./images/MyTrash.svg">
    </li>
    `;
    }
    else{
        htmlLI = 
    `
    <li class="floatLeft" id="${id}">
        <span class="user">${data.username}</span>
        <br>
        <span class="message">${data.message}</span> 
        <br>
        <span class="date">${this.formatDate(newDate)}</span>
        <img src="./images/MyTrash.svg">
    </li>
    `;
    }
    this.list.innerHTML += htmlLI;
    }
    // formatiranje datuma
    formatDate(date) {
        // vreme poruke
        let dan = date.getDate();
        let mesec = date.getMonth() + 1;
        let godina = date.getFullYear();
        let sati = date.getHours();
        let minuti = date.getMinutes();
        // sveze vreme
        let datum = new Date();
        let d = datum.getDate();
        let m = datum.getMonth() + 1;
        let y = datum.getFullYear();
        // menjanje izgleda vremena
        dan = String(dan).padStart(2,"0");
        mesec = String(mesec).padStart(2,"0");
        sati = String(sati).padStart(2,"0");
        minuti = String(minuti).padStart(2, "0");
        // poredimo sveze vreme sa vremenom poruke
        let novoVreme;
        if(dan == d && m == mesec && y == godina){
            novoVreme = `${sati}:${minuti}`;
        }
        else {
            novoVreme = `${dan}.${mesec}.${godina}. - ${sati}:${minuti}`;
        }
        return novoVreme;
    }
    // prazni ul
    delete() {
        this.list.innerHTML = "";
    }
}