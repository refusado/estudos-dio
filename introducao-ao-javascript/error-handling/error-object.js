// new Error(message, fileName, lineNumber);

// Todos os parâmentros são opcionais

const meuErro = new Error("Mensagem inválida :/");
meuErro.name = "NomeDoErro"; // opcional

throw meuErro;