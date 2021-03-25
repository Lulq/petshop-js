
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
            servicos: ['banho', 'corte de unha']
           
        },

        {
            nome: 'Herbert',
            tipo: 'cachorro',
            idade: 28,
            raca: 'Miniatura Pinscher, 50% ódio, 50% tremedeira',
            peso: 65,
            tutor: 'João',
            vacinado: false,
            servicos: ['banho', 'corte de unha','depilação']
    
        }
];

const listarPets = () => {
    // for(let i = 0; i <pets.length; i++){
    //     // console.log(pets[i].nome + " " + pets[i].raca);
    //     console.log(`O nome do pet é ${pets[i].nome} e a raça é ${pets[i].raca}`)
      
    // }

    for(let pet of pets){
        console.log(`${pet.nome}, ${pet.idade}, ${pet.tipo}, ${pet.raca}`);
    }
}

//listarPets();

const vacinarPet = (pet) => {
    if (!pet.vacinado){
        pet.vacinado = true;
        console.log(`${pet.nome} foi vacinado`)
    } else {
        console.log(`${pet.nome} já estava vacinado`)
    }

}

vacinarPet(pets[3]);

const campanhaVacina = (nomePetshop) => { 
    var vacinadoCampanha = 0;
    for(let pet of pets){
        if (!pet.vacinado)  vacinadoCampanha++;
        vacinarPet(pet);
        
        }
        console.log(`Pets vacinados na campanha: ${vacinadoCampanha}`);
    } 


campanhaVacina(pets);



