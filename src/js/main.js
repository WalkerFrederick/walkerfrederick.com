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
