
const nomePetshop = "PETSHOP AVANADE";

let pets = [
        {
            nome: 'Siegfried',
            tipo: 'cachorro',
            idade: 7,
            raca: 'Doberman',
            peso: 30,
            tutor: 'Luiz',
            vacinado: false,
            servicos: ['banho', 'tosa']

        },
        {
            nome: 'Saori',
            tipo: 'cachorro',
            idade: 3,
            raca: 'Pastor Belga',
            peso: 25,
            tutor: 'Marcos',
            vacinado: false,
            servicos: ['banho']
    
        },
        {
            nome: 'Iron',
            tipo: 'cachorro',
            idade: 5,
            raca: 'Pastor Belga',
            peso: 30,
            tutor: 'Joaquim',
            vacinado: false,
            servicos: ['banho', 'aparar unhas']
           
        },

        {
            nome: 'Herbert',
            tipo: 'cachorro',
            idade: 28,
            raca: 'Miniatura Pinscher, 50% ódio, 50% tremedeira',
            peso: 65,
            tutor: 'João',
            vacinado: false,
            servicos: []
    
        }
];

const listarPets = () => {
    // lista todos os pets com seus nomes, idades, tipos e raças.
   
    for(let pet of pets){
        console.log(`O pet ${pet.nome}, tem ${pet.idade} anos, é um ${pet.tipo} da raça ${pet.raca}`);
    }
}

//listarPets();

const vacinarPet = (pet) => {
    // checa se um pet já se encontra vacinado e em caso negativo o vacina.
    if (!pet.vacinado){
        pet.vacinado = true;
        console.log(`${pet.nome} foi vacinado agora.`)
    } else {
        console.log(`${pet.nome} já estava vacinado.`)
    }

}

//vacinarPet(pets[3]);

const campanhaVacina = () => { 
    //cria uma lista através de um filtro, apenas com os que não estão vacinados, a percorre e vacina quem não estiver

    petsVacinados = pets.filter(pets => pets.vacinado === false);
    for(let pet of pets)
        vacinarPet(pet);
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

const dataAgora = () => {
    var moment = require("moment");
    let dataDoServico = moment().format("MM-DD-YYYY")
    return dataDoServico
}


const darBanhoPet = (pet) => {
    
    pet.servicos.push(`banho em ${dataAgora()}`)
    console.log(`${pet.nome} tomou banho no dia ${dataAgora()}!`);
    
}

const tosarPet = (pet) => {
        
    pet.servicos.push(`tosa em ${dataAgora()}`)
    console.log(`${pet.nome} foi tosado no dia ${dataAgora()}!`);
    
}

const apararUnhasPet = (pet) => {
    
    pet.servicos.push(`aparar unhas em ${dataAgora()}`)
    console.log(`${pet.nome} teve suas unhas aparadas em ${dataAgora()}!`);
    
}

darBanhoPet(pets[3]);

tosarPet(pets[3]);

apararUnhasPet(pets[3]);

console.log(pets);

