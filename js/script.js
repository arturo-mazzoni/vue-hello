// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// Bonus: Aggiungere un’immagine presa anch’essa da un data assieme al valore alt dell'attributo.
// Poi aggiungete all'immagine una classe sempre presa dal data.

var app = new Vue({
  el: "#container",
  data: {
    message: "Rick and Morty!",
    src: "https://www.cinefacts.it/foto/h!rick_and_morty_articolo_special_cover_cinefacts.jpg",
    aggiunta: "rick_and_morty"
  }
});
