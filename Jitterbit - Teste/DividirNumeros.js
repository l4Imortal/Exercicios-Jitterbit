function DividirNumeros(number1, number2) {
    try {
        if (number2 === 0) {
            throw new Error("Divisão por zero não é permitida.");
        }
    return number1 / number2;

    } catch (error) {
        console.error("Erro:", error.message);
    }
}

console.log(DividirNumeros(21, 3)); 