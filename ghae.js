function countText() {
  var elemento = document.querySelector('.texto');
  var conteudo = elemento.textContent || elemento.innerText; 
  alert(conteudo.length);
  document.getElementById('words').innerText = conteudo.length == 0 ? 0 : conteudo.split(/\s+/).length;
}
