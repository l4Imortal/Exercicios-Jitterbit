const prompt = require("prompt-sync")();

let n = Number(prompt("Digite um número: "));
let soma = 0;

function SomaImpares(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 2 !== 0) {
            soma += i;
        }
    }
    return soma;
}

console.log("Resultado:", SomaImpares(n));