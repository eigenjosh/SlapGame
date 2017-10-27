
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


var target = new Target("Trusty patches", 100, 0)

var items = new Item("Zweihander", 41, "git gud casul")

function giveZwei(items) {
    target.items.push(items)
}

giveZwei(items)

function addMods() {
    var totalMod = 0

    for (var i = 0; i < target.items.length; i++) {
        totalMod += target.items[i].physDmg

        return 'Item DMG modifier: ' + totalMod

    }
}

function slap() {
    target.health -= 1
    target.hits += 1
    update()
}

function punch() {
    target.health -= 5
    target.hits += 1
    update()
}

function kick() {
    target.health -= 10
    target.hits += 1
    update()
}



function update() {
    document.getElementById('health').innerText = target.health
    document.getElementById('hits').innerText = target.hits
    document.getElementById('name').innerText = target.name
}

update()