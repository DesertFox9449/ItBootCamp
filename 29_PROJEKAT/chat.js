// import db from "./script.js";

export class Chatroom {
    constructor(r, uName){
        this.room = r;
        this.username = uName;
        this.chats = db.collection(`chats`);
    }
    // za room
    set room(r) {
        this._room = r;
    }
    get room() {
        return this._room
    }
    // za uName
    set username(uName) {
        this._username = uName;
    }
    get username() {
        return this._username;
    }
    
    
    // addChat metoda
    // addChat() {
    //     db.collection(`chats`)
    //     .add({
    //         message: , //value text inputa,
    //         username: this.username,
    //         room: // value

    //     })
    //     .this(() => {
    //         console.log(`Objekat je dodat u bazu podataka`);
    //     })
    //     .catch((err) => {
    //         console.log(`Doslo je do greske prilikom dodavanja objekta: ${err}`);
    //     });
    // }
    
}



