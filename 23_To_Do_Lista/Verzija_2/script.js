let nizLi = document.querySelectorAll(`li`);

nizLi.forEach(li => {
    // 1. nacin
    li.addEventListener(`click`, () => {
        if(li.style.textDecoration == `line-through`) {
            li.style.textDecoration = `none`;
        }
        else {
            li.style.textDecoration = `line-through`;
        }
        
    })
    // 2. nacin
    li.classList.toggle(`lineThrough`);
});



let newObaveza = document.getElementById(`obaveza`);
// let btnSub = document.getElementById(`sub`);
let ul = document.querySelector(`ul`);


newObaveza.addEventListener(`keyup`, (e) => {
    // keyup - pretisnuto i pusteno
    // keypress - pretisnut taster
    e.preventDefault();
    // console.log(e.key, e.keyCode);
    if(e.keyCode == 13) { // kljuc za Enter je 13
            let newText = newObaveza.value;
        let newLi = document.createElement(`li`);
        // console.log(newText);
        newText.trim();
        if(newText.length > 0) {
            let newNode = document.createTextNode(`${newText}`);
            newLi.appendChild(newNode);
            console.log(newLi);
            console.log(ul);
            /////////////////////////
            // povucemo cekovani input
            let radio = document.querySelector(`input[type="radio"]:checked`); 
            console.log(radio);
            //  postavimo novi uslov
            
            if(radio.value == `pocetak`) {
                // dodatni element za       insertBefore
                // mora da se definise ovde da bi zavrsio na vrhu
                let liFirst = document.querySelector(`ul li:nth-child(1)`); 
                ul.insertBefore(newLi, liFirst);
                // prepand --- dodaje na pocetak
            }
            else{
                ul.append(newLi);
            }
            
        }
        else {
            alert(`Morate popuniti polje!`)
        }
        newObaveza.value = "";
    }
    
    
});

// nizLi.forEach(li => {
//     li.remove();
//     // ne radi
// });

ul.addEventListener(`click`, (e) => {
    //console.log(`Kliknuto na ul`);
    //console.log(e.target); // vraca ceo tag
    console.log(e.target.tagName); // vraca samo ime taga na koji je kliknuto
    if(e.target.tagName == `LI`) {
        e.target.remove();
    }
});

let tekst = `     neki    tekst`;
console.log(tekst);
console.log(tekst.trim());

tekst = `       `;
console.log(tekst);
console.log(tekst.trim());
