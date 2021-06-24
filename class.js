class Animal{
    constructor(name,type){
        this.name=name;
        this.type=type;
    }
    eat()
    {
        console.log("Animal is eating");
    }
    sleep()
    {
        console.log("Animal is sleeping");
    }
    walk()
    {
        console.log("Animal is walking");
    }
    run()
    {
        console.log("Animal is runing");
    }
}
class Lion extends Animal{
    constructor(name,type,weight)
    {
        super(name,type);
        this.weight=weight;

    }
    display(){
        console.log("display all the details");
    }
   
}
let leo = new Lion()
leo.eat();
leo.run();
leo.sleep();
leo.walk();
leo.display();