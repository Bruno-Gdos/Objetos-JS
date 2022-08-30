const cliente = {
    nome: "André",
    idade: 25,
    cpf: "123.456.789-09",
    email:"andre@email.com",
    fones: ["9 9999-9999","79 8888-8888"],
    dependentes: [{
         nome: "Sara Silva",
         parentesco:"filha",
         dataNascimento:"20/03/2011"},
        {    
         nome:"Samia Maria",
         parentesco:"filha",
         dataNascimento:"02/01/2019"}
        ],
        saldo: 100 ,
        depositar:function(valor)
        {
         this.saldo += valor;   
        }
};

console.log(cliente.saldo)
cliente.depositar(100);
console.log(cliente.saldo)
