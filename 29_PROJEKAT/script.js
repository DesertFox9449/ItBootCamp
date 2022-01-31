import { Chatroom } from "./chat.js";
// export default db;

let chat1 = new Chatroom(`JS`, `Stefan`);
console.log(chat1);

let chat2 = new Chatroom(`general`, `Jelena`, db);
let chat3 = new Chatroom(`tests`, `Miljan`, db);

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