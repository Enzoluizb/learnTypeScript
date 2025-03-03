// while

let contador: number = 0;

while (contador < 3) {
    console.log(`Contador: ${contador}`);
    contador++;
}

// for

for (let i = 0; i < 5; i++) {
    console.log(`Iteração ${i}`);
}

// forin 

const pessoa = { nome: "Alice", idade: 25, cidade: "São Paulo" };

for (let chave in pessoa) {
    console.log(`${chave}: ${pessoa[chave as keyof typeof pessoa]}`);
}

// as keyof typeof pessoa é usado para garantir que o TypeScript reconheça a chave corretamente.

// forEach (metodo de arrays)

const numeros: number[] = [10, 20, 30];

numeros.forEach((numero, indice) => {
    console.log(`Índice ${indice}: ${numero}`);
});