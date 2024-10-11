function rollDice() {
    let total = 0;

    for(let i in dice) {
        for(let j = 0; j < dice[i]; j++) {
            switch(i){
                case "d4":
                    total += randomInt(1,5);
                    break;
                case "d6":
                    total += randomInt(1,7);
                    break;
                case "d8":
                    total += randomInt(1,9);
                    break;
                case "d10":
                    total += randomInt(1,11);
                    break;
                case "d100":
                    total += (randomInt(0,10)*10);
                    break;
                case "d12":
                    total += randomInt(1,13);
                    break;
                case "d20":
                    total += randomInt(1,21);
                    break;
            }
        }
    }


    let name = sessionStorage.getItem("username");
    let val = (name+":"+total);

    ws.send(val);
    //ws.send("test");
}

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

function getDiceLength() {
    let diceCount =0
    for(let i in dice) {
        diceCount += dice[i];
    }

    return diceCount;
}