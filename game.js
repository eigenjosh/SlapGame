
var Targets = function(name, health, hits){
    this.name = name
    this.health = health
    this.hits = hits
}

var patches = new Targets("Trusty Patches", 100, 0)

function slap(){
    patches.health -= 1
    patches.hits += 1
    update()
}

function punch(){
    patches.health -= 5
    patches.hits += 1
    update()
}

function kick(){
    patches.health -= 10
    patches.hits += 1
    update()
}



function update(){
    document.getElementById('health').innerText = patches.health
    document.getElementById('hits').innerText = patches.hits
    document.getElementById('name').innerText = patches.name
}

update()