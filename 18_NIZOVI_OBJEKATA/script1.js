let blog1 = {
    title: `Osnovni HTML tagovi`,
    likes: 30,
    dislikes: 9
};

let blog2 = {
    title: `Osnovni CSS selektori`,
    likes: 70,
    dislikes: 5
};

let blog3 = {
    title: `Napredni CSS selektori`,
    likes: 50,
    dislikes: 60
};

let blog4 = {
    title: `Uvod u JS`,
    likes: 150,
    dislikes: 50
};
let blog5 = {
    title: `IF naredba grananja`,
    likes: 250,
    dislikes: 160
};
//////////////////////////////////////
let user1 = {
    username: `JelenaMatejic`,
    age: 27,
    blogs: [blog1, blog2, blog3]
};

let user2 = {
    username: `StefanStanimirovic`,
    age: 32,
    blogs: [blog4, blog5]
}

/////////////////////////////////////
// Ispis
console.log(user1.username);

// Podaci o prvom blogu korisnika 1
console.log(user1.blogs[0]);

// Naslov prvog bloga korsinika 1
console.log(user1.blogs[0].title);


// Zadatak 1
//Napraviti niz korisnika gde svaki od korisnika sadrži niz blogova. Svaki blog u ovom nizu je objekat.
// Niz korisnika
let users = [user1, user2];
console.log(users);

// Ko su autori blogova?

users.forEach(u => {
    console.log(u.username);
});

// Ispisati sve naslove blogova koje su napisali autori iz niza users
    users.forEach(u => {
        // u je jedan user iz niza
        let blogsU = u.blogs; // svi blogovi tekuceg korisnika (u)
        blogsU.forEach(b => {
        console.log(b.title);
    });
});

// Zadatak 2
// Ispisati imena onih autora koji imaju ispod 30 godina
console.log(`Ispisati imena onih autora koji imaju ispod 30 godina`);
users.forEach(u => {
    if (u.age < 30) {
        console.log(u.username);
    }
});

// Zadatak 3
// Ispisati naslove onih blogova koji imaju više od 50 lajkova
console.log(`Ispisati naslove onih blogova koji imaju više od 50 lajkova`);

users.forEach(u => {
    let blogsU = u.blogs; // niz blogova tekuceg korisnika
    blogsU.forEach(b => {
        if (b.likes > 50) {
            console.log(b.title);
        }
    });

});

// Zadatak 4
console.log(`Ispisati sve blogove autora čiji je username StefanStanimirovic`);

users.forEach(u => {
    if(u.username == `StefanStanimirovic`) {
        u.blogs.forEach(b => {
            console.log(b.title);
        });
    }
});

// Zadatak 5
console.log(`Ispisati imena onih autora koji imaju ukupno više od 100 lajkova za blogove koje su napisali`);

users.forEach(u => {
    let suma1 = 0;
    let suma0 = 0;
    if (u[0]) {
    
    u.blogs.forEach(b => {
        suma0 +=b.likes;
    });
}
    else {
        
        u.blogs.forEach(b => {
            suma1 +=b.likes;
        });
    }
   if (suma0 > 100) {
       console.log(u.username);
   }
   if (suma1 > 100) {
    console.log(u.username);
}
});

// 6. Zadatak

// Zadatak 24 Nizovi

let a = [1, 4, 7, -5];
let b = [6, 6, 0, 9];

let zad24 = (a, b) => {
    let c = [];
    for (let i = 0; i < a.length; i++)
    {
        //c[?] = a[i] // c[0] = a[0], c[2] = a[1], c[4] = a[2], c[6] = a[3];
        //c[?] = b[i] // c[1] = b[0], c[3] = b[1], c[5] = b[2], c[7] = b[3];

        c[2 * i] = a[i];       // c[0] = a[0], c[2] = a[1], c[4] = a[2], c[6] = a[3];
        c[ 2 * i + 1] = b [i]; // c[1] = b[0], c[3] = b[1], c[5] = b[2], c[7] = b[3];

    }
    return c;
    // Drugi nacin
    for (let i = 0; i < a.length; i++) {
        c.push(a[i]);
        c.push(b[i]);
    }



}
// kad nisu iste duzine
let zad24 = (a, b) => {
    let c = [];
    let m = Math.min(a.length, b.length);
    for (let i = 0; i < a.length; i++) {
        c.push(a[i]);
        c.push(b[i]);
    }
    for (let i = 0; i < a.length; i++) {
        c.push(a[i]);
        
    }
    for (let i = 0; i < b.length; i++) {
        c.push(b[i]);
        
    }
    return c;
}