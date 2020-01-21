class Car
{
    constructor(c)
    {
        this.car=c;
    }
    run()
    {
        console.log("value of car constructor"+this.car);
    }
}
class MarutiSuzuki extends Car
{
    constructor(s)
    {
        super()
        this.speed=s;
    }
    run()
    {
        super.run();
        console.log("The speed is"+this.speed);
    }
}
class Maruti extends MarutiSuzuki{
    constructor(m)
    {
        super()
        this.speed1=m;
    }
    run()
    {
        super.run();
        console.log("Maruti speed is"+this.speed1)
    }
}

var k =new Maruti(5);
k.run();