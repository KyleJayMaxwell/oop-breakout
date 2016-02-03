//Marijuana

var marijuana = function (name, thc, type) {
  this.uuid = Math.floor(Math.random()*1000000); //create unique id
  this.name = name;
  this.thc = thc;
  this.type = type;

};

// Jars

var jar = function () {
  this.allMarijuana = [];
};

jar.prototype.addMarijuana = function(marijuana) {
  this.allMarijuana.push(marijuana);
};

jar.prototype.smokeMarijuana = function(marijuanaID) {

  for (var i = 0; i < this.allMarijuana.length; i++) {
    if(this.allMarijuana[i].uuid === parseInt(marijuanaID)) {
      var index = this.allMarijuana.indexOf(this.allMarijuana[i]);
      this.allMarijuana.splice(index, 1);
      break;
    }
  }


};

jar.prototype.addMarijuanaToDOM = function() {
  $('#all-marijuana').empty();
  for (var i = 0; i < this.allMarijuana.length; i++) {
    $('#all-marijuana').append('<li>'+this.allMarijuana[i].name+'&nbsp;'+
      '<button class="btn btn-danger btn-sm" data-id="'+this.allMarijuana[i].uuid+'" id="smoke-btn">Smoke Me</button></li>'
      );
  }
};


// sanity checks

// var white = new marijuana('The White', 17, 'Indica');
// var maui = new marijuana('Maui', 21, 'Sativa');

// var marijuanaJar = new jar();

// marijuanaJar.addMarijuana(white);
// marijuanaJar.addMarijuana(maui);

// console.log(marijuanaJar.allMarijuana.length === 2);

// marijuanaJar.smokeMarijuana(white);

// console.log(marijuanaJar.allMarijuana.length === 1);


