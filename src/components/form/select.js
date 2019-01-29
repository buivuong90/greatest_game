import React from "react";

export class Select2 extends React.Component{
    constructor(props){
        super(props);
        this.instanceRef = null;
    }
    componentDidMount(){
        $(this.instanceRef).select2({
            width: '100%',
            placeholder: this.props.placeholder,
            allowClear: true
        });
    }
    componentWillUnmount(){
        this.instanceRef = null;
    }
    render(){
        return (
            <div className="uk-inline uk-width">
                {
                    this.props.icon ?
                    <span className="uk-form-icon" uk-icon={"icon: "+this.props.icon}/>
                    : null
                }
                <select id={this.props.id}
                    ref={instance => this.instanceRef = instance}
                    className="uk-select">
                    <option value=""></option>
                    {
                        this.props.list.map((item, key) => {
                            return (
                                <option key={key} value={item.id}>{item.name}</option>
                            )
                        })
                    }
                </select>
            </div>
        )
    }
}