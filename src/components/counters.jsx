import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
  image = [
    "/Assets/Images/earphone.jpg",
    "/Assets/Images/iphone12.jpg",
    "/Assets/Images/GalaxyM22.jpg",
    "/Assets/Images/sandisk-external-ssd.webp"
  ]

    render() { 
        console.log("Counters - Rendered");

        const {onReset, counters, onDelete, onIncrement, onDecrement, pics} = this.props;

        return (
        <div>
            <button onClick={onReset} className="btn btn-primary btn-sm m-2">
                Reset
            </button>

            {counters.map( count => (
                <Counter 
                    key={count.id}
                    id={count.id}
                    onDelete={onDelete}
                    onIncrement={onIncrement}
                    onDecrement={onDecrement} 
                    counter={count}
                    pics={this.image} >
                        <h4>Item - {count.id}</h4>
                </Counter>
            ))}
        </div>
        );
    }
}
 
export default Counters;