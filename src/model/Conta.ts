export class Conta{
    //Modelo de dados
    private _numero: number;
    private _agencia: number;
    private _tipo: number;
    private _titular: string;
    private _saldo: number;

    //Geramos o Método construtor
    constructor(numero: number, agencia: number, tipo: number, titular: string, saldo: number) {
        this._numero = numero;
        this._agencia = agencia;
        this._tipo = tipo;
        this._titular = titular;
        this._saldo = saldo;
    }

    //Geramos os métodos Getter's e Setter's (get e set)

    public get numero(): number {
        return this._numero;
    }

    public get agencia(): number {
        return this._agencia;
    }

    public get tipo(): number {
        return this._tipo;
    }

    public get titular(): string {
        return this._titular;
    }

    public get saldo(): number {
        return this._saldo;
    }

    public set numero(value: number) {
        this._numero = value;
    }

    public set agencia(value: number) {
        this._agencia = value;
    }

    public set tipo(value: number) {
        this._tipo = value;
    }

    public set titular(value: string) {
        this._titular = value;
    }

    public set saldo(value: number) {
        this._saldo = value;
    }

    //Método para realizar saque
    public sacar(valor: number): boolean{ 
        if(valor > this._saldo){
            console.log("Saldo insuficiente!")
            return false;
        }

        this._saldo -= valor;
        return true;
    }

    //Método para realizar depósito
    public depositar(valor: number){
        this._saldo += valor;
    }


    public visualizar(){

        let tipo: string;

        switch(this._tipo){
            case 1:
                tipo = "Conta Corrente";
                break;
            case 2:
                tipo = "Conta Poupança";
                break;
            default:
                tipo = "Conta não encontrada";
                break;
        }

        console.log("==============================================");
        console.log("============  Dados da conta  ================");
        console.log("==============================================");
        console.log(`  Numero da conta: ${this._numero}`);
        console.log(`  Numero da agencia: ${this._agencia}`);
        console.log(`  Tipo da conta: ${tipo}`);
        console.log(`  Nome do titular da conta: ${this._titular}`);
        console.log(`  Saldo da conta: ${this._saldo}`);
    }

}