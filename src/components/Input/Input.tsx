import React, { Component } from 'react'
import { addTodo } from '../../redux/todo/actions';
import { connect} from 'react-redux';
import AddButton from '../elements/addButton/addButton';

interface DispatchProps {
    addTodo: Function,
};


interface State {
    todoValue: string
}
type Props = DispatchProps
class Input extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            todoValue: ""
        }
        this.handleChange = this.handleChange.bind(this);
    }
    public handleChange = (event: React.FormEvent<HTMLInputElement>) => {
        console.log(event.currentTarget.value)
        this.setState({ todoValue: event.currentTarget.value })
    }
    public render() {
        return (
            <div>
                <input type="text" value={this.state.todoValue} data-test="component-input" name="todoValue" onChange={this.handleChange} />
                <AddButton onClick = {this.props.addTodo} value = {this.state.todoValue}/>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch: Function): DispatchProps => {
    return {
        addTodo: (todo: string) => dispatch(addTodo(todo)),
    }
};

export default connect( null, mapDispatchToProps)(Input);