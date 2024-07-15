// Using a function to create an object

var buildPlanet = function (name, position, type) {
    var planet = {};
  
    planet.name = name;
    planet.position = position;
    planet.type = type;
  
    return planet;
};

var planet1 = buildPlanet(
    "Jupiter",
    5,
    "Gas Giant"
);

console.log(planet1.name);      // Logs: Jupiter
console.log(planet1.position);   // Logs: 5
console.log(planet1.type);       // Logs: Gas Giant

// 1) Build a second planet
var planet2 = buildPlanet(
    "Earth",
    3,
    "Terrestrial"
);

// 2) Log its name and type
console.log(planet2.name);       // Logs: Earth
console.log(planet2.type);       // Logs: Terrestrial
