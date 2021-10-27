//[x] Faça um programa que SOME 2 números
console.log("2+3=", 2 + 3);


//[x] Faça um programa que multiplique 2 números e o resultado adicione 10
console.log("(3 * 5) + 10 =", (3 * 5) + 10);


//[x] Faça um programa que encontre a raiz quadrada de um número, multiplique o
// resultado por 10 e divida por 33
console.log("(Math.sqrt(10.89)) * 10 / 33 =", (Math.sqrt(10.89)) * 10 / 33)


//[x] Faça um programa que inicie com dois nomes, e o programa imprima na 
//tela o seguinte dado: Olá, meu nome é (nome 1) e meu partner do CodeClub é (nome2)
let meuNome = "Welder"
let nomeMeuPartner = "Kauan"
console.log(`Olá, meu nome é ${meuNome} e meu partner do CodeClub é o ${nomeMeuPartner}`);


//[x] Faça um programa que imprima na tela se um nome é igual ao 
//outro nome digitado. Ex: João e João, imprime true. João e Maria,imprime false.

function redirecionar() {
    let VarRedirecionar = document.getElementById("idRedirecionar").value
    if (VarRedirecionar == 1) {
        igual()
    }
    else {
        if (VarRedirecionar == 2) {
            diferente()
        } else {
            if (VarRedirecionar == 3) {
                igualArray()
            } else {
                if (VarRedirecionar == 4) {
                    diferenteArray()
                } else {
                    if (VarRedirecionar == 5) {
                        igualDoisObjects()
                    } else {
                        igualUmObject()
                    }
                }
            }
        }
    }
}

function igual() {
    let nomeOne = document.getElementById("nome1").value
    let nomeTwo = document.getElementById("nome2").value
    let resultado1 = (nomeOne == nomeTwo)
    console.log(resultado1);
}

//[x] Faça um programa que imprima na tela se um nome é diferente ao 
//outro nome digitado.Ex: João e João, imprime false.João e Maria, imprime true.

function diferente() {
    let nomeOne = document.getElementById("nome1").value
    let nomeTwo = document.getElementById("nome2").value
    let resultado1 = (nomeOne != nomeTwo)
    console.log(resultado1);
}

//[x] Faça um programa que imprima na tela se um nome é igual ao outro nome digitado.
//Porém, os dois nomes devem estar em um Array.
//Ex: const array = ["João", "Maria"].João e João, imprime true.João e Maria, imprime false.

function igualArray() {
    let Array1 = []
    Array1.push(document.getElementById("nome1").value, document.getElementById("nome2").value)
    let resultado1 = (Array1[0] == Array1[1])
    console.log(resultado1);
}

//[x] Faça um programa que imprima na tela se um nome é diferente ao outro nome digitado.
//Porém, os dois nomes devem estar em um Array.Ex: const array = ["João", "Maria"].
//João e João, imprime false.João e Maria, imprime true.

function diferenteArray() {
    let Array1 = []
    Array1.push(document.getElementById("nome1").value, document.getElementById("nome2").value)
    let resultado1 = (Array1[0] != Array1[1])
    console.log(resultado1);
}

//[x] Crie 5 Objetos, neles devem conter os dados de 5 pessoas que
// você conhece.Mínimo 5 dados por pessoa.

const person1 = {
    firstName: "Welder",
    lastName: "Melo",
    age: 17,
    eyeColor: "brown",
    job: "student"
}
const person2 = {
    firstName: "Felomena",
    lastName: "Barroso",
    age: 55,
    eyeColor: "brown",
    job: "businesswoman"
}
const person3 = {
    firstName: "William",
    lastName: "Melo",
    age: 22,
    eyeColor: "brown",
    job: "student"
}
const person4 = {
    firstName: "Adrielly",
    lastName: "Carvalho",
    age: 18,
    eyeColor: "brown",
    job: "student"
}
const person5 = {
    firstName: "Filipe",
    lastName: "Brito",
    age: 17,
    eyeColor: "brown",
    job: "student"
}

//[x] Faça um programa que imprima na tela se um nome é igual ao outro nome digitado.
//Porém, os dois nomes devem estar em dois objetos separados.
//Ex: const object1 = { name: "João" }, object1 = { name: "Maria" }.
//João e João, imprime true.João e Maria, imprime false.
function igualDoisObjects() {
    const person6 = { firstName: document.getElementById("nome1").value }
    const person7 = { firstName: document.getElementById("nome2").value }
    console.log(person6.firstName == person7.firstName);
}
//[x] Faça um programa que imprima na tela se um nome é igual ao outro nome digitado.
// Porém, os dois nomes devem estar em um objeto. Ex: const object1 = {firstName:"João", seccondName:"Maria"}.
// João e João, imprime true. João e Maria, imprime false.
function igualUmObject() {
    const person8 = {
        firstName: document.getElementById("nome1").value,
        secondName: document.getElementById("nome2").value
    }
    console.log(person8.firstName == person8.secondName);
}

//[] Faça um programa onde toda vez que ele rodar, coloca na tela um número aleatório entre 1 e 100.

console.log(Math.ceil(Math.pow(10, 2) * Math.random()));
