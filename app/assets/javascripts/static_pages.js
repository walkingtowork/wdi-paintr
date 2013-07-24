$(document).ready(function(){
  var add_color = function(){
    var box = $('<div>');
    box.addClass('box');

    var color = $('#color').val();
    box.css('background-color', color);

    $('#colors').prepend(box);

    $('color').val('').focus();
  };

  var set_color = function(){
    var box = $(this);
    var color = box.css('background-color');

    $('#selected_color').css('background-color', color);
  };

  var paint = function(){
    var paint_box = $(this);
    var color = $('#selected_color').css('background-color');

    paint_box.css('background-color', color);
  };

  var add_picture = function(){
    var box = $('<div>');
    box.addClass('box');

    var image = $('#picture').val();
    box.css('background-image', ('url('+image+')'));
    box.css('background-size', 'cover');

    $('#pictures').prepend(box);
    $('#picture').val('');
  };

  var set_background = function(){
    var box = $(this);
    image = box.css('background-image');
    console.log(image);
    $('#canvas').css('background-image', image);
    $('#canvas').css('background-size', 'cover');
  };

  $('#add_color').on('click', add_color);
  $('#colors').on('click', '.box', set_color);
  //attached the on method to an element that already existed on the page, and the box element is added to it
  //this circumvents the issue of boxes loading before the click
  $('.paint_box').on('mouseover', paint);
  $('#add_picture').on('click', add_picture);
  $("#pictures").on('click', '.box', set_background);
});