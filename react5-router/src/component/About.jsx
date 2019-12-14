import React, { Component } from 'react'
import {withRouter} from 'react-router'
 class About extends Component {
    render() {
        const {match}=this.props;
        console.log(match);
        return (
            <div>
                About
            </div>
        )
    }
}
export default withRouter(About);
