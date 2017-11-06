/*
function SlapController() {



    //CONTROLLER PUBLIC
    function giveItem(items) {
        player.items.push(items)
        document.getElementById('description').insertAdjacentText('items.description')
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
        document.getElementById('health').innerText = getTargetHealth(target)
        document.getElementById('hits').innerText = target.hits
        document.getElementById('name').innerText = target.name
    }

    update()

    var slapService = new SlapService

}

*/