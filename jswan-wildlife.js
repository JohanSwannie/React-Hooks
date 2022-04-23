// Code to toggle for overlay textfor te middle card on the summary page
//
$('.info__icon').click(function() {
  $('.original__information').toggleClass('overlayText');
  $('.more__information').toggleClass('triggerInformation');
  $('.card2').toggleClass('card2BgColor');
  $('.general').toggleClass('card2BgColor');
});

// Code to provide for manual navigation of slides on the Home Page
// Remove classLists for animation perfomance and display from buttons not clicked / chosen

function removeProperties() {
  $('.anim1_footage').removeClass('perform_animation');
  $('.anim2_footage').removeClass('perform_animation');
  $('.anim3_footage').removeClass('perform_animation');
  $('.anim4_footage').removeClass('perform_animation');
  $('.anim5_footage').removeClass('perform_only');
  $('.anim1_footage').css("display", "none");
  $('.anim2_footage').css("display", "none");
  $('.anim3_footage').css("display", "none");
  $('.anim4_footage').css("display", "none");
  $('.anim5_footage').css("display", "none");
  let video;
  $(".video").each(function() {
    video = $(this).attr('src');
    $(this).attr('src');
    $(this).attr('src', video);
  });
}

// Code for click events on buttons on Home Page for manual navigation of slides
// Catering for all 5 buttons

// Check if Button One is Clicked
//


$('#sBtn1').click(function() {
  removeProperties();
  setTimeout(() => {
    $('.anim1_footage').addClass('perform_animation');
    $('.anim1_footage').css("display", "block");
  }, 200);
});

// Check if Button Two is Clicked

$('#sBtn2').click(function() {
  removeProperties();
  setTimeout(() => {
    $('.anim2_footage').addClass('perform_animation');
    $('.anim2_footage').css("display", "block");
  }, 200);
  $('#video5').trigger('play');
  $('#video5').trigger('pause');
});

$('#sBtn3').click(function() {
  removeProperties();
  setTimeout(() => {
    $('.anim3_footage').addClass('perform_only');
    $('.anim3_footage').css("display", "block");
  }, 200);
});

// Check if Button Four is Clicked

$('#sBtn4').click(function() {
  removeProperties();
  setTimeout(() => {
    $('.anim4_footage').addClass('perform_animation');
    $('.anim4_footage').css("display", "block");
  }, 200);
});

// Check if Button Five is Clicked

$('#sBtn5').click(function() {
  removeProperties();
  setTimeout(() => {
    $('.anim5_footage').addClass('perform_animation');
    $('.anim5_footage').css("display", "block");
  }, 200);
});
