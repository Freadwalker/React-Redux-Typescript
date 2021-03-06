import React from 'react';



interface TodoListItemProps {
    todo: {
        text: string,
        complete: boolean
    }
}

export const TodoListItem: React.FC<TodoListItemProps> = ({ todo }) => {
    return (<li><label><input type="checkbox" defaultChecked={todo.complete} onChange={() => { todo.complete = !todo.complete }} /> {todo.text} </label></li>)
}