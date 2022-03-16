import React, { Component } from 'react';

class ChildCounter extends Component {
    state = { 
      
     } 
     handleIncrement = () => {
        console.log('handleIncrement')

        this.setState({value: this.state.counter + 1})
     }
    render() { 
        return (
            <div>
                #{this.state.value}
            
            <button onClick={() => this.props.onIncrement(this.props.id)}>+</button>

            </div>
        );
    }
}
 
export default ChildCounter;