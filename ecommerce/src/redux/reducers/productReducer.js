const INITIAL_STATE = [
    {
        id: 1,
        name: 'PS4',
        price: 1000,
        quantity: 5
    },
    {
        id: 2,
        name: 'Mac',
        price: 100000,
        quantity: 2
    },
    {
        id: 3,
        name: 'Corote',
        price: 10,
        quantity: 10
    },
    {
        id: 4,
        name: 'Pizza',
        price: 10,
        quantity: 10
    }
]

export function productReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        default:
            return state
    }
}