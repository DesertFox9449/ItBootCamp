import {startValueFB, endValueFB} from "./app.js";
// klasa
export class Chatroom {
    constructor(r, uName){
        this.room = r;
        this.username = uName;
        this.chats = db.collection(`chats`);
        this.unsub = false;    
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
        uName = uName.trim();
        if(uName.length >= 2 && uName.length <= 10) {
            this._username = uName;
        }
        else {
            alert(`Korisničko ime treba da sadrži između 2 i 10 karaktera.`);
        }   
    }
    get username() {
        return this._username;
    }
    // Update room
    updateRoom(ur){
        this.room = ur;
        if(this.unsub != false){
            this.unsub(); 
        }  
    }
    // objekat
    async addChat(mess){
        let date = new Date();
        let docChat = {
            message: mess,
            username: this.username,
            room:   this.room,
            created_at: firebase.firestore.Timestamp.fromDate(date)
        }
        let response = await this.chats.add(docChat);
        return response; 
    }
    // Metod koji prati promene u bazi i vraca poruke
    getChats(callback) {
        this.unsub = this.chats
        .where(`room`, `==`, this.room)
        .orderBy(`created_at`)
        .onSnapshot(snapshot => {
            snapshot.docChanges().forEach(change => {
                if(change.type == `added`) {
                    callback(change.doc);
                }   
            });
        })
    }
    // metoda za brisanje poruke
    deleteMsg(id) {
        this.chats
        .doc(id)
        .delete()
        .then(() => {
            console.log(`Sve je super.`);
        })
        .catch(err => {
            console.log(`Doslo je do greske ${err}`);
        });
    }
    // metoda za vremenski interval
    msgTimer(callback) {
        console.log(startValueFB);
        console.log(endValueFB);
        this.chats
        .where(`created_at`, `>=`, startValueFB)
        .where(`created_at`, `<=`, endValueFB)
        .where(`room`, `==`, this.room)
        .orderBy(`created_at`)
        .onSnapshot(snapshot => {
            snapshot.docChanges().forEach(change => {
                  callback(change.doc);
                  
            });
        })
    }
}


