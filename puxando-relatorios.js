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
        },
        sacar:function(valor)
        {
         this.saldo -= valor;   
        }
};

let relatorio="";

for ( let info in cliente){
    if(typeof cliente[info] === "object" || typeof cliente[info] === "function"){
        continue;
    }else{
        relatorio += `${info}: ${cliente[info]}\n`;
    }
}


console.log(relatorio)