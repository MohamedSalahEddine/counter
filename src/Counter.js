import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.css";
class Counter extends Component {
    state = { 
        value:0
    } 

    display_count(){
        const {value}= this.state;
        return value ===0? 'zero': value;
    }

    

    display_badge_color(){
        let classname= "badge m-2 p-2 badge-";
        classname+=(this.state.value===0? "warning":"primary");
        return classname;
    }
    handleIncrement=()=>{
        this.setState({
           value :this.state.value+1
        })
    }

    handleDecrement=()=>{
        this.setState({
           value :this.state.value-1
        })
        if(this.state.value<=0){
            this.setState({
                value :0
             })
        }
    }
    
    render() { 
        return (
             <div>
                <span className={this.display_badge_color()}>{this.display_count()}</span>
                <button onClick={this.handleIncrement} class="btn btn-secondary m-2">+</button>
                <button onClick={this.handleDecrement} class="btn btn-secondary m-2">-</button>
                <button className='btn btn-danger m-2'>delete</button>
             </div>
        );
    }
}
 
export default Counter;