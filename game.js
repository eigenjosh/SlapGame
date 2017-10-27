var health = 100
var name = "Trusty Patches"
var hits = 0

var targets = {
    
    trustyPatches: new Targets('Trusty Patches', 100, 0, 0)
}


function Targets(name, health, hits, physicalResistance){
    this.name = name
    this.health = health
    this.hits = hits
    this.physicalResistance = physicalResistance


}

var Items = function(physicalDmg,  option3){
	this.option1 = option1;
	this.option2 = option2;
	this.option3 = option3;
}

function slap(){
    health -= 1
    hits += 1
    update()
}

function punch(){
    health -= 5
    hits += 1
    update()
}

function kick(){
    health -= 10
    hits += 1
    update()
}



function update(){
    document.getElementById('health').innerText = health
    document.getElementById('hits').innerText = hits
    document.getElementById('name').innerText = name
}

update()