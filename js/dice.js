var dice = {
    "d4": 0,
    "d6": 0,
    "d8": 0,
    "d10": 0,
    "d100": 0,
    "d12": 0,
    "d20": 0
};

function increaseDieCount(type) {
    dice[type] += 1;
    let die = document.getElementById(type);
    die.innerText = dice[type];
    console.log(dice);
}

function decreaseDieCount(type) {
    dice[type] -= 1;
    let die = document.getElementById(type);
    die.innerText = dice[type];
    console.log(dice);
}