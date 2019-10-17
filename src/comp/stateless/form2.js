import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

export default class form2 extends Component {
    render() {
        return (
            <div>
                <TextField name="email" value={this.props.value.email} label="email" onChange={this.props.onChange} />
                <Button onClick={this.props.onPrev}>Prev</Button>
                <Button onClick={this.props.onNext}>Next</Button>
            </div>
        )
    }
}
