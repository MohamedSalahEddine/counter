
import Counters from "./Counters";
import './App.css';

import NavBar from "./NavBar";
import React, { Component } from 'react';


class App extends Component {
  state = { 
    counters:[
        {id:0, value:0},
        {id:1, value:4},
        {id:2, value:0},
        {id:3, value:0}
    ]
}

handleReset=()=>{
    const countersUp = this.state.counters.map(counter=>{
        counter.value=0;
        return counter
    });
    this.setState({
        counters:countersUp
    })
}



handleIncrement=(counter)=>{
    const counterss = [...this.state.counters];
    const index = counterss.indexOf(counter);
    counterss[index]={...counter}
    counterss[index].value++;
    this.setState({
        counters:counterss
    })

    
}


handleDecrement=(counter)=>{
    const counterss = [...this.state.counters];
    const index = counterss.indexOf(counter);
    counterss[index]={...counter}
    counterss[index].value--;
    this.setState({
        counters:counterss
    })
}

handleDelete=(id_obj)=>{
    const counters = this.state.counters.filter(counter =>
        counter.id !== id_obj
    );
    this.setState({
        counters:counters
    });
}
  render() { 
    return (
      <div className="app_container">
        <NavBar count={this.state.counters.filter((counter)=>counter.value>0).length}/>
        <Counters counters={this.state.counters}
          onHandleReset={this.handleReset}
          onDecrement={this.handleDecrement}
          onIncrement={this.handleIncrement}
          onDelete={this.handleDelete}
        />

      </div>
    );
  }
}
 
export default App;