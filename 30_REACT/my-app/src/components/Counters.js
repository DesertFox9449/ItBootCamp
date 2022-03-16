import React, { Component } from "react";
import  ChildCounter from "./ChildCounters";
class Counters extends Component {
    state = { 
        counters: [
            {id: 0, value: 0},
            {id: 1, value: 1},
            {id: 2, value: 2},
            {id: 3, value: 3},
        ]
     }

     handleIncrement = (id) => {
         console.log(id);

        // spread operator
         const counters = [...this.state.counters]; 
         this.setState({
             counters: this.state.counters.map((item) => {
                 return item.id === id ? {...item, value: item}
             })
         })
     }

    render() {
        return (
            <div>
                {this.state.counters.map((counter) => (
                    <ChildCounter 
                    key={counter.id} 
                    id={counter.id} 
                    value={counter.value} 
                    onIncrement={this.handleIncrement}
                    ></ChildCounter>
                ))}
            </div>
            
        );
    }
}
export default Counters;