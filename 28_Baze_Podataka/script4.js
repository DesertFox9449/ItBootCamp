/////////////////////////////////////
// Iz kolekcije customers, pročitati sve klijente sortirane po imenu.
/*
db.collection(`customers`)
.get()
.then((snapshot) => {
    console.log(snapshot);
    if(!snapshot.empty){
        let allSnap = snapshot.docs;
        console.log(allSnap);
        allSnap.forEach(doc => {
            let obj = doc.data()
            console.log(obj.name);
            
        });
    }
})
.catch(() => {

});

// Iz kolekcije customers, pročitati sve klijente koji:
// Imaju adresu u Nišu,
db.collection(`customers`)
.where("addresses", "array-contains", "Nis")
.get()
.then((snapshot) => {
    console.log(snapshot);
    if(!snapshot.empty){
        let allSnap = snapshot.docs;
        console.log(allSnap);
        allSnap.forEach(doc => {
            let obj = doc.data()
            console.log(obj.name,obj.addresses);
            
        });
    }
})
.catch(() => {

}); 

// Imaju platu veću ili jednaku od 500
db.collection(`customers`)
.where(`salary`, ">=", 50000) // moj ekvivalent 500
.get()
.then((snapshot) => {
    console.log(snapshot);
    if(!snapshot.empty){
        let allSnap = snapshot.docs;
        console.log(allSnap);
        allSnap.forEach(doc => {
            let obj = doc.data();
            console.log(obj.name,obj.salary);
            
        });
    }
})
.catch(() => {

});

// Imaju platu između 300 i 800,
db.collection(`customers`)
.where(`salary`, "<=", 80000) // moj ekvivalent 800
.where("salary", ">=", 30000) // moj ekvivalent 300
.get()
.then((snapshot) => {
    console.log(snapshot);
    if(!snapshot.empty){
        let allSnap = snapshot.docs;
        console.log(allSnap);
        allSnap.forEach(doc => {
            let obj = doc.data();
            console.log(obj.name,obj.salary);
            
        });
    }
})
.catch(() => {

});

// Imaju platu manju od 900, i imaju 30 godina,

db.collection(`customers`)
.where(`salary`, "<", 90000) // moj ekvivalent 900
.get()
.then((snapshot) => {
    console.log(snapshot);
    if(!snapshot.empty){
        let allSnap = snapshot.docs;
        console.log(allSnap);
        allSnap.forEach(doc => {
            let obj = doc.data();
            if(obj.age < 30) {
                console.log(obj.name,obj.salary);
            }
           
            
        });
    }
})
.catch(() => {

});

// Imaju adresu u Nišu ili Beogradu,
db.collection(`customers`)
.where(`addresses`, "array-contains-any", ["Nis", "Beograd"]) // moj ekvivalent 900
.get()
.then((snapshot) => {
    console.log(snapshot);
    if(!snapshot.empty){
        let allSnap = snapshot.docs;
        console.log(allSnap);
        allSnap.forEach(doc => {
            let obj = doc.data();
            console.log(obj.name,obj.addresses);
            
        });
    }
})
.catch(() => {

});

// Imaju 22, 25 ili 28 godina.


db.collection(`customers`)
.where(`age`, "in", [22, 25, 28]) // moj ekvivalent 900
.get()
.then((snapshot) => {
    console.log(snapshot);
    if(!snapshot.empty){
        let allSnap = snapshot.docs;
        console.log(allSnap);
        allSnap.forEach(doc => {
            let obj = doc.data();
            console.log(obj.name,obj.age);
            
        });
    }
})
.catch(() => {

});

*/

////////////////////////////////////////
// Zadatak 2

// Iz kolekcije tasks, pročitati sve zadatke, sortirane po nazivu.
/*
db.collection(`tasks`)
.orderBy("description")
.get()
.then((snapshot) => {
    console.log(snapshot);
    if(!snapshot.empty){
        let allSnap = snapshot.docs;
        console.log(allSnap);
        allSnap.forEach(doc => {
            let obj = doc.data();
            console.log(obj.description);
            
        });
    }
})
.catch(() => {

});
*/

// Iz kolekcije tasks, pročitati sve zadatke, i koji:
// Su prioritetni,
/*
db.collection(`tasks`)
.where("priority", "==", true)
.get()
.then((snapshot) => {
    console.log(snapshot);
    if(!snapshot.empty){
        let allSnap = snapshot.docs;
        console.log(allSnap);
        allSnap.forEach(doc => {
            let obj = doc.data();
            console.log(obj.description);
            
        });
    }
})
.catch(() => {

});
*/

