import React,{Fragment} from 'react';
import TodoItem from './TodoItem';
import "./TodoList.css";
import {Input,Button,List, Typography} from 'antd'; // 加载 JS
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import Store from "./store/index"
class App extends React.Component {
 constructor(props){
   super(props);
  this.state=Store.getState();
  Store.subscribe(this.storeChange);//监听注册事件
 }
 render(){
      return (
        <div className="main">
          <Input value={this.state.inputValue} onChange={this.handleChange} placeholder="请输入日程表" style={{width:"300px"}}/>
          <Button type='danger' onClick={this.handleAdd} style={{width:"100px"}}>提交</Button>
          <div>
            <TodoItem list={this.state.list} handleDelete={this.handleDelete}></TodoItem>
          </div>
        </div>
      )
 }
 storeChange=()=>{
   this.setState(()=>{
     return Store.getState();
   })
 }
 handleChange=(e)=>{
   const value=e.target.value
   const action={
     type:"handleChange",
     inputValue:value
   }
   Store.dispatch(action);
 }
 handleAdd=()=>{
   if(!this.state.inputValue){
     alert("请输入日程内容")
   }else{
    const action={
      type:"handleAdd",
      list:[...this.state.list,this.state.inputValue]
    }
    Store.dispatch(action)
   }
     
 }
 handleDelete=(index)=>{
    const action={
      type:"handleDelete",
      index:index
    }
    Store.dispatch(action)
 }
}

export default App;
