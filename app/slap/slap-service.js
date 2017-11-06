/*
function SlapService() {


    //SERVICE PRIVATE
    var Target = function (name, health) {
        this.name = name;
        this.health = health;
        this.hits = 0;
        this.items = []
    }


    //SERVICE PRIVATE
    var Player = function (name, health) {
        this.name = name;
        this.health = health;
        this.totalMod = 1;
        this.hits = 0;
        this.items = [];
    }

    //SERVICE PRIVATE
    var Item = function (name, physDmg, description) {
        this.name = name;
        this.physDmg = physDmg;
        this.description = description
    }


    //SERVICE PRIVATE
    var target = new Target("Trusty Patches", 100)

    //SERVICE PRIVATE
    var items = new Sword("Zweihander", 2.1, "git gud casul")
    var items = new Boots("Leggings of Thorns", 1.4, "Leggings of Kirk, the notorious knight of Thorns. A dense patch of thorns grows from its surface. A fitting item for the murderous Kirk, for even the simple act of rolling can damage enemies when wearing this attire.")

  
    //SERVICE PRIVATE
    var player = new Player("Host of Embers", 100)

    



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
}


// GETTERS AND SETTERS

function getTargetHealth(target){
    return target.health
}
*/