// Treba da se izvrše u tekućoj godini,

// let date = new Date();

// let tekucaGodina = date.getFullYear();
// console.log(tekucaGodina);
// let startYear = firebase.firestore.Timestamp.fromDate(new Date(tekucaGodina + `-01-01`));
// let endYear = firebase.firestore.Timestamp.fromDate(new Date(tekucaGodina + "-12-31"));


// db.collection(`tasks`)
// .where(`due_date`, `>=`, startYear)
// .where(`due_date`, '<=', endYear)
// .get()
// .then((snapshot) => {
//     console.log(snapshot);
//     if(!snapshot.empty){
//         let allSnap = snapshot.docs;
//         console.log(allSnap);
//         allSnap.forEach(doc => {
//             let obj = doc.data();
//             if(obj.start_date != undefined) {
//                 console.log(obj.title);
                
//             }
            
//             //firebase.firestore.Timestamp.fromDate(new Date());
            
//         });
//     }
// })
// .catch(() => {

// });

// Taskovi koji su zavrseni
// let today = new Date('2022-01-27');
// let todayDay = firebase.firestore.Timestamp.fromDate(new Date(today));
// console.log(todayDay);



// db.collection(`tasks`)
// .where(`due_date`, `<`,todayDay)
// .get()
// .then((snapshot) => {
//     console.log(snapshot);
//     if(!snapshot.empty){
//         let allSnap = snapshot.docs;
//         console.log(allSnap);
//         allSnap.forEach(doc => {
//             let obj = doc.data();
//             console.log(obj.due_date, obj.title);
//             if(obj.due_date != undefined) {
//                 console.log(obj.title);
                
//             }
            
          
            
//         });
//     }
// })
// .catch(() => {

// });

// // koji tek treba da pocnu
// db.collection(`tasks`)
// .where(`start_date`, `>`,todayDay)
// .get()
// .then((snapshot) => {
//     console.log(snapshot);
//     if(!snapshot.empty){
//         let allSnap = snapshot.docs;
//         console.log(allSnap);
//         allSnap.forEach(doc => {
//             let obj = doc.data();
            
//             if(obj.start_date != undefined) {
//                 console.log(obj.title);
                
//             } 
//         });
//     }
// })
// .catch(() => {

// });
/*
////////////////////////////////////
// Iz kolekcije movies, pročitati sve filmove:
db.collection(`movies`)
.get()
.then((snapshot) => {
    console.log(snapshot);
    let allSnap = snapshot.docs;
    console.log(allSnap);
    allSnap.forEach(doc => {
        let obj = doc.data()
        console.log(obj.name);
    });
    
})
.catch(() => {

});

// koje je rezirao George Lucas
db.collection(`movies`)
.where(`firstname`, `==`, `Frank`)
.where(`lastname`, `==`, `Darabont`)
.get()
.then((snapshot) => {
    console.log(snapshot);
    let allSnap = snapshot.docs;
    console.log(allSnap);
    allSnap.forEach(doc => {
        let obj = doc.data()
        
            console.log(obj.name);
        
        
    });
    
})
.catch(() => {

});

// cija ocena je izmedju 5 i 10
db.collection(`movies`)
.where(`rating`, `>=`, 5)
.where(`rating`, `<=`, 10)
.get()
.then((snapshot) => {
    console.log(snapshot);
    let allSnap = snapshot.docs;
    console.log(allSnap);
    allSnap.forEach(doc => {
        let obj = doc.data()
        
            console.log(obj.name);
        
        
    });
    
})
.catch(() => {

});

// ciji je zanr komedija, tragedija, drama
db.collection(`movies`)
.where("genres", "array-contains-any", ["Comedy", "Tragedy", "Drama"])
.get()
.then((snapshot) => {
    console.log(snapshot);
    let allSnap = snapshot.docs;
    console.log(allSnap);
    allSnap.forEach(doc => {
        let obj = doc.data()
        
            console.log(obj.name);
        
        
    });
    
})
.catch(() => {

});
*/
// koji su izasli u 21. veku
// db.collection(`movies`)
// .where("release_year", ">", 2000)
// .get()
// .then((snapshot) => {
//     console.log(snapshot);
//     let allSnap = snapshot.docs;
//     console.log(allSnap);
//     allSnap.forEach(doc => {
//         let obj = doc.data()
        
//             console.log(obj.name);
        
        
//     });
    
// })
// .catch(() => {

// });


