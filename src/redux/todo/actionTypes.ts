export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";

interface ADD_TODO {
    type: typeof ADD_TODO,
    text: string
}

interface REMOVE_TODO {
    type: typeof REMOVE_TODO,
    key: string
}

export type TodoActionTypes = ADD_TODO | REMOVE_TODO;