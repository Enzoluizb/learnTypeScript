// narrowing com type of
// typeof é usado para determinar se input é uma string ou um number, e o TypeScript ajusta o tipo da variável dentro de cada bloco.

function formatInput(input: string | number) {
    if (typeof input === "string") {
        return input.toUpperCase(); // Narrowed para string
    } else {
        return input.toFixed(2); // Narrowed para number
    }
}
