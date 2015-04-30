function your_turn (p1, p2){
    $('#turn').empty();
    $('#turn').append("It's " + p1.name + "'s turn");
    pturn = Math.floor(Math.random()*2)

    switch(p1.action) {
  case 'BUILD':
    build(p1, prompt("What would you like to build? A lazer, rocket or orb").toUpperCase())
    break;
  case 'UPGRADE':
    upgrade(p1, prompt("What would you like to upgrade?").toUpperCase())
    break;
  case 'ATTACK':
    attack(p1, p2)
    break;
  case 'CONCEDE':
    p1.alive = false
    break;
  default:
    console.log("You have to choose one of those choices")
}

explodsion(p1)
explodsion(p2)

if(!p1.alive) {
    game = false
    console.log(p1.name + " LOSES")
    console.log(p2.name + " WINS! GOOD GAME")
} if(!p2.alive) {
    game = false
    console.log(p2.name + " LOSES")
    console.log(p1.name + " WINS! GOOD GAME")
    }
}
