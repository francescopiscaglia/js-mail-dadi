// 1. Preparazione
// creo una variabile user_email per la mail dell'utente
let user_email;


// 2. Analisi dati
// dichiaro la variabile user_email con un prompt per chiedere all'utente
user_email = prompt("Ciao, inserisci la tua email per accedere al gioco");

// stampo la email inserita dall'utente
console.log(user_email);

// creo una lista di email che possono accedere per fare il controllo
let verify_email = ["si@gmail.com", "access@gmail.com"];

// 3. Elaborazione codice
// verifico se user_email è nella lista che può accedere al gioco
if (verify_email.includes(user_email)) {
    // stampo il messaggio che può accedere
    console.log("Puoi accedere al gioco");

    // altrimenti non può accedere
} else {
    // stampo il messaggio che non può accedere al gioco
    console.log("Non puoi accedere al gioco");
}


// 4. Output