import React from "react";

export class Divider extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <hr className="uk-divider-icon"/>
        )
    }
}