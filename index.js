
const nomePetshop = "PETSHOP AVANADE";

var pets = require("./db-pets.json")
      

const listarPets = () => {
    // lista todos os pets com seus nomes, idades, tipos e raças. template string
   
    for(let pet of pets){
        console.log(`O pet ${pet.nome}, tem ${pet.idade} anos, é um ${pet.tipo} da raça ${pet.raca}`);
    }
}

//listarPets();

const vacinarPet = pet => {
    // checa se um pet já se encontra vacinado e em caso negativo o vacina.
    if (!pet.vacinado){
        pet.vacinado = true;
        console.log(`${pet.nome} foi vacinado com sucesso!`)
    } else {
        console.log(`${pet.nome} já estava vacinado.`)
    }

}

//vacinarPet(pets[3]);

const campanhaVacina = () => { 
    //cria uma lista através de um filtro, apenas com os que não estão vacinados, a percorre e vacina quem não estiver
    console.log('Campanha de vacina 2020')
    console.log('vacinando...')

    petsVacinados = pets.filter(pets => pets.vacinado === false);
    
    for(let pet of pets){
        vacinarPet(pet);
       
        }
        console.log(`Pets vacinados nesta campanha campanha: ${petsVacinados.length}`);
    } 


campanhaVacina(pets);


const insereCliente = (nome, tipo, idade, raca, peso, tutor, vacinado, servicos) => {
    novoPet = {
        nome: nome,
        tipo: tipo,
        idade: idade,
        raca: raca,
        peso: peso,
        tutor: tutor,
        vacinado: vacinado,
        servicos: servicos
    }

    pets.push(novoPet);
    console.log(`${novoPet.nome} inserido com sucesso.`)
}

insereCliente("Diego","Divindade",33,"Cristo",555,"Deus", true, [])

var moment = require("moment");

const dataAgora = () => {
    let dataDoServico = moment().format("L - LTS")
    return dataDoServico
}


const darBanhoPet = (pet) => {
    
    pet.servicos.push({
        servico: "banho",
        data: `${dataAgora()}`
        });
       
    console.log(`${pet.nome} tomou banho no dia ${dataAgora()}!`);
    
}

const tosarPet = (pet) => {
        
    pet.servicos.push({
        servico: "tosa",
        data: `${dataAgora()}`
        });
    console.log(`${pet.nome} foi tosado no dia ${dataAgora()}!`);
    
}

const apararUnhasPet = (pet) => {
    
    pet.servicos.push({
        servico: "aparar unhas",
        data: `${dataAgora()}`
        });
    console.log(`${pet.nome} teve suas unhas aparadas em ${dataAgora()}!`);
    
}

const atenderCliente = (pet, servico) => {
    servico(pet);
}


atenderCliente(pets[0], darBanhoPet);
atenderCliente(pets[1], apararUnhasPet);


// console.log("\n")
// for (const pet of pets) {
//     console.log(pet)
// }





// darBanhoPet(pets[3]);

// tosarPet(pets[3]);

// apararUnhasPet(pets[3]);

//console.log(pets);

