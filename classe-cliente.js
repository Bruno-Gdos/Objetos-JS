

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


const andre = new Cliente("André","123.456.789-09","andre@email.com",100);

andre.exibirSaldo();
andre.depositar(100);
andre.exibirSaldo();