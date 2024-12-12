import readlinesync = require("readline-sync")
import { colors } from "./src/utill/Cores"
import { Conta } from "./src/model/Conta"
import { ContaCorrente } from "./src/model/ContaCorrente";
import { ContaPoupanca } from "./src/model/ContaPoupança";

export function main() {
    let opcao: number;

const cp2 = new ContaPoupanca (4, 222, 2, "josealdo", 200000, 2)

cp2.visualizar();
    
 const cc1 = new ContaCorrente (3, 789, 1, "andressa", 100000, 1000);
 cc1.visualizar();

 cc1.sacar(100500);
 cc1 .visualizar();

 cc1.depositar(2000);
 cc1.visualizar();

    //cria novas instancias(objetos) da classe conta
   const conta1 = new Conta(1, 123, 1, "Joao", 10000)
   conta1.visualizar()

    //deposito
    conta1.depositar(1200)
    conta1.visualizar()
    
    const conta2 = new Conta(2, 456, 1, "Jose", 20000)
    conta2.visualizar()
   
    //saque
    console.log(conta2.sacar(200))
    conta2.visualizar()

    




    while (true) {
        menu()

        opcao = readlinesync.questionInt("digite uma opcao: ")

        if (opcao === 9) {
            about();
            process.exit(0)
        }


        switch (opcao) {
            case 1:
                console.log("criar conta ")
                break;

            case 2:
                console.log("listar todas as contas: ")
                break;

            case 3:
                console.log("buscar conta por numero: ")
                break;

            case 4:
                console.log("atualizar dados da conta: ")
                break;

            case 5:
                console.log("apagar conta: ")
                break;

            case 6:
                console.log("sacar: ")
                break;

            case 7:
                console.log("depositar: ")
                break;

            case 8:
                console.log("transferir valores entre contas ")
                break;
        }
    }
}
function menu(): void {
    console.log(colors.fg.blue)
    console.log("\n**************************************\n")

    console.log("*         banco tilaska              *\n")

    console.log("**************************************")
    console.log("1 - criar conta                      *")
    console.log("2 - listar todas as contas           *")
    console.log("3 - buscar conta por numero          *")
    console.log("4 - atualizar dados da conta         *")
    console.log("5 - apagar conta                     *")
    console.log("6 - sacar                            *")
    console.log("7 - depositar                        *")
    console.log("8 - transferir valores entre contas  *")
    console.log("9 - sair                             *")
    console.log("**************************************")
    console.log(colors.reset)
}



function about(): void {
    console.log(colors.fg.blue)
    console.log("**************************************")
    console.log("banco tilaska ele tilaska e tiroba")
    console.log("**************************************")
    console.log("Projeto desenvolvido por: João Henrique")
    console.log("git hub: https://github.com/Jhacss?tab=repositories")
    console.log(colors.reset)
}


main()