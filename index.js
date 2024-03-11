let saldoVitorias = calcularVitorias(66, 33);
let namePlayer = "Avassalador";
let rank;

function calcularVitorias(vitorias, derrotas) {
    return vitorias - derrotas
}

if (saldoVitorias <= 10){
    rank = "Ferro";
} else if (saldoVitorias > 10 && saldoVitorias <= 20){
    rank = "Bronze";
} else if (saldoVitorias > 20 && saldoVitorias <= 50){
    rank = "Prata";
} else if (saldoVitorias > 50 && saldoVitorias <= 80){
    rank = "Ouro"
} else if (saldoVitorias > 80 && saldoVitorias <= 90){
    rank = "Diamante";
} else if (saldoVitorias > 90 && saldoVitorias <= 100){
    rank = "Lendário";
} else {
    rank = "Imortal";
}

console.log(`O saldo de vitórias do jogador ${namePlayer} foi de ${saldoVitorias}, seu rank é ${rank}`)