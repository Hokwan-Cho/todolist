import React from "react"
import { Component } from "react/cjs/react.production.min";
import CheckList from "./components/checkList";
import TodoReg from "./components/todoReg";


class App extends Component {
  id = 2
  state = {
    text: '',
    todos: [
      { id: 0, text: '밥먹기', checked: false },
      { id: 1, text: '씻기', checked: true },
    ]
  }

  inputChange = (e) => {
    this.setState({
      text: e.target.value
    });
  }

  addTodoList = () => {
    const { text, todos } = this.state;
    this.setState({
      text: '', 
      todos: todos.concat({
        id: this.id++,
        text: text,
        checked: false
      })
    });
  }

  enterKeyPress = (e) => {
    if(e.key === 'Enter') {
      this.addTodoList();
    }
  }

  changeCheckValue = (id) => {
    const { todos } = this.state;
    const index = todos.findIndex(todo => todo.id === id);
    const selected = todos[index]

    const nextTodos = [...todos]; //배열복사하기! 
    nextTodos[index] = {    //배열복사후 해당 index check 값 변경 
      ...selected, 
      checked: !selected.checked   //현재 값의 반대로 설정 
    };

    this.setState({
      todos: nextTodos   //기존 배열을 통쨰로 복사한걸로 갈아끼우기 
    });
  }

  remove = (id) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter(todo => todo.id !== id)
    });
  }

  render() {
    const { text, todos } = this.state;
    const {
      inputChange,
      addTodoList,
      enterKeyPress,
      changeCheckValue,
      remove
    } = this;

    console.log({text});
    return (
      <>
        <h1>TODO LIST</h1>

        <h3>할 일 등록</h3>
        <TodoReg  
          value={text}
          onKeyPress={enterKeyPress}
          onChange={inputChange}
          onCreate={addTodoList} />
        <br/><br/>
        <h3>할 일 목록</h3>
        <CheckList  todos={todos} onToggle={changeCheckValue} onRemove={remove} />
      </>

    );
  }
}

export default App;