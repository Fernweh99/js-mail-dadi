/*
Generare un numero random da 1 a 6, sia per il giocatore sia per
il computer. Stabilisci il vincitore, in base a chi fa il
punteggio più alto e stampa  in console il risultato
(ossia se ha vinto il computer o il player)
 */

// Recupero gli elementi dal DOM
// bottoni
const buttonPlay = document.getElementById("play");
// Paragrafi
const divNumberPlayer = document.getElementById("number-player");
const divNumberComputer = document.getElementById("number-computer");
const phGameResult = document.getElementById("game-result");
const phWinsPlayer = document.getElementById("wins-player");
const phWinsComputer = document.getElementById("wins-computer");

let winsPlayer = 0;
let winsComputer = 0;
let targetToWin = "";
buttonPlay.addEventListener("click", function(){
  
  //Dichiaro 2 costanti con numeri random da 1 a 6
  const randomNumberPlayer = (Math.floor(Math.random() * 6)) + 1;
  const randomNumberComputer = (Math.floor(Math.random() * 6)) + 1;
  buttonPlay.innerText = "GIOCA";

  if (targetToWin == "") {
    targetToWin = prompt("Decidi il punteggio a cui arrivare per terminare la partita");
  }

  //Creo una variabile già definita nel caso in cui il giocatore non dovesse vincere o pareggiare
  let result = "Ha vinto il computer!";
  
  //Eseguo un controllo su chi ha vinto e se necessario cambio il risultato
  if (randomNumberPlayer > randomNumberComputer) {
    result = "Ha vinto il giocatore!";
    winsPlayer += 1;
  }
  else if (randomNumberPlayer === randomNumberComputer) {
    result = "Avete pareggiato!";
  }
  else {
    winsComputer += 1;
  }

  //Stampo i numeri del giocatore e del computer e mando il risultato su finestra
  divNumberPlayer.innerHTML = `<img src="img/d${randomNumberPlayer}.gif" alt="dado">`;
  divNumberComputer.innerHTML = `<img src="img/d${randomNumberComputer}.gif" alt="dado">`;
  phWinsPlayer.innerText = winsPlayer;
  phWinsComputer.innerText = winsComputer;
  phGameResult.innerHTML = result;
  
  if ((winsComputer == targetToWin) || (winsPlayer == targetToWin)) {
    if (winsComputer > winsPlayer) {
      result = "IL VINCITORE DELLA PARTITA E' IL COMPUTER !"
    }
    else {
      result = "IL VINCITORE DELLA PARTITA E' IL PLAYER !"
    }
    winsComputer = 0;
    winsPlayer = 0;
    targetToWin = "";
    phGameResult.innerHTML = `<h3>${result}</h3>`;
    buttonPlay.innerText = "RIGIOCA";
  }
})
  