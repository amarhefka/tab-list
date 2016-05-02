$(document).ready(function() {
  console.log('ready!');
});

$('[role="tab"]').on('click', function(e) {
  $('[role="tabpanel"]').hide();
  $('[role="tab"]').attr({
    'aria-selected': 'false',
    'tabindex': '-1'
  });
  $(this).attr('tabindex', '0');
  var id = $(this).attr('aria-controls');
  $('#'+id).show();
  $(this).attr('aria-selected', 'true');
  e.preventDefault();
});

$('[role="tab"]').on('keydown', function(e) {
  var newTab;
  switch (e.keyCode) {
    case 37:
      newTab = $(this).parents('li').prev().children('a');
      break;
    case 38:
      newTab = $(this).parents('li').prev().children('a');
      break;
    case 39:
      newTab = $(this).parents('li').next().children('a');
      break;
    case 40:
      newTab = $(this).parents('li').next().children('a');
      break;
  }
  if (newTab.length) {
    var originalTab = $(this);
    newTab.attr({
        'aria-selected': true, 
        'tabindex': null
    });
    originalTab.attr({
        'aria-selected': false, 
        'tabindex': '-1'
    });
    var id = newTab.attr('aria-controls');
    $('[role="tabpanel"]').hide();
    $('#'+id).show();   
    newTab.focus();
    e.preventDefault();
  }
});
