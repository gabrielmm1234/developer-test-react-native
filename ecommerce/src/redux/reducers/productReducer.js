const INITIAL_STATE = [
    {
        id: 1,
        name: 'PS4',
        price: 1000,
        quantity: 5,
        description: 'Video game foda'
    },
    {
        id: 2,
        name: 'Mac',
        price: 100000,
        quantity: 2,
        description: 'Computador caro'
    },
    {
        id: 3,
        name: 'Corote',
        price: 1,
        quantity: 10,
        description: 'Álcool barato'
    },
    {
        id: 4,
        name: 'Pizza',
        price: 10,
        quantity: 10,
        description: 'Pizza é vida'
    },
    {
        id: 5,
        name: 'Coca-Cola',
        price: 10,
        quantity: 7,
        description: 'Coca-cola é top'
    },
    {
        id: 6,
        name: 'Campus Party',
        price: 200,
        quantity: 7,
        description: 'Campus Party Brasília 2018'
    },
    {
        id: 7,
        name: 'Iphone',
        price: 3000,
        quantity: 50,
        description: 'Iphone X preto'
    },
    {
        id: 8,
        name: 'Notebook Dell',
        price: 2500,
        quantity:15,
        description: 'Notebook Dell preto 15 polegadas'
    },
    {
        id: 9,
        name: 'Sticker React',
        price: 10,
        quantity: 3,
        description: 'Adesivo para computador do React'
    },
    {
        id: 10,
        name: 'Hamburguer',
        price: 20,
        quantity: 100,
        description: 'Hamburguer delicioso'
    },
    {
        id: 11,
        name: 'Ingresso The Conf',
        price: 400,
        quantity: 7000,
        description: 'The Conf 2018'
    },
    {
        id: 12,
        name: 'Curso Udemy React Native',
        price: 19.99,
        quantity: 1000000,
        description: 'Aprender React Native e Redux'
    },
    {
        id: 13,
        name: 'Fone de ouvido',
        price: 50,
        quantity: 200,
        description: 'Fone de ouvido beats'
    },
    {
        id: 14,
        name: 'Mouse sem fio',
        price: 50,
        quantity: 100,
        description: 'Mouse sem fio com pilha recarregável'
    }
]

export function productReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        default:
            return state
    }
}