/*


// Stefan
// iz kolekcije zdataka zapisati one koji su prioritetni
db.collection(`tasks`)
.where("priority", "==", true)
.get()
.then((snapshot) => {
    console.log(snapshot);
    if(!snapshot.empty){
        let allSnap = snapshot.docs;
        console.log(allSnap);
        allSnap.forEach(doc => {
        let obj = doc.data()
        
            console.log(obj.name);
        
        
    });
    }
    
    
})
.catch(() => {

});

// b) taskovi koji su zavrseni
let now = new Date();
let year = now.getFullYear();
let date1 = new Date(year, 0, 1); // 1. januar tekuce godine
let date2 = new Date(year + 1, 0, 1); // 1. januar naredne godine
let date1Timestamp = firebase.firestore.Timestamp.fromDate(date1);
let date2Timestamp = firebase.firestore.Timestamp.fromDate(date2);

db.collection(`tasks`)
.where("due_date", ">=", date1Timestamp)
.where("due_date", "<=", date2Timestamp)
.get()
.then((snapshot) => {
    console.log(snapshot);
    if(!snapshot.empty){
        let allSnap = snapshot.docs;
        console.log(allSnap);
        allSnap.forEach(doc => {
        let obj = doc.data()
        
            console.log(obj.name);
        
        
    });
    }
    
    
})
.catch(() => {

});

*/

// 
/*
let now = new Date();
let date1Timestamp = firebase.firestore.Timestamp.fromDate(now);

db.collection(`tasks`)
.where("due_date", "<=", date1Timestamp)
.get()
.then((snapshot) => {
    console.log(snapshot);
    if(!snapshot.empty){
        let allSnap = snapshot.docs;
        console.log(allSnap);
        allSnap.forEach(doc => {
        let obj = doc.data()
        
            console.log(obj.name);   
    });
    }
})
.catch(() => {

});

*/

/////////////////////////////////////////////////////////
// Iz kolekcije movies, pročitati sve filmove:
// Koje je režirao Francis Copola,

db.collection(`movies`)
.where("Director.firstname","==","Francis")
.where("Director.lastname","==","Copola")
.get()
.then((snapshot) => {
    console.log(snapshot);
    if(!snapshot.empty){
        let allSnap = snapshot.docs;
        console.log(allSnap);
        allSnap.forEach(doc => {
        let obj = doc.data()
        
            console.log(obj.name);   
    });
    }
})
.catch(() => {

});

///////////////
// Čija je ocena između 5 i 10,

db.collection(`movies`)
.where(`rating`, `>`, 9)
.where(`rating`, `<`, 10)
.get()
.then((snapshot) => {
    console.log(snapshot);
    if(!snapshot.empty){
        let allSnap = snapshot.docs;
        console.log(allSnap);
        allSnap.forEach(doc => {
        let obj = doc.data()
        
            console.log(obj.name);   
    });
    }
})
.catch(() => {

});

// Koji su izašli u 21. veku.

db.collection(`movies`)
.where(`release_year`, `>`, 2000)
.get()
.then((snapshot) => {
    console.log(snapshot);
    if(!snapshot.empty){
        let allSnap = snapshot.docs;
        console.log(allSnap);
        allSnap.forEach(doc => {
        let obj = doc.data()
        
            console.log(obj.name);   
    });
    }
})
.catch(() => {

});

// Kojima je žanr komedija, tragedija ili drama

db.collection(`movies`)
.where(`genres`, `array-contains-any`, ["Comedy","Tragedy","Drama"])
.get()
.then((snapshot) => {
    console.log(snapshot);
    if(!snapshot.empty){
        let allSnap = snapshot.docs;
        console.log(allSnap);
        allSnap.forEach(doc => {
        let obj = doc.data()
        
            console.log(obj.name);   
    });
    }
})
.catch(() => {

});

// Prikazati sve informacije o najbolje rangiranom filmu.
db.collection(`movies`)
.orderBy(`rating`,`desc`)
.limit(1)
.get()
.then((snapshot) => {
    console.log(snapshot);
    if(!snapshot.empty){
        let allSnap = snapshot.docs;
        console.log(allSnap);
        allSnap.forEach(doc => {
        let obj = doc.data()
        
            console.log(obj);   
    });
    }
})
.catch(() => {

});

// Prikazati sve informacije o najslabije rangiranoj `Crime`.

db.collection(`movies`)
.where(`genres`, `array-contains`, `Crime`)
.orderBy(`rating`)
.limit(1)
.get()
.then((snapshot) => {
    console.log(snapshot);
    if(!snapshot.empty){
        let allSnap = snapshot.docs;
        console.log(allSnap);
        allSnap.forEach(doc => {
            
        let obj = doc.data()
            console.log(obj);   
    });
    }
})
.catch(() => {

});