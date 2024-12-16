import { Conta } from "../model/Conta";
import { ContaRpository } from "../repository/ContaRepository";

export class ContaController implements ContaRpository {

  // Coleção Array que vai armazenar os objetos Conta
  private listacontas = new Array<Conta>();

  // Controlar os numeros das contas
  public numero: number = 0;

  procurarPorNumero(numero: number): void {
    const buscaConta = this.buscarNoArray(numero);

    if (buscaConta !== null) {
      buscaConta.visualizar();
    } else {
      console.log("\nConta não encontrada!");
    }
  }

  listarTodas(): void {
    for (let conta of this.listacontas) {
      conta.visualizar();
    }
  }

  cadastrar(conta: Conta): void {
    this.listacontas.push(conta);
    console.log("A conta foi cadastrada com sucesso!");
  }

  atualizar(conta: Conta): void {
    const buscaConta = this.buscarNoArray(conta.numero);

    if (buscaConta !== null) {
      this.listacontas[this.listacontas.indexOf(buscaConta)] = conta;
      console.log("A conta foi atualizada com sucesso!");
    } else {
      console.log("\nConta não encontrada para atualizar!");
    }
  }

  // Método auxiliar para buscar uma conta no array
  public buscarNoArray(numero: number): Conta | null {
    for (let conta of this.listacontas) {
      if (conta.numero === numero) {
        return conta;
      }
    }

    return null;
  }

  // Métodos não implementados ainda
  deletar(numero: number): void {

    const buscaConta =this.buscarNoArray(numero)

    if (buscaConta !== null) {
        this.listacontas.splice(this.listacontas.indexOf(buscaConta), 1);
        console.log("A conta foi deletada com sucesso!")
      } else {
        console.log("\nConta não encontrada para atualizar!");
      }
  }

  sacar(numero: number, valor: number): void {
    console.log("Método sacar não implementado.");
  }

  depositar(numero: number, valor: number): void {
    console.log("Método depositar não implementado.");
  }

  transferir(numeroOrigem: number, numeroDestino: number, valor: number): void {
    console.log("Método transferir não implementado.");
  }

  // Método para gerar um número único para as contas
  public gerarNumero(): number {
    return ++this.numero;
  }
}
