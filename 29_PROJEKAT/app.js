import { Chatroom } from "./chat.js";
import {ChatUI} from "./ui.js";

// DOM
let ul = document.querySelector(`#chat ul`);
let btn1 = document.getElementById(`submitText`);
let inputLog = document.getElementById(`inputLog`);
let logSubmit = document.getElementById(`logSubmit`);
let navigacija = document.querySelector(`nav`);


// Objekti/Klase
let chatroom = new Chatroom(`js`, `Pera`);
let poruka1 = new ChatUI(ul);

// Postavljanje vrednosti u lokal Storage
localStorage.setItem("nazivPromenljive",5);
localStorage.setItem("nazivPromenljive",6);
localStorage.setItem("nazivPromenljive","Test string");
localStorage.setItem("x",7);
localStorage.setItem("y",10);
// uzimanje vrednosti promenljive iz Local Storage
let z = localStorage.x + localStorage.y;
console.log(z);

// ispis dokumenata u konzoli
chatroom.getChats((ocekivani_argument) => {
    console.log(ocekivani_argument);
})

// Ispis u dokumentu
chatroom.getChats((dokument) => {
    poruka1.templateLI(dokument);
})

// Submit dugme za poruku
btn1.addEventListener(`click`, (event) => {
    event.preventDefault();
    // dohvati vrednost
    let inputMsg = document.getElementById(`inputMsg`);
    let inputMsgValue = inputMsg.value;
    console.log(inputMsgValue);
    console.log(inputLog.value);
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
        

    }
    else{

    }
    inputLog.value = ``;
    
});

// bubbling za nav
navigacija.addEventListener(`click`, event => {
    console.log(event.target.tagName);
    if(event.target.tagName == `BUTTON`) {
        console.log(event.target.id);
        // izvuci vrednost kliknutog dugmeta
        let soba = event.target.id;
        // obrisi chat
        poruka1.delete();
        // preimenuj sobu
        chatroom.room = soba;
        // ponovno upisivanje poruka
        chatroom.getChats((dokument) => {
            poruka1.templateLI(dokument);
        })
    }
})


