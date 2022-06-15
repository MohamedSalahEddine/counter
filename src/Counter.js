import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.css";
class Counter extends Component {
    

    display_count(){
        const {value}= this.props.obj;
        return value ===0? 'zero': value;
    }

    

    display_badge_color(){
        let classname= "badge m-2 p-2 badge-";
        classname+=(this.props.obj.value===0? "warning":"primary");
        return classname;
    }
   
    
    
    render() { 
        return (
             <div>
                <span className={this.display_badge_color()}>{this.display_count()}</span>
                <button onClick={this.props.onIncrement} class="btn btn-secondary m-2">+</button>
                <button onClick={this.props.onDecrement} class="btn btn-secondary m-2">-</button>
                <button onClick={()=>this.props.onDelete(this.props.obj.id)} className='btn btn-danger m-2'>delete</button>
             </div>
        );
    }
}
 
export default Counter;