import React, { Component } from 'react'
import { Button } from '@material-ui/core'
import Form1 from './form1'
import Form2 from './form2'
import Form3 from './form3' 
import Start from './start'

export default class formMain extends Component {
    state = {
        step: 1,
        first: '',
        last: '',
        email: '',
        twitter: ''
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onNext = (e) => {
        const {step} = this.state
        this.setState({
            step: step+1
        })
    }

    onPrev = (e) => {
        const{step} = this.state
        this.setState({
            step: step-1
        })
    }

    render() {

        switch(this.state.step){
        case 1:
        return (
            <div>
               <Start onNext={this.onNext} onChange={this.onChange} value={this.state} onPrev={this.onPrev} /> 
            </div>
        )
        case 2: return(
            <div>
                <Form1 onNext={this.onNext} onChange={this.onChange} value={this.state} onPrev={this.onPrev} />
            </div>
        )
        case 3: return (
            <div>
                <Form2 onNext={this.onNext} onChange={this.onChange} value={this.state}  onPrev={this.onPrev}/>
            </div>
        )
        case 4 : return (
            <div>
                <Form3 onNext={this.onNext} onChange={this.onChange} value={this.state}  onPrev={this.onPrev}/>

            </div>
        )
    }
}

}