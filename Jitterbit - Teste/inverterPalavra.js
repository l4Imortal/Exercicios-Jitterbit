const prompt = require("prompt-sync")();

function inverterPalavra(palavra) {
    let invertida = "";

    for (let i = palavra.length - 1; i >= 0; i--) {
        invertida += palavra[i];
    }

    return invertida;
}

let palavra = prompt("Digite uma palavra: ");

console.log("Palavra invertida:", inverterPalavra(palavra));