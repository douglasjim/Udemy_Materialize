//JS DO PROJETO FINAL ULTIMA SECAO

var $doc = $('html, body');
$('.menu-link').click(function() {
  $doc.animate({
    scrollTop: $( $.attr(this, 'href') ).offset().top
  }, 1000);
  return false;
});

$('.button-collapse').sideNav({
      menuWidth: 290, // Default 300 or...
      edge: 'left', // horizontal origin
      closeOnClick: true, 
      draggable: true
    }
  );