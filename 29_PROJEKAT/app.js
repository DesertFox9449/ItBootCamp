import { Chatroom } from "./chat.js";
import {ChatUI} from "./ui.js";

// DOM
let ul = document.querySelector(`#chat ul`);
let btn1 = document.getElementById(`submitText`);
let inputLog = document.getElementById(`inputLog`);
let logSubmit = document.getElementById(`logSubmit`);


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
        chatroom.username = newUsername;
        let ispis = document.createElement(`p`);
    }
    else{

    }
    inputLog.value = ``;
    
});