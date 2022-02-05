// import db from "./script.js";


export class Chatroom {
    constructor(r, uName){
        this.room = r;
        this.username = uName;
        this.chats = db.collection(`chats`);
        this.unsub = false; // pocetna vrednost
        // signal da je stranica prvi put ucitana
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
        if(uName.length >= 2 && uName.length <= 10){
            this._username = uName;
        }
        else{
            alert(`Korsinicko ime treba da sadrzi izmedju 2 i 10 karaktera.`)
        }
        
    }
    get username() {
        return this._username;
    }
    
    // Update room
    updateRoom(ur){
        this.room = ur;
        if(this.unsub != false){ // unsub vise nije false, nego je u getChats postalo funkcija
            this.unsub(); // unsub je funkcija

        }
        
        
    }

    ////////////////////// Jelena
    // dodavanje nove poruke
    async addChat(mess){
        // dodavanje trenutnog vremena
        let date = new Date();

        // Kreiranje dokumenta/obj prosledjujem bazi podataka
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

                // Ispisati sve dokumente koji su dodati u bazu
                if(change.type == `added`) {
                    // console.log(change.doc.data());
                    callback(change.doc.data());
                }
                
            });
        })
    }
}



