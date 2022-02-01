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
    let htmlLI = 
    `
    <li>
        ${data.username} : ${data.message} 
        <br>
        ${data.created_at}

    </li>
    `;
    this.chatRoom.innerHTML += htmlLI;

    }


}