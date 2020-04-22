import React, { Component } from 'react';
import { TodoListItem } from './todoListItem';
import { TodoProp } from '../../models/Todo';
import { addTodo, removeTodo } from '../../redux/todo/actions';

import { connect } from 'react-redux';
import { AppState } from '../../redux/reducers/index';


interface StateProps {
    todos: TodoProp[]
};

interface DispatchProps {
    addTodo: Function,
    removeTodo: Function
};

type Props = StateProps & DispatchProps;

class Todo extends Component<Props> {
    constructor(props: Props) {
        super(props);
        this.getList = this.getList.bind(this);
    }

    private getList(): Array<TodoProp> {
        let todos = this.props.todos;
        let todoContainer: Array<TodoProp> = [];
        todos.forEach(todo => {
            todoContainer.push(todo);
        })
        return todoContainer;
    }

    public render() {
        return (
            <div className="todo-wrapper">
                <button onClick={() => { this.props.addTodo("You clicked something") }}> Add</button>
                {this.props.todos.map(todo => {
                    return (< TodoListItem todo={todo} />);
                })}
                <ul className="todo-list">
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state: AppState): StateProps => {
    return {
        todos: state.todo
    }
};

const mapDispatchToProps = (dispatch: Function): DispatchProps => {
    return {
        addTodo: (todo: string) => dispatch(addTodo(todo)),
        removeTodo: (key: string) => dispatch(removeTodo(key))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Todo);