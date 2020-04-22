import { ADD_TODO, REMOVE_TODO, TodoActionTypes } from './actionTypes';
import { TodoProp } from '../../models/Todo';


const initialState: TodoProp[] =
    [{ text: "This is not the best todo in the world, this is just a tribute", complete: false }]


export default function (state = initialState, action: TodoActionTypes): TodoProp[] {
    console.log(action);
    switch (action.type) {
        case ADD_TODO:
            console.log("ADD TODO is being executed my Lord");
            return [...state, { text: action.text, complete: false }];
        case REMOVE_TODO:
            return state;
        default:
            return state;
    }
}