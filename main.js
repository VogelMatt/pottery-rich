const buyClay = () => {
    return {
    }
}
const makePottery = (obj) => {
    return obj.shape = "Bowl"
}
const bisqueFire = (obj) => {
    return obj.readyForGlazing = true
}
const glazePottery = (obj) => {
    if (obj.readyForGlazing === true) {
        obj.glazing = "Midnight Blue"
    } else {
        console.log("Make sure you bisque fire the pottery before you glaze it.")
    }
    return obj
}
const finalFiring = (obj1, temp) => {
    if (temp > 1200) {
        obj1.cracked = true
    } else {
        obj1.cracked = false
    }
    return obj1
}
const boughtClay = buyClay();
const throwBowl = makePottery(boughtClay);
const glazeReady = bisqueFire(boughtClay);
const glazeColor = glazePottery(boughtClay);
const firedPottery1200 = finalFiring(glazeColor, 1200);
// const firedPottery1400 = finalFiring(glazePottery, 1400)
// console.log(firedPottery1400);
// console.log(glazeColor)
console.log(firedPottery1200)