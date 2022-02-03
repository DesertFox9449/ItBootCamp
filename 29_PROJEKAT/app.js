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
    chatroom.username = newUsername;
    inputLog.value = ``;

});