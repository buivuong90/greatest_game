import React from "react";

export class FormValidator extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}

export class FormDefault extends React.Component{
    constructor(props){
        super(props);
        this.handlerSubmit = this.handlerSubmit.bind(this);
    }
    handlerSubmit(event){
        event.preventDefault();
        this.props.onSubmit();
    }
    render(){
        return (
            <form className="uk-grid-medium uk-margin-large" uk-grid="true" 
                autoComplete="off"
                onSubmit={this.handlerSubmit}>
                {this.props.children}
            </form>
        )
    }
}

export class FormRow extends React.Component{
    constructor(props){
        super(props);
        this.handlerClass = this.handlerClass.bind(this);
    }
    handlerClass(){
        let {width} = this.props;
        let classList = 'uk-width-';
        classList = is.existy(width) ? classList += width: 'uk-width-1-1';
        return classList;
    }
    render(){
        return (
            <div className={this.handlerClass()}>
                {this.props.children}
            </div>
        )
    }
}

export class FormLegend extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <legend className="uk-legend">
                {this.props.children}
            </legend>
        )
    }
}

export class FormLabel extends React.Component{
    constructor(props){
        super(props);
    }
    handlerClass(){
        let {className} = this.props;
        let classList = 'uk-form-label';
        is.existy(className) ? classList += ' '+className: classList;
        return classList;
    }
    render(){
        return (
            <label className={this.handlerClass()} htmlFor={this.props.htmlFor}>{this.props.label}</label>
        )
    }
}

export class FormGroup extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                <div className="uk-flex uk-margin-small-bottom uk-flex-middle uk-form-group-horizontal">
                    {this.props.children}
                </div>
                {/*<div className="uk-text-meta uk-text-danger uk-text-form-danger">Over the rainbow ne</div>*/}
            </div>
        )
    }
}