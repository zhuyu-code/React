import React ,{Component} from "react"
import "./TodoList.css"

class TodoList extends Component{
    constructor(props){
        super(props);
        this.state={
            inputValue:"",
            list:["zhuyu",'sd']
        }
    }
render(){
    return (
        <div>
           <div className="top">
           <label htmlFor="inputValue">记录</label>
            <input id="inputValue" onChange={this.changeInput.bind(this)} value={this.state.inputValue}></input>
            <button onClick={this.addInput.bind(this)}>提交</button>
           </div>
            <div className="top">
                <ul>
                   {
                       this.state.list.map((item,index)=>{
                           return <li key={index} onClick={this.deleteInput.bind(this,index)}>{item}</li>
                       })
                   }
                </ul>
            </div>
        </div>
    )
}

changeInput(e){
    console.log(e.target.value)
    this.setState({
        inputValue:e.target.value
    })
}

addInput(){
    var list=[...this.state.list,this.state.inputValue]
    this.setState({
        list:list,
        inputValue:''
    })
}

deleteInput(index){
    var list=this.state.list;
    list.splice(index,1)
    this.setState({
        list:list
    })

}
}
export default TodoList;