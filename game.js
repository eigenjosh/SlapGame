



//SERVICE PRIVATE
var Target = function (name, health) {
    this.name = name;
    this.health = health;
    this.hits = 0;
    this.items = []
}


//SERVICE PRIVATE
var Player = function (name,health) {
    this.name = name;
    this.health = health;
    this.totalMod = 1;
    this.hits = 0;
    this.items = [];
}

//SERVICE PRIVATE
var Sword = function (name, physDmg, description) {
    this.name = name;
    this.physDmg = physDmg;
    this.description = description
}


//SERVICE PRIVATE
var target = new Target("Trusty Patches", 100)

//SERVICE PRIVATE
var items = new Sword("Zweihander", 1.3, "git gud casul")

//SERVICE PRIVATE
var player = new Player("Host of Embers", 100)


//CONTROLLER PUBLIC
function giveItem(items) {
    player.items.push(items)
    addMods()
    update()
}

//BOTH//
function addMods() {

    for (var i = 0; i < player.items.length; i++) {
        player.totalMod += player.items[i].physDmg

        return 'Item DMG modifier: ' + player.totalMod

    }
}
//----//


//BOTH//
function slap(target) {
    target.health -= 1 * player.totalMod
    target.hits += 1
    update()
}

function punch() {
    target.health -= 5 * player.totalMod
    target.hits += 1
    update()
}

function kick() {
    target.health -= 10
    target.hits += 1
    update()
}
//----//

//CONTROLLER PRIVATE
function update() {
    document.getElementById('health').innerText = target.health
    document.getElementById('hits').innerText = target.hits
    document.getElementById('name').innerText = target.name

}

update()
