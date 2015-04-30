var build = function (p, gadget){
    switch(gadget){
  case 'LAZER':
if(p.lazer[0] === 0){
p.lazer[0] = 1
p.lazer[1] = 1
p.lazer[2] = 1
if(pturn){
    $('#lazer').fadeTo('slow', 1);
} else {
    $('#lazer').fadeTo('slow', 1);
}
$('#lazer').fadeTo('slow', 1);
} else {console.log("You can't have 2 lazers!")}
    break;
  case 'ROCKET':
if(p.rocket[0] === 0){
p.rocket[0] = 1
p.rocket[1] = 1
p.rocket[2] = 0
console.log("Finishing frames");
} else {console.log("You can't have 2 rokets!")}
    break;
  case 'ORB':
if(p.orb[0] === 0){
p.orb[0] = 1
p.orb[1] = 2
p.orb[2] = 0
console.log("ORB online")
} else {console.log("You can't have 2 orbs!")}
  default:
    console.log("I don't think that's a Gadget!");
    }
}

var upgrade = function (p, gadget){
    switch(gadget){
  case 'LAZER':
if(p.lazer[0] === 1){
p.lazer[0] = 2
p.lazer[1] = 1
p.lazer[2] = 3
console.log("Plasma obtained")
} else {console.log("You can't upgrade a lazer that's already upgraded or not even there!")}
    break;
  case 'ROCKET':
if(p.rocket[0] === 1){
p.rocket[0] = 2
p.rocket[1] = 3
p.rocket[2] = 2
console.log("Built and ready");
} else {console.log("You can't upgrade a rocket that's already upgraded or not even there!")}
    break;
  case 'ORB':
if(p.orb[0] > 0){
p.orb[0] += 1
p.orb[1] += 2
p.orb[2] = 0
console.log("Forcefield Activated")
} else {
    console.log("You don't even have a orb yet!")}
  default:
    console.log("I don't think that's a Gadget!");
    }
}
