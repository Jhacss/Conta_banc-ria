import { Conta } from "./Conta";

export class ContaCorrente extends Conta {
  private _limite: number;

  constructor(
    numero: number,
    agencia: number,
    tipo: number,
    titular: string,
    saldo: number,
    limite: number
  ) {
    super(numero, agencia, tipo, titular, saldo);
    this._limite = limite;
  }

  public get limite(): number {
    return this._limite;
  }

  public set limite(value: number) {
    this._limite = value;
  }
  // particularidade de conta corrente
  public sacar(valor: number): boolean {
    if (valor > this.saldo + this._limite) {
      console.log("Saldo insuficiente!");
      return false;
    }

    this.saldo -= valor;
    return true;
  }

  public visualizar() {
    super.visualizar();
    console.log(`limite da conta: ${this._limite}`);
  }
}
