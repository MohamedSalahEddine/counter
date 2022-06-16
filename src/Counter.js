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
                <button className="btn btn-secondary m-2" onClick={()=>this.props.onIncrement(this.props.obj)}>+</button>
                <button className="btn btn-secondary m-2" onClick={this.props.onDecrement}>-</button>
                <button className='btn btn-danger m-2' onClick={()=>this.props.onDelete(this.props.obj.id)} >delete</button>
             </div>
        );
    }
}
 
export default Counter;