var Target = function (name, health) {
    this.name = name;
    this.health = health;
    this.hits = 0
}

var player = {
    health: 100,
    slapDmg: 1,
    punchDmg: 5,
    kickDmg: 10,
    items: []
}

var Item = function (name, mod, description) {
    this.name = name;
    this.mod = mod;
    this.description = description;
}

var target = new Target("Trusty Patches", 100)

var items = {
    sword: new Item("Zweihander", 1.6, "git gud"),
    boots: new Item("Leggings of Thorns", 1.3, "ouch"),
    unarmed: new Item("Caestus", 1.8, "wicked bruh")
}

function addMods() {

    var modTotal = 1

    for (i in player.items) {
        modTotal += player.items[i].mod
    }
    return modTotal
}

function give(item) {
    player.items.push(item);
    update();

}

function slap() {
    var damage = 1
    target.health -= damage * addMods()
    this.hits++
    update()
}
function punch() {
    var damage = 5
    target.health -= damage * addMods()
    this.hits++
    update()
    
}
function kick() {
    var damage = 10
    target.health -= damage * addMods()
    this.hits++
    update()
    
}

function update() {
    document.getElementById('name').innerText = target.name
    document.getElementById('health').innerText = target.health
    document.getElementById('hits').innerText = target.hits
}
update()