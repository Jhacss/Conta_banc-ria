import readlinesync = require("readline-sync")
import { colors } from "./utill/Cores"
let opcao: number;

export function main() {

    while(true){
    menu()

    opcao = readlinesync.questionInt("digite uma opcao: ")

    if (opcao === 9) {
        about();
        process.exit(0)
    }}

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
function menu(): void {
    console.log(colors.bg.black, colors.fg.green)
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
}


function about(): void {
    console.log("**************************************")
    console.log("banco tilaska ele tilaska e tiroba")
    console.log("**************************************")
    console.log("Projeto desenvolvido por: João Henrique")
    console.log("git hub: https://github.com/Jhacss?tab=repositories")
}


main()