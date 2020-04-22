import { ADD_TODO,REMOVE_TODO, TodoActionTypes} from './actionTypes';

export function addTodo(text: string): TodoActionTypes {
    console.log("hallo Bruschetta")
    return{
        type: ADD_TODO,
        text
    }
}

export function removeTodo(key: string):TodoActionTypes {
    return{
        type: REMOVE_TODO,
        key
    }
}