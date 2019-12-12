const defaulState={
    inputValue:"",
    list:["完成plugin制作","完成ant design的预览","完成hooks的学习"]
}
export default (state=defaulState,action)=>{
    if(action.type==="handleChange"){
        const newState=JSON.parse(JSON.stringify(state));
        newState.inputValue=action.inputValue;
        return newState;
    }
    if(action.type==="handleAdd"){
        const newState=JSON.parse(JSON.stringify(state));
        newState.list=action.list;
        newState.inputValue="";
        return newState;
    }
    if(action.type==="handleDelete"){
    const newState=JSON.parse(JSON.stringify(state));
    newState.list.splice(action.index,1);
    return newState;
    }
    return state
}