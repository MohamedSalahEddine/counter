import React, { Component } from 'react';
import Counter from './Counter';
import "./Counter.css";

class Counters extends Component {
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
    
    handleIncrement=()=>{
       
    }

    handleDecrement=()=>{

    }

    handleDelete=(id_obj)=>{
        const counters = this.state.counters.filter(counter =>
            counter.id != id_obj
        );
        this.setState({
            counters:counters
        });
    }

    render() { 
        return (
            <div>
                <button className='btn btn-primary m-2 p-2' onClick={this.handleReset}>Reset</button>
                {
                    this.state.counters.map(counter=>
                        <Counter key={counter.id}
                            onIncrement={this.handleIncrement}
                            onDecrement={this.handleDecrement}
                            onDelete={this.handleDelete}
                            obj={counter}
                            />    
                    )
                }
            </div>
        );
    }
}
 
export default Counters;