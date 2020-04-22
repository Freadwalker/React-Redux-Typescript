import React, { Component } from 'react'

interface StateProps {

}
interface DispatchProps {

}

interface ComponentProps {
    onClick: Function,
    value: string
}

type Props = StateProps & DispatchProps & ComponentProps;

export default class addButton extends Component<Props> {

    public render() {
        return (
            <div className ="addButton-Wrapper">
                <button onClick = {()=> this.props.onClick(this.props.value)}className ="addButton">+</button>
            </div>
        )
    }
}
