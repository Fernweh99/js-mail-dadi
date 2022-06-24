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
const phNumberPlayer = document.getElementById("number-player");
const phNumberComputer = document.getElementById("number-computer");
const phGameResult = document.getElementById("game-result");

buttonPlay.addEventListener("click", function(){

  //Dichiaro 2 costanti con numeri random da 1 a 6
  const randomNumberPlayer = (Math.floor(Math.random() * 6)) + 1;
  const randomNumberComputer = (Math.floor(Math.random() * 6)) + 1;
  
  //Creo una variabile già definita nel caso in cui il giocatore non dovesse vincere o pareggiare
  let result = "Ha vinto il computer!";
  
  //Eseguo un controllo su chi ha vinto e se necessario cambio il risultato
  if (randomNumberPlayer > randomNumberComputer) {
    result = "Ha vinto il giocatore!";
  }
  else if (randomNumberPlayer === randomNumberComputer) {
    result = "Avete pareggiato!";
  }
  
  //Stampo i numeri del giocatore e del computer e mando il risultato su finestra
  phNumberPlayer.innerText = randomNumberPlayer;
  phNumberComputer.innerText = randomNumberComputer;
  phGameResult.innerText = result;

  
})
  