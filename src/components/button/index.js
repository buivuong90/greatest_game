import React from "react";

export class Button extends React.Component{
    constructor(props){
        super(props);
        this.handlerClass = this.handlerClass.bind(this);
    }
    handlerClass(){
        let {className, color} = this.props;
        let classList = 'uk-button';
        is.existy(className) ? classList += ' '+className: classList;
        is.existy(color) ? classList += ' uk-button-'+color: classList;
        return classList;
    }
    render(){
        let type = is.existy(this.props.type) ? this.props.type : 'button';
        return (
            <button className={this.handlerClass()} type={type}>
                {this.props.children}
            </button>
        )
    }
}