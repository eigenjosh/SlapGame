
var Target = function (name, health, hits) {
    this.name = name;
    this.health = health;
    this.hits = hits
    this.items = []
}

var Item = function (name, physDmg, description) {
    this.name = name;
    this.physDmg = physDmg;
    this.description = description
}


var targets = new Target("Trusty patches", 100, 0)

var items = new Item("Zweihander", 41, "git gud casul")

function giveZwei(items) {
    targets.items.push(items)
}

giveZwei(items)
console.log(targets.items)

function slap() {
    targets.health -= 1
    targets.hits += 1
    update()
}

function punch() {
    targets.health -= 5
    targets.hits += 1
    update()
}

function kick() {
    targets.health -= 10
    targets.hits += 1
    update()
}



function update() {
    document.getElementById('health').innerText = targets.health
    document.getElementById('hits').innerText = targets.hits
    document.getElementById('name').innerText = targets.name
}

update()