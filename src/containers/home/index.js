import React from "react";
import {withRouter} from "react-router-dom";

import listArmies from "../../army/list";

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            armies: listArmies,
            army1: '',
            army2: ''
        }
    }
    render(){
        return (
            <div className="uk-flex uk-flex uk-flex-center uk-flex-middle uk-height-viewport">
                <div className="uk-card uk-card-default uk-card-body uk-width-xxlarge">
                    <div className="uk-grid" uk-grid="true">
                        <div className="uk-width-1-2">
                            <h3>Choose Army 1</h3>
                            <select className="uk-select"
                                onChange={event => this.setState({army1: event.target.value})}>
                                <option value=""></option>
                                {
                                    this.state.armies.map((army, key) => {
                                        return <option value={army.value} key={key}>{army.name}</option>
                                    })
                                }
                            </select>
                        </div>
                        <div className="uk-width-1-2">
                            <h3>Choose Army 2</h3>
                            <select className="uk-select"
                                onChange={event => this.setState({army2: event.target.value})}>
                                <option value=""></option>
                                {
                                    this.state.armies.map((army, key) => {
                                        return <option value={army.value} key={key}>{army.name}</option>
                                    })
                                }
                            </select>
                        </div>
                        <div className="uk-width-1-1">
                            <button className="uk-button uk-width-1-1 uk-button-primary"
                                onClick={
                                    () => {
                                        if(this.state.army1 && this.state.army2){
                                            this.props.history.push('/army/'+this.state.army1+'/'+this.state.army2);
                                        }
                                    }
                                }>Choose Fighting !!!</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Home);