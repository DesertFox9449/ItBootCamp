let ul = document.querySelector(`ul`);
let form = document.querySelector(`form`)

/*
db.collection(`tasks`)
.orderBy(`start_date`, `desc`)
.get()
.then((snapshot) => {
    if(!snapshot.empty){
        snapshot.docs.forEach(doc => {
            let obj = doc.data();
            let li = document.createElement(`li`);
            li.innerHTML = `${obj.title} (${obj.start_date.toDate()}) [${obj.description}]`;
            ul.appendChild(li);
        });

    }
})
.catch(err => {
    console.log(`Greska: ${err}`);
});
*/

form.addEventListener(`submit`, function(event) {
    event.preventDefault();
    let title = this.title.value; // this umesto form
    let start_date = this.start_date.value;
    let due_date = this.due_date.value;
    // let priority = false;
    // if(this.priority.checked){
    //     priority = true;
    // }
    let priority = this.priority.checked;
    // description je text area element
    let description = this.description.value;
    // console.log(title, start_date, due_date, priority, description);
    
    // da formatiramo data u tajm object
    // posle u Timestamp
    let start_date_obj = new Date(start_date);
    let due_date_obj = new Date(due_date);

    let start_date_ts = firebase.firestore.Timestamp.fromDate(start_date_obj);
    let due_date_ts = firebase.firestore.Timestamp.fromDate(due_date_obj);

    let obj = {
        title: title,
        start_date: start_date_ts,
        due_date: due_date_ts,
        priority: priority,
        description: description
    };

    db.collection(`tasks`)
    .add(obj)
    .then(() => {
        console.log(`Uspesno dodat novi zadatak`);
    })
    .catch((err) => {
        console.log(`Greska prilikom dodavanja zadatka ${err}`);
    });

});

db.collection(`tasks`)
// cim dodje do neke promene u kolekciji tasks
.onSnapshot(snapshot => {
    let changes = snapshot.docChanges();
    console.log(changes);
    changes.forEach(change => {
        let type = change.type;
        let doc = change.doc;
        let id = doc.id;
        if(type == "added") {
            let obj = doc.data();
            let li = document.createElement(`li`);
            
            // da dodelimo id
            li.id = id;
            li.innerHTML = `${obj.title} (${obj.start_date.toDate()}) [${obj.description}]`;
            ul.appendChild(li);

            // button
            let button = document.createElement(`button`);
            //
            button.innerHTML = "Delete task";
            li.appendChild(button);
        
        }
        else if(type == "removed") {
            let li = document.getElementById(id);
            li.remove();
        }
    });
    
}); 

ul.addEventListener(`click`, function(event) {
    // console.log(event.target.tagName);
    if(event.target.tagName === "BUTTON"){
        let ok = confirm(`Do you wanna delete?`)
        if(ok == true){
            let li = event.target.parentElement;
            let id = li.id;
            db.collection(`tasks`)
            .doc(id)
            .delete()
            .then(() => {
                alert(`Uspesno obrisan zadatak.`);
            })
            .catch((err) => {
                alert(`Greska prilikom brisanja zadatka`);
            });
        }
        
    }
})

