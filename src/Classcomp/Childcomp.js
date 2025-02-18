import React from "react";

class Childcomp extends React.Component{
    render(){
        return(
            <div>
            <span>{this.props.t_name}</span>
            <span>{this.props.job}</span>

            </div>
        )
    }
}

export default Childcomp