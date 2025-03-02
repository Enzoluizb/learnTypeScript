// const:
// O valor não pode ser reatribuído depois da inicialização.
// Também respeita o escopo de bloco {}.
// Se o valor for um objeto ou array, suas propriedades podem ser alteradas, mas não a referência da variável.

const idade = 25;
console.log(idade); // 25

// idade = 30; ❌ ERRO: Não é possível reatribuir um const

const pessoa = { nome: "Ana", idade: 28 };
pessoa.idade = 29; // ✅ Permitido alterar propriedade do objeto
console.log(pessoa); // { nome: "Ana", idade: 29 }

// let:
// Permite reatribuição do valor.
// Não pode ser redeclarado no mesmo escopo.
// Respeita o escopo de bloco {}.

let nome = "João";
console.log(nome); // João

nome = "Maria"; // Reatribuindo um novo valor
console.log(nome); // Maria

