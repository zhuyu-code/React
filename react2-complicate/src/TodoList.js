import React,{Fragment} from 'react';
import TodoItem from './TodoItem'
import "./TodoList.css"
class App extends React.Component {
 constructor(props){
   super(props);
  this.state={
    inputValue:"",
    list:["展示内容1","展示内容2"]
  }
 }
 render(){
      return (
        <div className="main">
          <input value={this.state.inputValue} onChange={this.handleChange}/>
          <button onClick={this.handleAdd}>提交</button>
          <div>
            <TodoItem list={this.state.list} handleDelete={this.handleDelete}></TodoItem>
          </div>
        </div>
      )
 }
 handleChange=(e)=>{
   const value=e.target.value
   this.setState(()=>{
     return {
      inputValue:value
    }
   })
 }
 handleAdd=()=>{
   this.setState((preState)=>{
     return {
      list:[...this.state.list,this.state.inputValue],
      inputValue:""
    }
   })
 }
 handleDelete=(index)=>{
   let klist=[...this.state.list];
   klist.splice(index,1);
   this.setState(()=>{
     return {
      list:klist
    }
   })
 }
}

export default App;
