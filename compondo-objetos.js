const cliente = {
    nome: "André",
    idade: 25,
    cpf: "123.456.789-09",
    email:"andre@email.com",
    fones: ["9 9999-9999","79 8888-8888"]
};

cliente.dependentes = {
    nome: "Sara",
    parentesco:"filha",
    dataNascimento:"20/03/2011"
}

console.log(cliente)

cliente.dependentes.nome = "Sara Silva";

console.log(cliente)