const cliente = {
    nome: "André",
    idade: 25,
    cpf: "123.456.789-09",
    email:"andre@email.com"
};

console.log(`Meu nome é ${cliente.nome} e tenho ${cliente.idade} anos`);

console.log(`O cpf é ${cliente.cpf.substring(0,3)}.XXX.XXX-${cliente.cpf.substring(12,14)}`);