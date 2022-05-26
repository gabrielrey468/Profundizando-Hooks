console.log('Hola mundo es Gabriel')

const initialState = [{
    id: 1,
    todo: 'Comprar Pan',
    donde: false
}]

const todoReducer = ( state = initialState, action ) => {

    if(action?.type === 'mensaje recibido') {
        return [...state, action.payload]
    }
    
    return state
}

let todos = todoReducer()

const newTodo = {
    id: 2,
    todo: 'Comprar Leche',
    donde: false
}

const agregarTodoAction = {
    type: 'mensaje recibido',
    payload: newTodo
}

todos = todoReducer( todos, agregarTodoAction )

console.log(todos)