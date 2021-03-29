let fs = require('fs'); //filesystem - modulo nativo

// pega o conteudo do arquivo e converte para utf-8

let bd = fs.readFileSync('db-pets.json', 'utf-8')

console.log(typeof bd);

// converte o conteudo de string pra objeto

bd = JSON.parse(bd);

console.log(typeof bd)

console.log(bd)


bd.push({
    "nome": "Ada",
    "tipo": "cachorro"
    "idade": 8,
    "raca":"Pastor Alemão"
    "peso":20,

})


let petsAtualizado = JSON.stringify(bd);

fs.writeFileSync("bd.json", petsAtualizado, "utf-8");