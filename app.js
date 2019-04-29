// Identificando o clique
$('nav a').click(function(e){
  e.preventDefault();
  var id = $(this).attr('href'),
      targetOffset = $(id).offset().top
      //, menuHeight = $('nav').innerHeight()
      ;

  $('html, body').animate({
    scrollTop: targetOffset //- menuHeight
  }, 500);
});
// Verificando o item clicado

// Verificando a distância até o alvo

// Animar o scroll até o alvo
