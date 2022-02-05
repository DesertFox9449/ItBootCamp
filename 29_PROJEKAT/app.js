import { Chatroom } from "./chat.js";
import {ChatUI} from "./ui.js";

// DOM
let ul = document.querySelector(`#chat ul`);
let btn1 = document.getElementById(`submitText`);
let inputLog = document.getElementById(`inputLog`);
let logSubmit = document.getElementById(`logSubmit`);
let navigacija = document.querySelector(`nav`);
let buttons = document.querySelectorAll(`button`);
let general = document.getElementById(`general`);
let inputMsg = document.getElementById(`inputMsg`);



// Objekti/Klase
let chatroom = new Chatroom(`general`, `Pera`);
let poruka1 = new ChatUI(ul);
let r = localStorage.roomID;
if(r){
    chatroom.room = r;
}



// Ispis u dokumentu
chatroom.getChats((dokument) => {
    poruka1.templateLI(dokument);
})

// Submit dugme za poruku
btn1.addEventListener(`click`, (event) => {
    event.preventDefault();
   
    // dohvati vrednost
    let inputMsgValue = inputMsg.value;
    inputMsg.value = "";
    if(localStorage.ime == null){
        chatroom.username = `anonymous`;
    }
    else {
        chatroom.username = localStorage.ime;
    }

    chatroom.addChat(inputMsgValue)
    
    .then(() => {
        inputMsg.value = "";
    })
    .catch();
});

// Submit dugme za username
logSubmit.addEventListener(`click`, event => {
    event.preventDefault();
    let newUsername = inputLog.value;
    
    if(newUsername.length >= 2 && newUsername.length <= 10){
        localStorage.setItem(`ime`, newUsername);
        chatroom.username = newUsername;
        poruka1.delete();
        chatroom.room = localStorage.roomID;
        chatroom.getChats((dokument) => {
            poruka1.templateLI(dokument);
        })
        

    }
    else{

    }
    inputLog.value = ``;
    
});

// bubbling za nav
navigacija.addEventListener(`click`, event => {
    console.log(event.target.tagName);
    console.log(event.target)
    if(event.target.tagName == `BUTTON`) {
        console.log(event.target.id);
        // izvuci vrednost kliknutog dugmeta
        let sobaTarget = event.target;
        let sobaID = event.target.id;
        // obrisi chat
        poruka1.delete();
        // preimenuj sobu
        chatroom.updateRoom(sobaID);
        // ponovno upisivanje poruka
        chatroom.getChats((dokument) => {
            poruka1.templateLI(dokument);
        })
        podesavanjeSobe(sobaTarget, sobaID);
        
    }
})



function pocetnaSoba() {
    if(localStorage.roomID == null){
        localStorage.setItem(`roomID`, `general`);
        general.style.color = `yellow`;
    }
    else{
        
        buttons.forEach(b => {
            if(b.id == localStorage.roomID) {
                b.style.color = `yellow`;
                chatroom.room = localStorage.roomID;
            }
        }); 
    }
    
}
pocetnaSoba();

function podesavanjeSobe(sobaTarget, sobaID) {
    buttons.forEach(b => {
        b.style.color = `#fff`; 
    });
    localStorage.setItem(`roomID`, sobaID);
    sobaTarget.style.color = `yellow`;
}

export default chatroom;