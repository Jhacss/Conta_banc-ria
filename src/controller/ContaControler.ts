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
//metodos bancarios
  sacar(numero: number, valor: number): void {
    const buscaConta =this.buscarNoArray(numero)

    if (buscaConta !== null) {
       if(buscaConta.sacar(valor) === true)

       console.log("O saque foi efetuado com sucesso!")
      } else {
        console.log("\nConta não encontrada para atualizar!");
      }
  }

  depositar(numero: number, valor: number): void {
    const buscaConta =this.buscarNoArray(numero)

    if (buscaConta !== null) {
       buscaConta.depositar(valor)

       console.log("O Deposito foi efetuado com sucesso!")
      } else {
        console.log("\nConta não encontrada!");
      }
  }
  

  transferir(numeroOrigem: number, numeroDestino: number, valor: number): void {
 
 const contaOrigem = this.buscarNoArray(numeroOrigem)
  const contaDestino = this.buscarNoArray(numeroDestino)

  if (contaOrigem !== null && contaDestino !== null){
    if(contaOrigem.sacar(valor) === true){
        contaDestino.depositar(valor);
        console.log("A transferencia foi efetuada com sucesso!");
    }else{
        console.log("\n conta de origem e/ou conta de destonos não encontrada!")
    }
    
  }
  
  }

  // Método para gerar um número único para as contas
  public gerarNumero(): number {
    return ++this.numero;
  }
}
