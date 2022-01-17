// Objekat
let blog = {
    title: `Moj blog`,
    content: `Tekst...`,
    author: `Pera`,
    number: 18,
//  osobine - vrednost osobine
//  property - vrednost    
};

console.log(blog);
console.log(typeof blog);

///////////////////////////////////////

let blog1 = {
    title: `HTML`,
    content: `Ovo je blog o osnovnim HTML tagovima`,
    author: `Jelena`,
};

console.log(blog1);
console.log(typeof blog1);

// naslov propertija
console.log(blog1.title);    // title: HTML
// moze i ovako
console.log(blog1[`title`]); // title: HTML

// izmene propertija
blog1.title = `Osnove HTML-a`; // 1. nacin
console.log(blog1.title);

blog1[`author`] = `Jelena Matejic`; //
console.log(blog1.author);
// ako missspelujemo on dodaje to kao novi deo objekta

/////////////////////////////////////

let user = {
    username: `JM`,
    age: 27,
    blogs: [`If naredba grananja`, `WHILE petlja`, `FOR petlja`]
};

console.log(user);
console.log(user.blogs); // ispisuje elemente array-a abecednim redom
console.log(user.blogs[0]);

let nasloviBlogova = user.blogs;
for (let i = 0; i < nasloviBlogova.length; i++) {
    document.body.innerHTML += `<h3>${nasloviBlogova[i]}</h3>`;
}

for (let i = 0; i < user.blogs.length; i++) {
    document.body.innerHTML += `<h3>${user.blogs[i]}</h3>`;
}


user = {
    username: `JM`,
    age: 27,
    blogs: [`If naredba grananja`, `WHILE petlja`, `FOR petlja`],
    login: function() {                  // ne moze arrow funkcija
        console.log(`Ulogovani ste`);
        // kad je funkcija u objektu zove se METHOD
    },
    logout: function() {   // method - metod
        console.log(`Izlogovani ste.`);
    },
    logBlogs: function() {
        console.log(this.blogs); // kada pristupamo propertiju koji je unutar objekta
        // ne user.blogs
        console.log(this);           // ispisuje ceo objekat
        this.blogs.forEach(blog => { // ispisije pojedinacno elemente array-a
            console.log(blog);
        })
    }
};

// poziv method - a
user.login();
user.logout();

// Poziv metoda koji sadrzi u sebi poziv nekog propertija
user.logBlogs();

// this
console.log(this); // sve je globalni objekat
                   // radimo sledece nedelje



