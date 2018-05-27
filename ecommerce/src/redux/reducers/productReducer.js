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
    }
]

export function productReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        default:
            return state
    }
}