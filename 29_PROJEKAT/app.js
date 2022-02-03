import { Chatroom } from "./chat.js";
import {ChatUI} from "./ui.js";

let active = document.querySelector(`.active`);

let chat1 = new Chatroom(`JS`, `Stefan`);
console.log(chat1);

let chat2 = new Chatroom(`general`, `Jelena`);
let chat3 = new Chatroom(`tests`, `Miljan`);
/*


console.log(chatroom1);

// test geteri
console.log(chatroom1.username);
console.log(chatroom1.room);

// test seteri
// username
chatroom1.username = `Dusan`;
console.log(chatroom1.username);





chat3.addChat(`Imamo HR trening u sredu!`)
// .then(() => console.log(`Sve je proslo kako treba.`))
// .catch((err) => console.log(`Doslo je do greske. ${err}`));
*/
// room
let chatroom1 = new Chatroom(`js`, `Pera`);
chatroom1.room = `general`;
console.log(chatroom1.room);

chatroom1.getChats((ocekivani_argument) => {
    console.log(ocekivani_argument);
})



let ul = document.querySelector(`#chat ul`);
let poruka1 = new ChatUI(ul);
console.log(poruka1);
console.log(ul);




// Ispis u dokumentu
chat2.getChats((dokument) => {
    poruka1.templateLI(dokument);
})

// ispis sa stranice
let btn1 = document.getElementById(`submitText`);
console.log(inputMsg);

btn1.addEventListener(`click`, (event) => {
    event.preventDefault();
    // dohvati vrednost
    let inputMsg = document.getElementById(`inputMsg`);
    let inputMsgValue = inputMsg.value;
    console.log(inputMsgValue);
    chatroom1.addChat(inputMsgValue)
    .then(() => {
        inputMsg.value = "";
    })
    .catch();
});

let inputLog = document.getElementById(`inputLog`);
let logSubmit = document.getElementById(`logSubmit`);
console.log(inputLog, logSubmit);

logSubmit.addEventListener(`click`, event => {
    event.preventDefault();
    let newUsername = inputLog.value;
    chatroom1.username = newUsername;
    inputLog.value = ``;

});