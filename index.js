const nomePetshop = "PETSHOP AVANADE";
var moment = require("moment");
let fs = require('fs');
const { min } = require("moment");
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
    // lista todos os pets cadastrados.
       
    console.log("Estes são os pets cadastrados:")
    bd.pets.forEach(function(pet) {
        console.log(pet.nome)
    });
        
    
};
// listarPets();

// PetBuscado já retorna o nome 
// encontrado retorna o objeto do pet


const buscarPet = PetBuscado => {  
    let encontrado = bd.pets.find(function(pet){
       return pet.nome === PetBuscado;
    });
  
    // return encontrado ? encontrado : `Nenhum pet encontrado com o nome ${Petbuscado}`
    
    if (encontrado) {
    
    console.log(`Pet encontrado, aqui estão as informações de ${PetBuscado}:`);
    console.log(`${PetBuscado} é um ${encontrado.tipo} da raça ${encontrado.raca} que pertence a(o) ${encontrado.tutor} . Hoje enontra-se com ${encontrado.idade} anos e pesa ${encontrado.peso} quilos.`);
    console.log(encontrado.vacinado ? `${PetBuscado} já está vacinado(a).` : `${PetBuscado} ainda não foi vacinado(a).`)
    } else {
        console.log(`${PetBuscado} não encontrado.`)
    }
    
};

buscarPet("Saturno")    


const filtrarTipoPet = tipoPet => {
    
    let filtrados = bd.pets.filter(pet => pet.tipo === tipoPet);
    
    console.log(`Aqui estão todos os pets do tipo ${tipoPet}:`)  
    filtrados.forEach(filtrado => {
        console.log(filtrado.nome)
      
    });
    
    
}

// filtrarTipoPet("cachorro")


const vacinarPet = pet => {
    // checa se um pet já se encontra vacinado e em caso negativo o vacina.
    if (!pet.vacinado){
        pet.vacinado = true;
        console.log(`${pet.nome} foi vacinado com sucesso!`);
        atualizarBanco();
    } else {
        console.log(`${pet.nome} já estava vacinado.`);
    }

}

const campanhaVacina = (pets) => { 
    console.log('Campanha de vacina 2021')
    console.log('vacinando...')

    let petVacinadosCampanha = 0

    bd.pets = bd.pets.map((pet) => {
        if (!pet.vacinado) {
            vacinarPet(pet);
            petVacinadosCampanha++;
        }

        return pet;
    })
    
    // const petsNaoVacinados = pets.filter(pets => pets.vacinado === false);
    // console.log(petsNaoVacinados)
    // pets.map(pet => vacinarPet(pet));
    
    console.log(`Pets vacinados nesta campanha campanha: ${petVacinadosCampanha}`);
    } 

// campanhaVacina(bd.pets);

const adicionarPet = (nome, tipo, idade, raca, peso, tutor, vacinado, servicos) =>{

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
    console.log(`Bem vindo, ${pet.nome}!`);
    servico(pet);
    console.log(`Até logo, ${pet.nome}!`)
}


const clientePremium = pet => {

    let nServicos = pet.servicos.length
    // const totalServicos = pet.servicos.map(x => x = 1);
   
    console.log((nServicos < 3) ? "Cliente não elegível para descontos." : "CLIENTE PREMIUM - Você tem direito a desconto.")
    }

clientePremium(bd.pets[0])



// adicionarPet("Saturno", "unicórnio", 12, "farolês", 600, "Luiz", false, [] )
// atenderCliente(bd.pets[0], darBanhoPet);

// adicionarPet({
//     "nome":"Nabo",
//     "tipo":"Cachorro",
//     "idade": 15,
//     "raca": "chihuaha",
//     "peso": 2,
//     "tutor": "Nereu", 
//     "vacinado": false, 
//     "servicos": []
//     } );




// atenderCliente(pets[1], apararUnhasPet);


// console.log("\n")
// for (const pet of pets) {
//     console.log(pet)
// }


// console.log(pets);

