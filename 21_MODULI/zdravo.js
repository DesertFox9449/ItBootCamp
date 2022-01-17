function ispis(poruka) {
    console.log(poruka);
}

function zdravo(ime) {
    console.log(`Zdravo ${ime}!`);
}

// export let ime = `Aleksandar`;
let ime = `Aleksandar`;
// export moze da se pise i direktno

export {zdravo, ime}; 

// navodime stvari koje exportujemo
// nema zagrade za funkciju u exportu
// moze da ima neogranceno mnogo elemenata 