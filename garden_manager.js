class GardenManager {
    constructor() {
        this.flowers = [];
    }

    plantFlower(name) {
        this.flowers.push(name);
        console.log(name + " planted in the garden.");
    }

    listFlowers() {
        console.log("Garden Flowers:");
        this.flowers.forEach(f => console.log("- " + f));
    }
}

const garden = new GardenManager();
garden.plantFlower("Tulip");
garden.listFlowers();
