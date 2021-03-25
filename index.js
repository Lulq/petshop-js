
const nomePetshop = "PETSHOP AVANADE";

let pets = [
        {
            nome: 'Siegfried',
            tipo: 'cachorro',
            idade: 7,
            raca: 'Doberman',
            peso: 30,
            tutor: 'Luiz',
            vacinado: true,
            servicos: ['banho', 'tosa']

        },
        {
            nome: 'Saori',
            tipo: 'cachorro',
            idade: 3,
            raca: 'Pastor',
            peso: 25,
            tutor: 'Marcos',
            vacinado: true,
            servicos: ['banho']
    
        },
        {
            nome: 'Iron',
            tipo: 'cachorro',
            idade: 5,
            raca: 'Pastor',
            peso: 30,
            tutor: 'Joaquim',
            vacinado: true,
            servicos: ['banho', 'corte de unha']
    
        }
];

const listarPets = () => {
    for(let i = 0; i <pets.length; i++){
        console.log(pets[i].nome);
    }
}

listarPets()
// console.log(pet);




