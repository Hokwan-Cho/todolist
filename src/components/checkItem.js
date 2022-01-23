import React, { Component } from 'react';


class CheckItem extends Component {

  
  render() {
    const { text, checked, id, onToggle, onRemove } = this.props;

    console.log("checked:" + checked);
    return (


      <div> 
          <label><input type="checkbox"  onClick={() => onToggle(id)}
                checked={checked} 
          />{text}</label> &nbsp;&nbsp;
          <button  onClick={(e) => {onRemove(id)}}>삭제</button> 
      </div>       
    
    );
  }
}

export default CheckItem;