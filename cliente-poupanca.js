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

function ClientePoupanca(nome,cpf,email,saldo,saldoPoup)
{
    Cliente.call(this,nome,cpf,email,saldo);
    this.saldoPoup = saldoPoup;
}

const ju = new ClientePoupanca("Ju","123.456.789-09","ju@email.com",100,1000);
console.log(ju);
ClientePoupanca.prototype.depositarPoup = function(valor){
    this.saldoPoup += valor;
}

ju.depositarPoup(100);
console.log(ju.saldoPoup);