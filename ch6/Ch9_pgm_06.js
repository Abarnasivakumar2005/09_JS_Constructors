var Planet = function (name, position, type) {
    this.name = name;
    this.position = position;
    this.type = type;
    this.moons = [];
  
    this.showPlanet = function () {
        console.log(this.name);
        console.log("Planet " + this.position + " - " + this.type);
        this.showMoons();  // Use showMoons instead of joining
    };
  
    this.addMoon = function (moon) {
        this.moons.unshift(moon);
    };

    // 2) Create a showMoons method
    this.showMoons = function () {
        if (this.moons.length === 0) {
            console.log("No moons.");
            return;
        }
        this.moons.forEach(function(moon, index) {
            console.log("(" + index + ") " + moon);
        });
    };

    // 4) Create a getMoon method
    this.getMoon = function (index) {
        return this.moons[index] || "No moon at that index.";
    };
};

// Initialize planets
var planet1 = new Planet("Jupiter", 5, "Gas Giant");
planet1.addMoon("Io");
planet1.addMoon("Europa");
planet1.addMoon("Ganymede"); // New moon for Jupiter

var planet2 = new Planet("Neptune", 8, "Ice Giant");
planet2.addMoon("Triton");
planet2.addMoon("Nereid"); // New moon for Neptune

var planet3 = new Planet("Mercury", 1, "Terrestrial");
planet3.addMoon("No Moons"); // New moon for Mercury

// Show all planets and their moons
[ planet1, planet2, planet3 ].forEach(function (planet) {
    planet.showPlanet();
    console.log(""); // Add space between planets
});

// Example of getting a moon
console.log("> " + planet1.getMoon(1)); // Should output "Europa"
console.log("> " + planet2.getMoon(0)); // Should output "Triton"
console.log("> " + planet3.getMoon(0)); // Should output "No Moons"
