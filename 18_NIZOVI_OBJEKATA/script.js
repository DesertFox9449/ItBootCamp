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

let arrBlogs = [blog1, blog2, blog3]; // array
console.log(arrBlogs);

arrBlogs.forEach( objekatBlog => {
    console.log(objekatBlog);
});

arrBlogs.forEach( objekatBlog => {
    document.body.innerHTML += `<h3>${objekatBlog.title}</h3>`;
});

arrBlogs.forEach( objekatBlog => {
    document.body.innerHTML += `<h3>${objekatBlog.title}</h3>`;
    document.body.innerHTML += `<p>Likes: ${objekatBlog.title}</p>`;
    document.body.innerHTML += `<p>Dislikes: ${objekatBlog.title}</p>`;
});

// for petlja
for(let i = 0; i < arrBlogs.length; i++) {
    console.log(arrBlogs[i].title); //
}

// Promena vrednosti elementa
blog3.title = `Napredni HTML tagovi`;
console.log(blog3.title);

arrBlogs[2].title = `HTML5 tagovi`;
console.log(arrBlogs[2].title);


//////////////////////////////////////////

