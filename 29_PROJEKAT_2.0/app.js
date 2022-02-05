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
let submitBoja = document.getElementById(`submitBoja`);
let color = document.getElementById(`color`);
let chat = document.querySelector(`#chat`);
let footer = document.querySelector(`footer`);
let poruka = document.querySelector(`footer p span`);
let startDate = document.getElementById(`start_date`);
let endDate = document.getElementById(`end_date`)
let setDate = document.getElementById(`set_date`);

// boja
chat.style.border = `10px solid ${localStorage.color}`;

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

// eventListener za poruku
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
    inputMsgValue = inputMsgValue.trim();
    if(inputMsgValue.length > 0){
        chatroom.addChat(inputMsgValue)
    }
    else {
        alert(`Ne možete poslati praznu poruku.`);
    }
});

// eventListener za username
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
        poruka.innerHTML = newUsername;
        poruka.style.fontSize = `20px`;
        poruka.style.fontWeight = `bold`;
        footer.style.display = `block`;
        setTimeout(() => {
            footer.style.display = `none`;
        },3000);
    }
    else{
        alert(`Korisničko ime treba da sadrži između 2 i 10 karaktera.`);
    }
    inputLog.value = ``;
});
// eventListener za nav
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
//////////////////////////////////////
// event listener za ul
ul.addEventListener(`click`, event => {
    console.log(event.target);
    scrollBy(0, 1000);
    if(event.target.tagName == "IMG"){
        console.log(event.target.parentNode);
        
        if(event.target.parentNode.classList == "floatRight") {
            let potvrda = confirm(`Da li ste sigurni da zelite da obrisete poruku?`)
            if(potvrda){
                event.target.parentNode.remove();
                chatroom.deleteMsg(event.target.parentElement.id)
            }
        }
        else if(event.target.parentNode.classList == "floatLeft"){
            event.target.parentNode.remove();
        }

    }
})

// event listener za boju
submitBoja.addEventListener(`click`, event => {
    event.preventDefault();
    let colorValue = color.value;
    setTimeout(() => {
        localStorage.setItem(`color`, `${colorValue}`);
        chat.style.border = `10px solid ${localStorage.color}`;
    }, 500);
});
// 
let startValueFB;
let endValueFB;
//event listener za vreme
setDate.addEventListener(`click`,event => {
    event.preventDefault();
    let startValue = startDate.value;
    let endValue = endDate.value;
    // validacija
    if(startValue.length == 16 && endValue.length == 16 && startValue < endValue) {
        // konverzija vremena
        let startValueObj = new Date(startValue);
        let endValueObj = new Date(endValue);
        startValueFB = firebase.firestore.Timestamp.fromDate(startValueObj);
        endValueFB = firebase.firestore.Timestamp.fromDate(endValueObj);
        // brisanje poruka
        poruka1.delete();
        // ponovno upisivanje poruka
        chatroom.msgTimer((dokument) => {
            poruka1.templateLI(dokument);
        })
    }
    else {
        alert(`Popuniti pravilno pollja za datume.`)
    }

});

//
console.log(ul.lastChild);
scrollBy(0, 1000);
//
export {chatroom, startValueFB, endValueFB};
