const cliente = {
    nome: "André",
    idade: 25,
    cpf: "123.456.789-09",
    email:"andre@email.com"
};

const chaves = ["nome" , "idade" , "cpf" , "email"];

for (let i = 0; i < chaves.length; i++) {
console.log(`${chaves[i][0].toUpperCase(1) + chaves[i].substring(1)}: ${cliente[chaves[i]]}`);
}