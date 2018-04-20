import React, { Component } from 'react'


class Form extends Component{


    render() {
        console.log('Form comp local:', this.props.location)
        
        return(
            <div>
                Form
            </div>
        )
    }
}

export default Form