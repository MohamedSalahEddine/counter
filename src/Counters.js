import React, { Component } from 'react';
import Counter from './Counter';
import "./Counter.css";

class Counters extends Component {
    

    render() { 
        return (
            <div>
                <button className='btn btn-primary m-2 p-2' onClick={this.props.onHandleReset}>Reset</button>
                {
                    this.props.counters.map(counter=>
                        <Counter key={counter.id}
                            onIncrement={this.props.onIncrement}
                            onDecrement={this.props.onDecrement}
                            onDelete={this.props.onDelete}
                            obj={counter}
                            />    
                    )
                }
            </div>
        );
    }
}
 
export default Counters;