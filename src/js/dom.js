// Create new Marijuana jar
var myMarijuanaJar = new jar();

$(document).ready(function() {
  marijuanaSeed = new marijuana('Maui Wowie', 19, 'Sativa');

  // add marijuana to the jar
  myMarijuanaJar.addMarijuana(marijuanaSeed);
  // update dome
  updateDOM();

});

// add new marijuana
$('form').on('submit', function(){
  event.preventDefault();
  // get values
  var name = $('#mj-name').val();
  var thc = $('#mj-thc').val();
  var type = $('#mj-type').val();
  
  // creates new marijuana instance 
  var newMarijuana = new marijuana(name, thc, type);
  // add marijuana to the jar
  myMarijuanaJar.addMarijuana(newMarijuana);
  // add all marijuana to the DOM
  updateDOM();
  // clear inputs
  $('#mj-name').val('');
  $('#mj-thc').val('');
  $('#mj-type').val('');

});

// smoke a marijuana strain
$(document).on('click', '#smoke-btn', function(){
  var marijuanaID = $(this).attr('data-id');
  // remove beer from fridge
  myMarijuanaJar.smokeMarijuana(marijuanaID);
  //update dom
  updateDOM();
});

function updateDOM() {
  // Append all marijuana to the DOM
  myMarijuanaJar.addMarijuanaToDOM();
}