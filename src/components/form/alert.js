import React from "react";

export class Alert extends React.Component{
    constructor(props){
        super(props);
        this.instanceRef = null;
    }
    componentDidMount(){
        UIkit.alert(this.instanceRef);
        setTimeout(() => {
            UIkit.alert(this.instanceRef).close();
        }, 3000);
        $(this.instanceRef).on('beforehide', () => {
            this.props.onClose();
        });
    }
    componentWillUnmount(){
        this.instanceRef = null;
    }
    render(){
        return (
            <div className="uk-background-danger uk-light"
                ref={instance => this.instanceRef = instance}>
                <a className="uk-alert-close" type="button" uk-close="true"/>
                <p>{this.props.message}</p>
            </div>
        )
    }
}