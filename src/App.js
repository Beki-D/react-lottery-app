import React, { Component } from 'react';
import NavBar from './components/navbar';
import './App.css';
import Counters from "./components/counters"

class App extends Component {
  state = { 
    counters: [
        {id: 1, value: 0},
        {id: 2, value: 0},
        {id: 3, value: 0},
        {id: 4, value: 0},
    ]
  };
  
  image = [
    "/Assets/Images/earphone.jpg",
    "/Assets/Images/iphone12.jpg",
    "/Assets/Images/GalaxyM22.jpg",
    "/Assets/Images/sandisk-external-ssd.webp"
  ]

  handleIncrement = counter => {
      const counters = [...this.state.counters];
      const index = counters.indexOf(counter);

      counters[index] = {...counter};
      counters[index].value++;
      // console.log(this.state.counters[index]);
      this.setState({counters});
  };

  handleDecrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);

    counters[index] = {...counter};
    if(counters[index].value > 0){
      counters[index].value--;
    }

    this.setState({counters});
  };


  handleReset = () => {
      const counters = this.state.counters.map(c => {
          c.value = 0;
          return c;
      });
      this.setState({ counters });
  };

  handleDelete = counterID => {
      const counters = this.state.counters.filter(c => c.id !== counterID);
      this.setState({counters});
  }

  render() {
    // console.log("App - Rendered")
    
    return (
      <>
        <NavBar totalCounters={this.state.counters.filter( c => c.value > 0).length}/>
        
        <main className='container'>
          <Counters 
            counters={this.state.counters}
            onReset={this.handleReset} 
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete} 
            pics={this.image}
          />
        </main>
      </>
    );
  }
}

export default App;
