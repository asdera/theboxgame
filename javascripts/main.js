console.log('This would be the main JS file.');
var game = true

var player = function (name, handicap) {
    this.name = name;
    this.hp = handicap;
    this.lazer = [0, 0, 0];
    this.rocket = [0, 0, 0];
    this.orb = [0, 0, 0];
    this.action = "none";
    this.alive = true;
}

var p1 = new player("Player 1", 9)

var p2 = new player("Player 2", 9)

var pturn = Math.floor(Math.random()*2)



