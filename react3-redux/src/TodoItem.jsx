import React, { Component} from 'react'
import PropTypes from "prop-types";
import {List,Avatar} from 'antd'; // 加载 JS
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
export default class TodoItem extends Component {
    
    render() {
        const {list}=this.props
        return (

             <List
                style={{width:"400px",marginTop:"10px"}}
                size="small"
                bordered
                dataSource={list}
                renderItem={item => 
                    <List.Item onClick={this.handleDelete}>
                    <List.Item.Meta
                      avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                      title={<a style={{lineHeight:"36px"}}>{item}</a>}
                    />
                  </List.Item>
                }
                />
        )
    }
    handleDelete=(index)=>{
        this.props.handleDelete(index);
    }
}
TodoItem.propTypes={
    list:PropTypes.func.isRequired,
    handleDelete:PropTypes.func.isRequired
}