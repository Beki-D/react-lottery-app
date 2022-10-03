import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    i=0;

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
                    onDelete={onDelete}
                    onIncrement={onIncrement}
                    onDecrement={onDecrement} 
                    counter={count}
                    pics={pics} >
                        <h4>Item - {count.id}</h4>
                        <img 
                            src={this.image[count.id - 1]}
                            alt="item_image"
                            style={{ height: "70px", paddingRight: "10px" }} 
                            />
                            { (this.i<4) ? this.i++ : "" } 
                </Counter>
            ))}
        </div>
        );
    }
}
 
export default Counters;