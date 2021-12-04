import { ADD_TODOS, DELETE_TODOS, TOGGLE_TODO, UPDATE_TODO } from "./actionTypes";

export const initState = {
   
        todos: []
    
};

const todoReducer = (state = initState, { type, payload }) => {
   switch(type){
    case ADD_TODOS:
        // console.log(state);
        // return;
        return {...state, todos:[...state.todos, payload]};
    case DELETE_TODOS:
        let b = state.todos.filter((item)=> {return item.id !== payload});
        return {...state, todos:b};
    case UPDATE_TODO: 
        let c = state.todos.map((item)=> {return item.id === payload.id ? {...item, title: payload.title} : item}); 
        return {...state, todos:c};
    case TOGGLE_TODO:
        let d = state.todos.map((item)=> {return item.id === payload ? {...item, status: !item.status} : item});
        return {...state, todos:d};
    default :
        return {...state};
   }
}

export default todoReducer;