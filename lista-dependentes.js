const cliente = {
    nome: "André",
    idade: 25,
    cpf: "123.456.789-09",
    email:"andre@email.com",
    fones: ["9 9999-9999","79 8888-8888"],
    dependentes: [{
        nome: "Sara Silva",
        parentesco:"filha",
        dataNascimento:"20/03/2011"
    }]
};

cliente.dependentes.push({
    nome:"Samia Maria",
    parentesco:"filha",
    dataNascimento:"02/01/2019"

})

console.log(cliente)

const filhaMaisNova = cliente.dependentes.find(dependente => dependente.dataNascimento.includes("2019"));
console.log(filhaMaisNova)