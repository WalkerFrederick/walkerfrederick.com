let nextProject = function(){
  if ($('#projectOne').css('display') === 'block' && $('#projectTwo').css('display') === 'none'){
    $('#projectOne').css('display', 'none');
    $('#projectTwo').css('display', 'block');
  }
  else if ($('#projectTwo').css('display') === 'block' && $('#projectThree').css('display') === 'none'){
    $('#projectTwo').css('display', 'none');
    $('#projectThree').css('display', 'block');
  }
  else if ($('#projectThree').css('display') === 'block' && $('#projectOne').css('display') === 'none'){
    $('#projectThree').css('display', 'none')
    $('#projectOne').css('display', 'block');
  }
  else {console.log($('#projectOne').css('display'))}
}

let prevProject = function(){
  if ($('#projectOne').css('display') === 'block' && $('#projectThree').css('display') === 'none'){
    $('#projectOne').css('display', 'none');
    $('#projectThree').css('display', 'block');

  }
  else if ($('#projectThree').css('display') === 'block' && $('#projectTwo').css('display') === 'none'){
    $('#projectThree').css('display', 'none');
    $('#projectTwo').css('display', 'block');
  }
  else if ($('#projectTwo').css('display') === 'block' && $('#projectOne').css('display') === 'none'){
    $('#projectTwo').css('display', 'none')
    $('#projectOne').css('display', 'block');
  }
  else {console.log($('#projectOne').css('display'))}
}

let restoreSlides = function(x) {
  if (x.matches) { // If media query matches
    $('#projectTwo').css('display', 'block');
    $('#projectOne').css('display', 'block');
    $('#projectThree').css('display', 'block');
  }
  else {
    $('#projectTwo').css('display', 'none');
    $('#projectOne').css('display', 'block');
    $('#projectThree').css('display', 'none');
  }
}

let x = window.matchMedia("(min-width: 700px)");
x.addListener(restoreSlides); // Attach listener function on state changes


