/*
Crea (inventa) una lista di inidirizzi mail autorizzati.
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa in console un messaggio appropriato sull’esito del controllo.
("Benvenuto" se la mail è nella lista, "Spiacenti" se non lo è);
*/

// Recupero gli elementi dal DOM
// Input
const inputMail = document.getElementById("email");
// Bottoni
const buttonLogin = document.getElementById("login");
// Paragrafi
const phmessage = document.getElementById("message");

//Creo l'array con la lista delle mail valide
const validMails = ["pinko@live.it", "daniele@live.it", "dinamutan@live.it", "twd@live.it", "mike@live.it",];

// Creo l'evento al click del bottone per la verifica
buttonLogin.addEventListener("click", function(){

  const mail = inputMail.value;

  //Creo la variabile message già definita nel caso l'email non risultasse corretta
  let message = "Spiacenti" 
  
  //Creo un ciclo for per verificare se l'email inputata è corretta
  for (i=0; i<validMails.length; i++) {
    if (validMails[i] === mail) {
      message = "Benvenuto"
    }
  }

  // Stampo in pagina il messaggio con l'esito
  phmessage.innerText = message;
})
