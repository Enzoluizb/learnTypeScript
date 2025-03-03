// if/else

let idadeUser: number = 18;

if (idade >= 18) {
    console.log("Você é maior de idade.");
} else {
    console.log("Você é menor de idade.");
}

// switch

let diaSemana: number = 3;

switch (diaSemana) {
    case 1:
        console.log("Domingo");
        break;
    case 2:
        console.log("Segunda-feira");
        break;
    case 3:
        console.log("Terça-feira");
        break;
    case 4:
        console.log("Quarta-feira");
        break;
    default:
        console.log("Dia inválido");
}

// operador ternário

let pontuacao: number = 85;
let statusJogo: string = pontuacao >= 50 ? "Você venceu!" : "Você perdeu!";
console.log(statusJogo);
