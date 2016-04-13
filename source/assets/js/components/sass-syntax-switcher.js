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
  $('.acl-panel').addClass('is-opened');
  $('.acl-panel').after('<div class="backdrop"></div>');
});

$('.panel__close').click(function() {
  $('.acl-panel').removeClass('is-open');
  $('.parent').removeClass('is-open');
});
