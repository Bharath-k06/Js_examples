function solarSystem(Name,distance,M_number,facts,disp){
    this.P_fact = facts;
    this.Pname = Name;
    this.D_from_earth = distance;
    this.No_moon = M_number;
    this.disp= display;
}
function display(){
    document.getElementById("dis1").innerHTML = "Name : "+this.Pname;
    document.getElementById("dis2").innerHTML = "Distance From Sun : "+this.D_from_earth+" AU";
    document.getElementById("dis3").innerHTML = "Number of natural satellites : " + this.No_moon;
    document.getElementById("dis4").innerHTML = "Some intresting fact of this planet: " + this.P_fact;
}


function func(){
    let value = document.getElementById("sel").value;
    if(value === "c"){
        let l = new solarSystem("Mercury",0.4,0,"Smallest planet");
        l.disp();
        
    }
    if(value === "s"){
        let l = new solarSystem("Venus",0.7,0,"Hottest planet");
        l.disp();
        
    }
    if(value === "e"){
        let l = new solarSystem("Earth",1,1,"The only planet which is known to have geological activity");
        l.disp();
    }
    if(value === "i"){
        let l = new solarSystem("Mars",1.5,2,"Red planet")
       l.disp();
    }
    if(value === "r"){
        let l = new solarSystem("Jupiter",5.2,79+" Known satellites","Jupiter's strong internal heat creates semi-permanent features in its atmosphere, such as cloud bands and the Great Red Spot")
       l.disp();
    }
    if(value === "U"){
        let l = new solarSystem("Uranus",19.2,27+" Known satellites","Uniquely among the planets, it orbits the Sun on its side; its axial tilt is over ninety degrees to the ecliptic")
        l.disp();
    }
    if(value === "S"){
        let l = new solarSystem("Saturn",9.5,82+" Confirmed satellites","Saturn, distinguished by its extensive ring system");
        l.disp();
    }
    if(value === "N"){
        let l = new solarSystem("Neptune",30.1,14+" Known satellite","Neptune is accompanied in its orbit by several minor planets, termed Neptune trojans, that are in 1:1 resonance with it.")
        l.disp();
    }
}