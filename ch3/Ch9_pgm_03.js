// An array of constructed objects

var buildPlanet = function (name, position, type) {
    var planet = {};
  
    planet.name = name;
    planet.position = position;
    planet.type = type;

    planet.showPlanet = function () {
        var info = planet.name;
        info += ": planet " + planet.position;
        info += " - " + planet.type;
        console.log(info);
    };

    return planet;
};

var planets = [
    buildPlanet("Jupiter", 5, "Gas Giant"),
    buildPlanet("Neptune", 8, "Ice Giant"),
    buildPlanet("Mercury", 1, "Terrestrial"),
    buildPlanet("Venus", 2, "Terrestrial"),    // Added planet
    buildPlanet("Mars", 4, "Terrestrial")      // Added planet
];

// Display each planet with separation
planets.forEach(function (planet) {
    planet.showPlanet();
    console.log("---------------"); // Visual separation
});
