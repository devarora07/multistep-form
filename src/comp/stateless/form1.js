import React, { Component } from 'react'
import Button  from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

export default class form extends Component {
    state = {
        first: '',
        last: '',
    }

    onChange = (e) =>  {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onClick = (e) => {
        console.log("hello world")
    }

    render() {
        return (
            <div>
                <TextField name='first' label="First Name" value={this.props.value.first} onChange={this.props.onChange}/>
                <TextField name='last' label='Last Name' value={this.props.value.last} onChange={this.props.onChange} />
                <Button onClick={this.props.onNext} >Next</Button>
            </div>
        )
    }
}
