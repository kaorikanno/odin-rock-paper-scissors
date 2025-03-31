console.log("Hello World")

function getComputerChoice() {
    let option = Math.random();
    let resultado_compu;
    if (option <= 0.33) {
        resultado_compu = "piedra";
    }
    else if (option <= 0.66) {
        resultado_compu = "papel";
    }
    else {
        resultado_compu = "tijeras";
    }
    return resultado_compu

}

// --------------------------------------------


let humanScore = 0;
let computerScore = 0;

const div1 = document.querySelector('#tablero');

// -----------------------------------------------------



option = "";
const btn1 = document.querySelector('#btn1');
btn1.addEventListener("click", () => {
    if (humanScore < 5 && computerScore < 5){
    console.log("Elegiste piedra")
    option = "piedra";
    let juego = playGame(option);
    console.log(juego)
    }
})

const btn2 = document.querySelector('#btn2');
btn2.addEventListener("click", () => {
    if (humanScore < 5 && computerScore < 5){
    console.log("Elegiste papel")
    option = "papel";
    let juego = playGame(option);
    console.log(juego)
    }
})

const btn3 = document.querySelector('#btn3');
btn3.addEventListener("click", () => {
    if (humanScore < 5 && computerScore < 5){
    console.log("Elegiste tijera")
    option = "tijeras";
    let juego = playGame(option);
    console.log(juego)
    }
})



// -----------------------------------------------------
function playRound(HumanChoice, computerChoice) {
    let ganador;
    if (HumanChoice == "piedra") {
        if (computerChoice == "piedra") {
            console.log(" Ambos sacaron piedra, empatan")
            ganador = "ninguno"
        }
        else if (computerChoice == "papel") {
            console.log(" Perdiste! Papel le gana a piedra")
            ganador = "computer"
        }
        else {
            console.log("Ganaste! Piedra gana a tijeras")
            ganador = "human"
        }
    }

    else if (HumanChoice == "papel") {
        if (computerChoice == "papel") {
            console.log(" Ambos sacaron papel, empatan")
            ganador = "ninguno"
        }
        else if (computerChoice == "tijeras") {
            console.log(" Perdiste! Tijera gana a papel")
            ganador = "computer"
        }
        else {
            console.log("Ganaste! Papel gana a piedra")
            ganador = "human"
        }
    }

    else if (HumanChoice == "tijeras") {
        if (computerChoice == "tijeras") {
            console.log(" Ambos sacaron tijera, empatan")
            ganador = "ninguno"
        }
        else if (computerChoice == "piedra") {
            console.log(" Perdiste! Piedra le gana a tijera")
            ganador = "computer"
        }
        else {
            console.log("Ganaste! Tijeras gana a papel")
            ganador = "human"
        }
    }
    return ganador;
}


function playGame(option) {

    let computer = getComputerChoice(); 
    let ganador = playRound(option, computer);
    
    if (ganador == "human") {
        humanScore += 1
        console.log("El humano ganó un punto")
    }

    else if (ganador == "computer") {
        computerScore += 1
        console.log("Gané un punto, jajajaja")
    }
    div1.textContent = `marcador actual: 
    humano: ${humanScore} 
             vs 
    supermo: ${computerScore}`
    if  (humanScore == 5 || computerScore == 5) {
        if (humanScore > computerScore) {
            div1.textContent = `Se acabó el juego. 
            Gana el humano perdedor`
        }
        else {
            div1.textContent = `Se acabó el juego. 
            Gano YO`
        }
    }
}
