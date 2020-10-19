var nome;
var cognome;
var colore;
var password;

// nome = prompt('Inserisci il tuo nome:');
// cognome = prompt('Inserisci il tuo cognome:');
// colore = prompt('Inserisci il tuo colore preferito:');
//
//


document.getElementById('pswGen').onclick = function changeContent() {
  nome = document.getElementById('nome').value;
  cognome = document.getElementById('cognome').value;
  colore = document.getElementById('colore').value;

  password = nome + cognome + colore + '19';

  document.getElementById('myPassword').innerHTML = 'La password generata è: ' + password;

}
