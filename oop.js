class car{
    //attributes:barnd year color
    //constructor
    constructor(brand,year,color){
        this.brand=brand;
        this.year=year;
        this.color=color;
    }
    //function(behaviors)
    //start the car>output:car
    start(){
        console.log(`the care name: ${this.brand}`);
    }
}
var bmw=new car("BMW",2019,"RED")
console.log(bmw);
bmw.start();