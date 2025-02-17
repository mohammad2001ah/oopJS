class Car{
  name="";
  color="";
  model=0;
  maxSpeed=0;
  constructor(name,color,model,maxSpeed){
    if(typeof name !== "string"){
      throw new Error("name must be string")
    }
    if(typeof color !== "string"){
      throw new Error("color must be string")
    }
    if(typeof model !== "number"){
      throw new Error("model must be string")
    }
    if(typeof maxSpeed !== "number"){
      throw new Error("speed must be string")
    }
    this.name=name;
    this.color=color;
    this.model=model;
    this.maxSpeed=maxSpeed;
  }
  start(){
    console.log(`${this.name} is starting`)
  }
  speed(){
    console.log(`the max speed for this car is = ${this.maxSpeed}`)
  }
}
var c1=new Car("bmw","black",2020,300);
console.log(c1);
c1.start();
c1.speed();