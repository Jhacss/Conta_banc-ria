import { Conta } from "../model/Conta";
import { ContaRpository } from "../repository/ContaRepository";

export class ContaController implements ContaRpository {

//Coleção Array que vai armazenar os objetos Conta
private listacontas = new Array<Conta>();

//Controlar os numeros das contas
public numero: number = 0;

    procurarPorNumero(numero: number): void {
       const buscaConta = this.buscarNoArray(numero);

       if(buscaConta !== null)
        buscaConta.visualizar()
        
        else{
        console.log("\n Conta não encontrada!")
        }


    }

    listarTodas(): void {
       for(let conta of this.listacontas){
        conta.visualizar();
       }
    }

    cadastrar(conta: Conta): void {
       this.listacontas.push(conta);
       console.log("A conta foi cadastrada com sucesso!")
    }

    atualizar(conta: Conta): void {
        throw new Error("Method not implemented.");
    }

    deletar(numero: number): void {
        throw new Error("Method not implemented.");
    }

    sacar(numero: number, valor: number): void {
        throw new Error("Method not implemented.");
    }

    depositar(numero: number, valor: number): void {
        throw new Error("Method not implemented.");
    }

    transferir(numeroOrigem: number, NumeroDestino: number, valor: number): void {
        throw new Error("Method not implemented.");
    }

    //métodos auxiliares

    public gerarNumero(): number{
        return ++this.numero;
    }

    public buscarNoArray(numero: number): Conta | null {
        for (let conta of this.listacontas){
            if(conta.numero === numero)
                return conta;
        }

        return null;
    }
}