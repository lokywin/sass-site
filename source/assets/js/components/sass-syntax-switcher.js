$(function() {
  $( "#topic-2" ).tabs();
  $( "#topic-3" ).tabs();
  $( "#topic-5" ).tabs();
  $( "#topic-6" ).tabs();
  $( "#topic-7" ).tabs();
  $( "#topic-8" ).tabs();

  // Hover states on the static widgets
  $( "#dialog-link, #icons li" ).hover(
    function() {
      $( this ).addClass( "ui-state-hover" );
    },
    function() {
      $( this ).removeClass( "ui-state-hover" );
    }
  );
});

$('[data-toggle="#acl-panel"]').click(function() {
  $('.acl-panel').addClass('is-visible');
  $('.acl-panel').after('<div class="overlay-parents"></div>');
});

$('.panel__close').click(function() {
  $('.acl-panel').removeClass('is-open');
  $('.acl-panel-overlay').toggleClass('is-visible');
});
