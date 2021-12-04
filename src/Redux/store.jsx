import todoReducer from "./Todos/reducer";
import { createStore } from 'redux';

export const store = createStore(todoReducer);