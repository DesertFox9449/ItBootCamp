import { Chatroom } from "./chat.js";


let chat1 = new Chatroom(`JS`, `Stefan`);
console.log(chat1);

let chat2 = new Chatroom(`general`, `Jelena`);
let chat3 = new Chatroom(`tests`, `Miljan`);


let chatroom1 = new Chatroom(`js`, `Pera`);
console.log(chatroom1);

// test geteri
console.log(chatroom1.username);
console.log(chatroom1.room);

// test seteri
// username
chatroom1.username = `Dusan`;
console.log(chatroom1.username);

// room
chatroom1.room = `general`;
console.log(chatroom1.room);



// chat3.addChat(`Imamo HR trening u sredu!`)
// .then(() => console.log(`Sve je proslo kako treba.`))
// .catch((err) => console.log(`Doslo je do greske. ${err}`));

// chatroom1.getChats((ocekivani_argument) => {
//     console.log(ocekivani_argument);
// })
