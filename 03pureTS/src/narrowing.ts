// narrowing com type of
// typeof é usado para determinar se input é uma string ou um number, e o TypeScript ajusta o tipo da variável dentro de cada bloco.

function formatInput(input: string | number) {
    if (typeof input === "string") {
        return input.toUpperCase(); // Narrowed para string
    } else {
        return input.toFixed(2); // Narrowed para number
    }
}

// narrowing com instanceof
// instanceof verifica a instância de uma classe, permitindo que o TypeScript entenda qual tipo está sendo manipulado.

class Dog {
    bark() {
        console.log("Woof!");
    }
}

class Cat {
    meow() {
        console.log("Meow!");
    }
}

function speak(animal: Dog | Cat) {
    if (animal instanceof Dog) {
        animal.bark(); // Narrowed para Dog
    } else {
        animal.meow(); // Narrowed para Cat
    }
}
