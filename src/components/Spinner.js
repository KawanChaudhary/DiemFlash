import React, { Component } from 'react'
import Snake from './Snake.gif'

export class Spinner extends Component {
    render() {
        return (
            <div className="text-center my-4">
                <img src={Snake} alt="Loading" width="30" height="30" /> 
            </div>
        )
    }
}

export default Spinner