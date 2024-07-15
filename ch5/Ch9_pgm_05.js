// Including a moons array in our Planet constructor

var Planet = function (name, position, type) {
    this.name = name;
    this.position = position;
    this.type = type;
    this.moons = [];
  
    this.showPlanet = function () {
        var info = this.name + ": planet " + this.position;
        info += " - " + this.type;
        console.log(info);
        console.log("Moons: " + this.moons.join(', ') + ".");
    };
  
    this.addMoon = function (moon) {
        this.moons.push(moon);
    };

    // 4) Add a removeMoon method
    this.removeMoon = function () {
        this.moons.pop();
    };
};

var planet1 = new Planet("Jupiter", 5, "Gas Giant");

planet1.addMoon("Io");
planet1.addMoon("Europa");

planet1.showPlanet();  // Shows Jupiter's moons

// 1) Create a second planet
var planet2 = new Planet("Saturn", 6, "Gas Giant");

// 2) Add three moons to the second planet
planet2.addMoon("Titan");
planet2.addMoon("Rhea");
planet2.addMoon("Enceladus");

// 3) Call the showPlanet method on the second planet
planet2.showPlanet();  // Shows Saturn's moons

// Remove a moon from the second planet
planet2.removeMoon();
console.log("After removing a moon:");
planet2.showPlanet();  // Shows updated moons for Saturn
