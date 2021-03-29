const nomePetshop = "PETSHOP AVANADE";
var moment = require("moment");
let fs = require('fs');
let bd = fs.readFileSync('./db-pets.json'); // o sync espera finalizar a tarefa de ler o arquivo antes de avançar

bd = JSON.parse(bd);


const dataAgora = () => {
    let dataDoServico = moment().format("L - LTS")
    return dataDoServico
}

const atualizarBanco = () => {
    //conversão de objeto javascript para JSON
    let petsAtualizado = JSON.stringify(bd, null, 2); 
    //atualização do arquivo db.pets.json
    fs.writeFileSync('db-pets.json', petsAtualizado, 'utf-8'); //arquivo, conteúdo e formato

}

const listarPets = () => {
    // lista todos os pets com seus nomes, idades, tipos e raças. template string
   
    for(let pet of bd.pets){
        console.log(`O pet ${pet.nome}, tem ${pet.idade} anos, é um ${pet.tipo} da raça ${pet.raca}`);
        console.log(pet.vacinado ? "vacinado." : "não vacinado.")
    }
}

listarPets();

const vacinarPet = pet => {
    // checa se um pet já se encontra vacinado e em caso negativo o vacina.
    if (!pet.vacinado){
        pet.vacinado = true;
        console.log(`${pet.nome} foi vacinado com sucesso!`)
    } else {
        console.log(`${pet.nome} já estava vacinado.`)
    }

}

const campanhaVacina = () => { 
    //cria uma lista através de um filtro, apenas com os que não estão vacinados, a percorre e vacina quem não estiver
    console.log('Campanha de vacina 2020')
    console.log('vacinando...')

    petsVacinados = bd.pets.filter(pets => bd.pets.vacinado === false); //TODO
    
    for(let pet of bd.pets){
        vacinarPet(pet);
       
        }
        console.log(`Pets vacinados nesta campanha campanha: ${petsVacinados.length}`);
    } 

const adicionarPet = novoPet =>{
    bd.pets.push(novoPet);
    atualizarBanco();
    console.log(`${novoPet.nome} foi adicionado com sucesso!`)
    
}

const darBanhoPet = (pet) => {
    
    pet.servicos.push({
        servico: "banho",
        data: `${dataAgora()}`
        });
    atualizarBanco();
    console.log(`${pet.nome} tomou banho no dia ${dataAgora()}!`);
    
}

const tosarPet = (pet) => {
        
    pet.servicos.push({
        servico: "tosa",
        data: `${dataAgora()}`
        });
    atualizarBanco();
    console.log(`${pet.nome} foi tosado no dia ${dataAgora()}!`);
    
}          

const apararUnhasPet = (pet) => {
    
    pet.servicos.push({
        servico: "aparar unhas",
        data: `${dataAgora()}`
        });
    atualizarBanco();
    console.log(`${pet.nome} teve suas unhas aparadas em ${dataAgora()}!`);
    
}

const atenderCliente = (pet, servico) => {
    servico(pet);
}


adicionarPet({
    "nome":"Nabo",
    "tipo":"Cachorro",
    "idade": 15,
    "raca": "chihuaha",
    "peso": 2,
    "tutor": "Nereu", 
    "vacinado": false, 
    "servicos": []
    } );

// atenderCliente(pets[0], darBanhoPet);
// atenderCliente(pets[1], apararUnhasPet);


// console.log("\n")
// for (const pet of pets) {
//     console.log(pet)
// }


// console.log(pets);

