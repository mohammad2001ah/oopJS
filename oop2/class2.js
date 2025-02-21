// class Car{
//   name="";
//   color="";
//   model=0;
//   maxSpeed=0;
//   constructor(name,color,model,maxSpeed){
//     if(typeof name !== "string"){
//       throw new Error("name must be string")
//     }
//     if(typeof color !== "string"){
//       throw new Error("color must be string")
//     }
//     if(typeof model !== "number"){
//       throw new Error("model must be string")
//     }
//     if(typeof maxSpeed !== "number"){
//       throw new Error("speed must be string")
//     }
//     this.name=name;
//     this.color=color;
//     this.model=model;
//     this.maxSpeed=maxSpeed;
//   }
//   start(){
//     console.log(`${this.name} is starting`)
//   }
//   speed(){
//     console.log(`the max speed for this car is = ${this.maxSpeed}`)
//   }
// }
// var c1=new Car("bmw","black",2020,300);
// console.log(c1);
// c1.start();
// c1.speed();
/*class and obj and main methods and oop princapels*/
///encapsulation => private, public
class BankAccount{
  accountHolder;
  #balance;
  #userID;
  constructor(accountHolder,balance,userID){
    this.accountHolder=accountHolder;
    this.#balance=balance;
    this.#userID=userID;
  }
  //getter
  getBalance(){
    return this.#balance;
  }
  getuserID(){
    return this.#userID.slice(0,-3)+"******"
  }
  //setter
  setuserID(userID){
    this.#userID=userID;
  }
  //methods
  withDraw(amount){
    if(amount>this.#balance){
      console.log("insufficient Balance");
    }
    else{
      this.#balance=this.#balance-amount;
      console.log(`you Balance now is ${this.#balance}`)
    }
  }
  deposit(amount){
    if(amount<=0){
      console.log("amonut must be greater than 0");
    }
    else{
      this.#balance=this.#balance + amount;
      console.log(`you Balance after deposit is ${this.#balance}`)
    }
  }
}
//inheritance => main class sub class
class Employee{
  name;
  salary;
  constructor(name,salary){
    this.name=name;
    this.salary=salary;
  }
  showInfo(){
    console.log("Name:" ,this.name);
    console.log("Salary:" ,this.salary);
  }
}
class Manager extends Employee{
  department;
  constructor(name,salary,department)
  {
    super(name,salary);
    this.department=department;
  }
  showInfo(){
    console.log("Name:" ,this.name);
    console.log("Salary:" ,this.salary);
    console.log("Department:" , this.department)
  }
}
//abstract class or abstract methods
class Vehicle{
  constructor(){
    if(this.constructor === Vehicle){
      throw new Error("you can't create an object from abstract class")
    }
  }
  start(){
    throw new Error("you have to implement this methods")
  }
  stop(){
    console.log("Vehicle has stopped ")
  }
}
class Car extends Vehicle{
  name;
  constructor(name){
    super();
    this.name=name;
  }
  start(){
    console.log(`${this.name} is starting`)
  }
}


function main(){
  console.log("---------Enacpsulation Example---------------")
  var account1=new BankAccount("Mohammad",2000,"mm20000");
  console.log(account1.accountHolder);
  console.log(account1.getBalance());
  console.log(account1.getuserID());
  // account1.withDraw(500);
  account1.setuserID("55khgr");
  console.log(account1.getuserID());
  account1.deposit(700);
  //inhret
  console.log("*********************")
  var emb1= new Employee("Mohmmad",5000);
  emb1.showInfo();
  console.log("*********************")
  var mang=new Manager("yazed",500,"IT");
  mang.showInfo();
  // var vi1=new Vehicle();
  // vi1.start();
  var car1=new Car("bmw");
  // console.log(car1);
  car1.start();
  car1.stop();
}
main();