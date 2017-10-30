
var Target = function (name, health, hits) {
    this.name = name;
    this.health = health;
    this.hits = hits
    this.items = []
}

var player = {
    name: 'Player 1',
    health: 100,
    hits: 0,
    items: []
}


var Sword = function (name, physDmg, description) {
    this.name = name;
    this.physDmg = physDmg;
    this.description = description
}



var target = new Target("Trusty Patches", 100, 0)

var items = new Sword("Zweihander", 1.3, "git gud casul")


function giveItem(items) {
    player.items.push(items)
    addMods()
    update()
}


function addMods() {

    for (var i = 0; i < player.items.length; i++) {
        totalMod += player.items[i].physDmg

        return 'Item DMG modifier: ' + totalMod

    }
}

function slap() {
    target.health -= 1 * totalMod
    target.hits += 1
    update()
}

function punch() {
    target.health -= 5 * totalMod
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