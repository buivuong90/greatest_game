import React from "react";

export class InputRange extends React.Component{
    constructor(props){
        super(props);
        this.instanceRef = null;
    }
    componentDidMount(){
        new JSR([this.instanceRef], {
            sliders: 1,
            values: [100],
            step: 1,
            limit: {
                min: 50
            },
            labels: {
                formatter: (value) => {
                    return value.toString() + ' %';
                }
            },
            grid: false
        });
    }
    render(){
        const min = this.props.min ? this.props.min : 0;
        const max = this.props.max ? this.props.max : 0;
        return (
            <div className="uk-inline uk-width">
                <input ref={instance => this.instanceRef = instance} id={this.props.id} type="range" min={min} 
                    max={max}/>
            </div>
        )
    }
}

export class InputText extends React.Component{
    constructor(props){
        super(props);
        this.handlerInput = this.handlerInput.bind(this);
        this.state = {
            value: '',
            error: 0
        }
        this.isFirst = false;
    }
    componentWillUnmount(){
        this.isFirst = false;
    }
    handlerInput(event){
        const value = event.target.value;
        if(is.empty(value)){
            this.setState({error: 1}, () => {
                this.isFirst = true;
                this.setState({value: value});
            });
        }else{
            if(this.isFirst){
                this.setState({error: 2}, () => {
                    this.setState({value: value});
                });
            }else
                this.setState({value: value});
        }
    }
    handlerClassInput(){
        let classList = 'uk-input';
        switch(this.state.error){
            case 0:
                break;
            case 1:
                classList += ' uk-form-danger';
                break;
            case 2:
                classList += ' uk-form-success';
                break;
            default:
                return;
        }
        return classList;
    }
    render(){
        return (
            <div className="uk-width">
                <div className="uk-inline uk-width">
                    {
                        this.props.icon ?
                        <span className="uk-form-icon" uk-icon={"icon: "+this.props.icon}/>
                        : null
                    }
                    <input className={this.handlerClassInput()} type="text" placeholder={this.props.placeholder}
                        readOnly={this.props.readOnly}
                        onChange={this.handlerInput}
                        value={this.state.value}
                        id={this.props.id}/>
                </div>
            </div>
        )
    }
}

export class InputNumber extends React.Component{
    constructor(props){
        super(props);
        this.handlerInput = this.handlerInput.bind(this);
    }
    handlerInput(event){
        let value = event.target.value;
        let valueNum = Number(event.target.value);
        if(is.not.number(valueNum)){
            if (value != null && value.length > 0) {
                value = value.substring(0, value.length - 1);
            }
        }
        event.target.value = value;
    }
    render(){
        return (
            <div className="uk-inline uk-width">
                {
                    this.props.icon ?
                    <span className="uk-form-icon" uk-icon={"icon: "+this.props.icon}/>
                    : null
                }
                <input className="uk-input" type="text"
                    placeholder={this.props.placeholder}
                    readOnly={this.props.readOnly}
                    onInput={this.handlerInput}
                    id={this.props.id}/>
            </div>
        )
    }
}