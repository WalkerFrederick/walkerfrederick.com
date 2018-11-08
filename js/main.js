let header = $('header');
let innerheader = $('.header');

header.css('height', window.innerHeight);
innerheader.css('height', window.innerHeight);
$('.content').css('top', window.innerHeight - 3);

let menuClick = function () {
  let menu = $('.links-list');
  if (menu.css('display') === 'none') {
    menu.css('display', 'block');
    menu.css('width', '50%');
    setTimeout(() => {},1000);
    $('#menu-button').css('display', 'none');
    setTimeout(() => {$('#menu-exit').css('display', 'block');},100);
    menu.css('height',window.innerHeight);
  }
  else {
    $('#menu-exit').css('display', 'none');
    menu.css('width', '0%');
    setTimeout(() => {menu.css('display', 'none'); },1000);
    setTimeout(() => {$('#menu-button').css('display', 'block');},700);
  }
}

function revertDesktop(x) {
  if (x.matches) { // If media query matches

    $('.links-list').css({'display':'flex','width':'100%'});
    $('#menu-button').css('display', 'none');
    $('.social-text').addClass('hidden');
    $('.social-icon').removeClass('hidden');

  }
  else {
    $('.links-list').css({'display':'none','width':'0%'});
    $('#menu-button').css('display', 'block');
    $('.social-icon').addClass('hidden');
    $('.social-text').removeClass('hidden');
  }
}

let x = window.matchMedia("(min-width: 900px)")
revertDesktop(x); // Call listener function at run time
x.addListener(revertDesktop); // Attach listener function on state changes
