
function shoot (guy, damage){
    for(var i = 0; i < damage; i++){
    if(guy.orb[1] != 0){
        guy.orb[1] -= 1
    } else if(guy.lazer[1] != 0){
        guy.lazer[1] -= 1
    } else if(guy.rocket[1] != 0){
        guy.rocket[1] -= 1
    } else {
        guy.hp -= 1
    }
    }
}

var attack = function (you, guy){
    if(you.lazer[0] != 0){
        shoot(guy, you.lazer[2])
        console.log("FIRE LAZERS")
    } else if(you.rocket[0] != 0){
        shoot(guy, you.rocket[2])
        console.log("BLAST OFF")
    } else {
        console.log("You don't have a unit that can attack!")
    }
}

function explodsion (player){
    if(player.lazer[1]===0 && player.lazer[0] != 0){
        player.lazer[0] = 0
        player.lazer[2] = 0
        console.log("KABOOM! " + player.name + "'s Lazer exploded")
    } if(player.rocket[1]===0 && player.rocket[0] != 0){
        player.rocket[0] = 0
        player.rocket[2] = 0
        console.log("KABOOM! " + player.name + "'s Rocket exploded")
    } if(player.orb[1]===0 && player.orb[0] != 0){
        player.orb[0] = 0
        player.orb[2] = 0
        console.log("KABOOM! " + player.name + "'s Orb exploded")
    } if(player.hp === 0){
        game = false
        player.alive = false
    }
}

