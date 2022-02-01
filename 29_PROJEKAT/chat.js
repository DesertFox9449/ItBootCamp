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

        // Da sacuvam dokument u db
        // let response = await this.chats.add(`Uspesno dodat cet`)
        // return response; // vracam Promise() i mogu za njega da kazem .then() .catch
        // // dodavanje dokumenta u bazu podataka
        // this.chats

        
        // Da sačuvan dokument u db
        let response = await this.chats.add(docChat);
        return response; // Vraćam Promise i mogu za njega da kažem .then i .catch 
    }

    // Metod koji prati promene u bazi i vraca poruke
    getChats(callback) {
        this.chats.where(`room`, `==`, this.room)
        this.chats.orderBy(`created_at`)
        this.chats.onSnapshot(snapshot => {
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



