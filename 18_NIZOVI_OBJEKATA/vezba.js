let blog1 = {
    title: `Osnovni HTML tagovi!`,
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

let arrBlogs = [blog1, blog2, blog3]; // array

// 1. Napraviti arrow funkciju kojoj se prosledjuje niz objekata a ona vraca ukupan broj lajkova.

let sumLikes = arr => {
    let suma = 0;
    // 1. nacin
    // arr.forEach(blog => {
    //     suma += blog.likes;
    // });
    // return suma;
    // 2. nacin
    for (let i = 0; i < arr.length; i++) {
        // arr[i] je objekat
        // arr[i].likes je broj lajkova objekta arr[i]
        suma += arr[i].likes;
    }
    return suma;
}

console.log(`Ukupan broj lajkova je: ${sumLikes(arrBlogs)}`);

// Lajkovi iz 1. i 3. bloga
let sum1i3 = arrBlogs[0].likes + arrBlogs[2].likes;
console.log(sum1i3);
// drugi nacin

sum1i3 = arrBlogs[0][`likes`] + arrBlogs[2][`likes`];
console.log(sum1i3);

// 2. Zadatak
// Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona vraća prosečan broj lajkova

let prosLikes = niz => {
    let suma = 0;
    niz.forEach(element => {
        suma += element.likes;
    });
    let avrg = suma / niz.length;
    console.log(avrg);
}
prosLikes(arrBlogs);



// 3. Zadatak
// Napravi arrow funkciju kojoj se prosledjuje niz objekata, a ona ispisuje sve one naslove blogova koji imaju vise pozitivnih nego negativnih ocena

let moreLikes = arr => {
    arr.forEach(elem => {
        if (elem.likes > elem.dislikes) {
            console.log(elem.title);
        }
        
    });

}
console.log(`Blogovi sa vise lajkova nego dislajkova.`);
moreLikes(arrBlogs);

// 4. Zadatak
// Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona ispisuje sve one naslove blogova koji imaju najmanje duplo više pozitivnih nego negativnih ocena

let duploLikes = niz => {
    niz.forEach(element => {
        if (element.likes >= element.dislikes * 2) {
            console.log(element.title);
        }
    });
}
duploLikes(arrBlogs);
// 5. Zadatak
// Napisati arrow funkciju kojoj se prosleđuje niz objekata a ona ispisuje sve naslove koji se završavaju uzvičnikom

let uzvicnik = niz => {
    niz.forEach(element => {
        if (element.title.slice(-1) == `!`) {
            console.log(element.title);
        }
        
    });
}
uzvicnik(arrBlogs);


