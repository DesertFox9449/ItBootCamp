export class ChatUI {
    constructor(cr) {
        this.chatRoom = cr;
    }
    set lista(cr) {
        this._chatRoom = cr
    }
    get lista() {
        return this._chatRoom;
    }
    
    templateLI(data) {
    //   let soba = data.room;
    //   let ime = data.username;
    //   let vreme = data.created_at.toDate();
    //   let message = data.message;

    //   let li = document.createElement(`li`);

    //   li.innerHTML = `${ime}: ${message}
    //   <br>
    //   ${vreme}`;
    //   this.chatRoom.appendChild(li);
    let newDate = data.created_at.toDate();
    let htmlLI = 
    `
    <li>
        ${data.username} : ${data.message} 
        <br>
        ${this.formatDate(newDate)}

    </li>
    `;
    this.chatRoom.innerHTML += htmlLI;

    }
    
    formatDate(date) {

        let dan = date.getDate();
        let mesec = date.getMonth() + 1;
        let godina = date.getFullYear();

        let sati = date.getHours();
        let minuti = date.getMinutes();

        // dodavanje nule na da vrednosti imaju dve cifre
        // dan = String(d).padStart(2,"0");
        // mesec = String(m).padStart(2,"0");
        // sati = String(h).padStart(2,"0");
        // minuti = String(min).padStart(2, "0");

        let novoVreme = `${dan}.${mesec}.${godina}. - ${sati}:${minuti}`;
        return novoVreme;
    }


}