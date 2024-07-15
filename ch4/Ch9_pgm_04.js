// A Planet constructor

var Planet = function (name, position, type) {
    this.name = name;
    this.position = position;
    this.type = type;
  
    this.showPlanet = function () {
        var info = this.name + ": planet " + this.position;
        info += " - " + this.type;
        console.log(info);
    };
};

var planet1 = new Planet("Jupiter", 5, "Gas Giant");

planet1.showPlanet();  // Logs: Jupiter: planet 5 - Gas Giant

// 1) Create a second planet
var planet2 = new Planet("Earth", 3, "Terrestrial");

// 2) Call the showPlanet method on the new planet
planet2.showPlanet();  // Logs: Earth: planet 3 - Terrestrial
