import { ADD_TODOS, DELETE_TODOS, TOGGLE_TODO, UPDATE_TODO } from "./actionTypes"

export const addTodos = (payload) => {
    return {
        type: ADD_TODOS,
        payload
    }
};

export const DeleteTodo = (payload) => {
    return {
        type: DELETE_TODOS,
        payload
    }
};

export const updateTodos = (payload) => {
    // console.log(payload);
    return {
        type: UPDATE_TODO,
        payload
    }
};

export const toggleTodo = (payload) => {
    return {
        type: TOGGLE_TODO,
        payload
    }
};