
/*
//default object constructor

let person  =new Object();
person.name = 'bharath';
//console.log(person.name);

//literal method let p ={p1:'',p2:'',......}
//constructor method
let car = {
    color: 'red',
    mfd : "02/03/2009",
    engine:{
        no:4,
        nitrous:'yes',
        stroke:9,
    }
}
console.log(car.engine.no);


//Constructor

function bike(name,color,speed,milege){
    this.bname = name;
    this.bcolor = color;
    this.bspeed =speed;
    this.bmilege = milege;
    this.etype = etype;
}
function etype(no,gas,id){
    this.no=no;
    this.gas = gas;
    this.id=id;

}

let b1 = new bike("r15","red",320,30);
//console.log(bike.color);

function Emp(name,dept)
*/

/*
function Bakery(name,no_emp){
    this.name = name || 'Bakery';
    this.no_emp = no_emp || 0;
}

let b = new Bakery("iyenger",4);
//console.log(b);


function items(dish,name,no_emp){
    Bakery.call(this,name,no_emp);
    this.dish = dish || 'cake';

}
let i = new items();
console.log(i);*/



let car = new Map();
car.set('maclaren','06');
car.set('toyata','3');car.set('ford','2');

//console.log(car.entries());
//console.log(car.has("toyata"));
//console.log(car.get('ford'));
//console.log(car.keys());
//console.log(car.size);
//console.log(car.values('4'));
car.forEach((values,keys)=>{
    console.log(values,keys+" cars");
})

console.log(car instanceof Object);
