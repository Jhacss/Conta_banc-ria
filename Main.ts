import readlinesync = require("readline-sync")
import { colors } from "./src/utill/Cores"
import { ContaCorrente } from "./src/model/ContaCorrente";
import { ContaPoupanca } from "./src/model/ContaPoupança";
import { ContaController } from "./src/controller/ContaControler";

export function main() {
    let opcao, numero, agencia, tipo, saldo, limite, aniversario, numeroDestino, valor: number;
    let titular: string;
    const tipoContas = [`Conta Corrente`, `Conta poupança`];

        //criando um objeto da classe ContaController
        const contas = new ContaController();

    //Novas Instâncias da Classe ContaCorrente (Objetos)
    contas.cadastrar(new ContaCorrente(contas.gerarNumero(), 1234, 1, 'Amanda Magro', 1000000.00, 100000.00));
    contas.cadastrar(new ContaCorrente(contas.gerarNumero(), 4578, 1, 'João da Silva', 1000.00, 100.00));
 
    // Novas Instâncias da Classe ContaPoupança (Objetos)
    contas.cadastrar(new ContaPoupanca(contas.gerarNumero(), 5789, 2, "Geana Almeida", 10000, 10));
    contas.cadastrar(new ContaPoupanca(contas.gerarNumero(), 5698, 2, "Jean Lima", 15000, 15));
    
    
    


    while (true) {
        menu()

        opcao = readlinesync.questionInt("digite uma opcao: ")

        if (opcao === 0) {
            about();
            process.exit(0)
        }


        switch (opcao) {
            case 1:
                console.log("criar conta ")
               
               
                console.log("digite o número da agência: ");
                agencia = readlinesync.questionInt("");

                console.log("digite o nome do titular: ");
                titular = readlinesync.question("");
                
                console.log("escolha o tipo da conta: ");
                tipo = readlinesync.keyInSelect(tipoContas, "", {cancel: false}) +1;

                console.log(" Digite o saldo da conta: ");
                saldo = readlinesync.questionFloat(``);

                switch(tipo){
                    case 1:
                        console.log(" Digite o limite da conta: ");
                        limite = readlinesync.questionFloat(``);
                        contas.cadastrar(new ContaCorrente(contas.gerarNumero(), agencia, tipo, titular, saldo, limite))

                    break;
                    case 2:
                        console.log("digite o dia do aniversario da poupanca: ");
                aniversario = readlinesync.questionInt("");
                contas.cadastrar(new ContaPoupanca(contas.gerarNumero(), agencia, tipo, titular, saldo, aniversario))
                keyPress()
                    break;
                }

             keyPress()
                break;

            case 2:
                console.log("listar todas as contas: ")
                contas.listarTodas()
                keyPress()
                break;

            case 3:
                console.log("buscar conta por numero: ")

                console.log("Digite o numero da conta: ");
                numero = readlinesync.questionInt("");

                contas.procurarPorNumero(numero);

                break;

            case 4:

                console.log("Digite o numero da conta: ");
                numero = readlinesync.questionInt("");

            let conta = contas.buscarNoArray(numero);

            if(conta !== null){

                console.log("atualizar dados da conta: ")
                console.log("digite o novo número da agência: ");
                agencia = readlinesync.questionInt("");

                console.log("digite o novo nome do titular: ");
                titular = readlinesync.question("");
                
                console.log(" Digite o novo saldo da conta: ");
                saldo = readlinesync.questionFloat(``);

                tipo = conta.tipo;

                switch(tipo){
                    case 1:
                        console.log(" Digite o novo limite da conta: ");
                        limite = readlinesync.questionFloat(``);
                        contas.atualizar(new ContaCorrente(numero, agencia, tipo, titular, saldo, limite))

                    break;
                    case 2:
                        console.log("digite o novo dia do aniversario da poupanca: ");
                aniversario = readlinesync.questionInt("");
                contas.cadastrar(new ContaPoupanca(contas.gerarNumero(), agencia, tipo, titular, saldo, aniversario))
                keyPress()
                    break;
                }
            }else{
                console.log("conta não encontrada!")
            }
                break;

            case 5:
                console.log("apagar conta: ")
                console.log("Digite o numero da conta: ");
                numero = readlinesync.questionInt("");

                contas.deletar(numero);
                break;

            case 6:
                console.log("sacar: ")
                
                console.log("Digite o numero da conta: ");
                numero = readlinesync.questionInt("");

                console.log("Digite o valor do saque: ");
                valor = readlinesync.questionFloat("");

                contas.sacar(numero, valor);
                break;

            case 7:
                console.log("depositar: ")

                console.log("Digite o numero da conta: ");
                numero = readlinesync.questionInt("");

                console.log("Digite o valor do depósito: ");
                valor = readlinesync.questionFloat("");

                contas.depositar(numero, valor);
                break;

            case 8:
                console.log("transferir valores entre contas ")

                console.log("Digite o numero da conta de origem: ");
                numero = readlinesync.questionInt("");

                console.log("Digite o numero da conta de estino: ");
                numeroDestino = readlinesync.questionInt("");

                console.log("Digite o valor da transferência: ");
                valor = readlinesync.questionFloat("");

                contas.transferir(numero, numeroDestino, valor);

                keyPress()

                break;
                
                case 9:
                    console.log("Consulta por nome do titular:")
                    console.log("digite o nome do titular: ")
                    titular = readlinesync.question("")

                    contas.procurarPorTitular(titular);

                    keyPress()
                    break;

        }
    }
}
function menu(): void {
    console.log(colors.fg.blue)
    console.log("\n**************************************\n")

    console.log("*             bank create             *\n")

    console.log("**************************************")
    console.log("1 - criar conta                      *")
    console.log("2 - listar todas as contas           *")
    console.log("3 - buscar conta por numero          *")
    console.log("4 - atualizar dados da conta         *")
    console.log("5 - apagar conta                     *")
    console.log("6 - sacar                            *")
    console.log("7 - depositar                        *")
    console.log("8 - transferir valores entre contas  *")
    console.log("9 - buscar por titular               *")
    console.log("0 - sair                             *")
    console.log("**************************************")
    console.log(colors.reset)
}



function about(): void {
    console.log(colors.fg.blue)
    console.log("**************************************")
    console.log("bank created for you")
    console.log("**************************************")
    console.log("Projeto desenvolvido por: João Henrique")
    console.log("git hub: https://github.com/Jhacss?tab=repositories")
    console.log(colors.reset)
}

function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}

main()