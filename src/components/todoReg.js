import React from "react";

const TodoReg = ({value, onChange, onCreate, onKeyPress} ) => {


  return (
    <div>
      <input  value={value} onChange={onChange} onKeyPress={onKeyPress}/>
      <button onClick = {onCreate}>등록</button>
    </div>
  )
}

export default TodoReg;