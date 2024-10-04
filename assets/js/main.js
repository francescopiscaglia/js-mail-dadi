// 1. Preparazione
// creo una variabile user_email per la mail dell'utente
let user_email;

// creo una variabile per le email che possono accedere
let authorized_emails;


// 2. Analisi dati
// dichiaro la variabile user_email con un prompt per chiedere all'utente
user_email = prompt("Ciao, inserisci la tua email per accedere al gioco (tutto in minuscolo").toLowerCase();

// stampo la email inserita dall'utente
console.log(user_email);

// dichiaro la lista di email che possono accedere per fare il controllo
authorized_emails = [
    "si@gmail.com", 
    "access@gmail.com", 
    "youcanaccess@gmail.com"
];


// 3. Elaborazione codice
// verifico se la email contiene il carattere @ e che sia inclusa nella lista
if ((user_email.includes("@")) && (authorized_emails.includes(user_email))) {
    // stampo che è valida e può accedere
    console.log("Email valida, puoi accedere al gioco");

    // genero un numero intero casuale da 1 o 6 per l'utente e per il pc
    let user_random_number = Math.floor(Math.random() * 6) + 1;
    let pc_random_number = Math.floor(Math.random() * 6) + 1;

    // stampo i due numeri in console
    console.log(user_random_number, pc_random_number);

    // verifico quale dei due è più grande
    if (user_random_number < pc_random_number) {
        // l'utente ha perso
        alert("Peccato... Hai perso :(");

    } else if (user_random_number > pc_random_number) {
        // l'utente ha vinto
        alert("Congratulazioni! Hai vinto ;)");

    } else {
        // se sono uguali => pareggio
        alert("E' un pareggio :|");
    }

} else if (user_email.includes("@")) { 
    // mail valida ma non è nella lista
    console.log("L'email non è nella lista");

} else { 
    // mail nella lista ma non valida
    alert("Email non valida, riprova. Deve contenere @");
};


// Secondo modo con il ciclo for
