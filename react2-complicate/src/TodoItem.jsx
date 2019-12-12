import React, { Component } from 'react'
import PropTypes from "prop-types";
export default class TodoItem extends Component {
    
    render() {
        const {list}=this.props
        return (
            <div>
                <ul>
                    {
                        list.map((item,index)=>{
                        return <li key={index} onClick={this.handleDelete}>{item}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
    handleDelete=(index)=>{
        console.log(index);
        this.props.handleDelete(index);
    }
}
TodoItem.propTypes={
    list:PropTypes.func.isRequired,
    handleDelete:PropTypes.func.isRequired
}