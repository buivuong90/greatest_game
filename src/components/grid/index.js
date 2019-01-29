import React from "react";

export class GridInner extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className="uk-flex uk-flex uk-flex-center uk-flex-middle uk-height-viewport">
                <div className="uk-card uk-card-default uk-card-body uk-margin-large-top
                    uk-margin-large-bottom uk-margin-large-left uk-margin-large-right">
                    {this.props.children}
                </div>
            </div>
        )
    }
}