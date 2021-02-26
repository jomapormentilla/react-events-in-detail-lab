// Code CoordinatesButton Component Here
import React from 'react'

class CoordinatesButton extends React.Component {
    render(){
        return(
            <div>
                <button onClick={(e)=>{this.props.onReceiveCoordinates([e.clientX, e.clientY])}}>Click</button>
            </div>
        )
    }
}

export default CoordinatesButton