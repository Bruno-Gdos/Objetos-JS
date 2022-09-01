class Cliente{
    constructor(nome,cpf,email,saldo){

    this.nome = nome;
    this.cpf = cpf;
    this.email = email;
    this.saldo = saldo;
    }

    depositar(valor)
    {
        this.saldo += valor;
    }
    sacar(valor)
    {
        this.saldo -= valor;
    }
    exibirSaldo(){
        console.log(this.saldo);
    }
}

class ClientePoupanca extends Cliente{
    constructor(nome,cpf,email,saldo,saldoPoup){
        super(nome,cpf,email,saldo);
        this.saldoPoup = saldoPoup;
    }
    depositarPoup(valor){
        this.saldoPoup += valor;
    }
}

const ju = new ClientePoupanca("Ju","123.456.789-09","ju@emaik.com",100,1000);

console.log(ju);