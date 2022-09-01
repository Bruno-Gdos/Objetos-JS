function Cliente(nome,cpf,email,saldo)
{
    this.nome = nome;
    this.cpf = cpf;
    this.email = email;
    this.saldo = saldo;
    this.depositar = function(valor)
    {
        this.saldo += valor;
    }
    this.sacar = function(valor)
    {
        this.saldo -= valor;
    }
}

const andre = new Cliente("André","123.456.789-09","andre@email.com",100);

andre.depositar(100);
console.log(andre.saldo);
andre.sacar(50);
console.log(andre.saldo);

console.log(andre);