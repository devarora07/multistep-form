import React, { Component } from 'react'
import Button from '@material-ui/core/Button'

export default class form3 extends Component {
    render() {
        return (
            <div>
                
                <Button onClick={this.props.onPrev}>Prev</Button>
            </div>
        )
    }
}
