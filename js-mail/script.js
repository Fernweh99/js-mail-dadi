/*
Crea (inventa) una lista di inidirizzi mail autorizzati.
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa in console un messaggio appropriato sull’esito del controllo.
("Benvenuto" se la mail è nella lista, "Spiacenti" se non lo è);
*/

//Creo l'array con la lista delle mail valide
const validMails = ["pinko@live.it", "daniele@live.it", "dinamutan@live.it", "twd@live.it", "mike@live.it",];

//Creo una const con l'input mail da parte dell'utente per accedere
const inputMail = prompt("Inserisci l'email per accedere");

//Creo la variabile message già definita nel caso l'email non risultasse corretta
let message = "Spiacenti" 

//Creo un ciclo for per verificare se l'email inputata è corretta
for (i=0; i<validMails.length; i++) {
  if (validMails[i] === inputMail) {
    message = "Benvenuto"
  }
}

// Mando a schermo il messaggio con l'esito
alert(message);
