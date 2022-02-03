let btnStart = document.querySelector(`#start`);
let btnEnd = document.getElementById(`end`);
let ispis = document.getElementById(`ispis`);
console.log(ispis, btnEnd);
let counter = null;
let i = 1;
btnStart.addEventListener(`click`, () => {
    
    console.log(`start`);
    if (counter === null) {
        counter = setInterval(() => {
            ispis.value = i++;
    }, 1000);
    }
    
});

btnEnd.addEventListener(`click`, () => {
    console.log(`end`);
    clearInterval(counter);
    counter = null;
})

btnEnd.addEventListener(`dblclick`, () => {
    console.log(`kraj`);
    clearInterval(counter);
    counter = null;
    i = 1;
})

