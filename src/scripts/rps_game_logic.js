function random(min, max) {
    return Math.floor(min + Math.random() * (max - min + 1))
}

export function getComputerChoice() {
    let choicesArray = ["r", "p", "s"]
    let randomIndex = random(0, choicesArray.length-1)
    // console.log("randomIndex", randomIndex);
    return choicesArray[randomIndex]
}

export function getGameWinner(userChoice, computerChoice) {
    // console.log("userChoice");
    if (userChoice == computerChoice) {
        return "d"
    }
    else if (userChoice == "r" && computerChoice == "s") {
        return "u"
    }
    else if (userChoice == "p" && computerChoice == "r") {
        return "u"
    }
    else if (userChoice == "s" && computerChoice == "p") {
        return "u"
    }
    else {
        return "c"
    }
}


// let choicesArray = ["r", "p", "s"]
// let answer
// let rCount =0;
// let pCount =0;
// let sCount =0;

// for(let i=0; i<10000; i++){
//     answer = choicesArray[random(0,2)]
//     if(answer == "r"){
//         rCount++
//     }
//     else if(answer == "p"){
//         pCount++
//     }
//     else{
//         sCount++
//     }
// }

// console.log(rCount, pCount, sCount);



