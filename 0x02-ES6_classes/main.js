import Building from './5-building.js';

const b = new Building(100);
console.log(b);

class TestBuilding extends Building {
    constructor(sqft) {
        super(sqft);
    }

    evacuationWarningMessage() {
        return "Test Building must evacuate";
    }
}

try {
    new TestBuilding(200)
}
catch(err) {
    console.log(err);
}
