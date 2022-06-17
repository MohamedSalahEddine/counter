import React, { Component } from 'react';
import Counter from './Counter';
import "./Counter.css";

class Counters extends Component {
    
    
    render() { 
        const {onHandleReset, onIncrement, onDecrement, onDelete} = this.props;
        return (
            <div>
                <button className='btn btn-primary m-2 p-2' onClick={onHandleReset}>Reset</button>
                {
                    this.props.counters.map(counter=>
                        <Counter key={counter.id}
                            onIncrement={onIncrement}
                            onDecrement={onDecrement}
                            onDelete={onDelete}
                            obj={counter}
                            />    
                    )
                }
            </div>
        );
    }
}
 
export default Counters;