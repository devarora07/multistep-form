import React, { Component } from 'react'
import Button from '@material-ui/core/Button'

export default class start extends Component {
    render() {
        return (
            <div>
                <h1>Hello let's start with some Inroduction.</h1>
                <Button onClick={this.props.onNext} >Start</Button>
            </div>
        )
    }
}
