import React from "react";
import armies from "../../army";

class Army extends React.Component{
    constructor(props){
        super(props);
        this.army1 = this.props.match.params.name1;
        this.army2 = this.props.match.params.name2;
        this.state = {
            list1: armies[this.army1],
            list2: armies[this.army2],
            player1: null,
            player2: null
        };
    }
    componentDidMount(){
        this.offcanvas1 = UIkit.offcanvas($('#offcanvas-army1'));
        this.offcanvas2 = UIkit.offcanvas($('#offcanvas-army2'), {
            flip: true
        });
    }
    componentWillUnmount(){
        this.army1 = null;
        this.army2 = null;
        this.offcanvas1.$destroy(true);
        this.offcanvas2.$destroy(true);
    }
    render(){
        return (
            <div>
                <div className="uk-flex uk-flex-between">
                    <div>
                        <button className="uk-button uk-button-primary" type="button" uk-toggle="target: #offcanvas-army1">{this.army1}</button>
                    </div>
                    <div>
                        <button className="uk-button uk-button-primary" type="button" uk-toggle="target: #offcanvas-army2">{this.army2}</button>
                    </div>
                </div>
                <div className="uk-container">
                    <div className="uk-height-viewport uk-grid uk-padding uk-padding-remove-left uk-padding-remove-right uk-padding-remove-top uk-flex uk-flex-bottom"
                        uk-grid="true"
                        uk-height-viewport="expand: true">
                        <div className="uk-width-1-2 uk-flex-right">
                            {
                                this.state.player1
                                ?
                                    <div className="uk-flex uk-flex-center">
                                        <img data-src={'/'+this.army1+'/'+this.state.player1.folder+'/main.png'} className="uk-flip"
                                            style={{height: Number(200*this.state.player1.size)+'px'}} uk-img="true"/>
                                    </div>
                                : null
                            }
                        </div>
                        <div className="uk-width-1-2">
                            {
                                this.state.player2
                                ?
                                    <div className="uk-flex uk-flex-center">
                                        <img data-src={'/'+this.army2+'/'+this.state.player2.folder+'/main.png'}
                                            style={{height: Number(200*this.state.player2.size)+'px'}} uk-img="true"/>
                                    </div>
                                : null
                            }
                        </div>
                    </div>
                </div>
                <div id="offcanvas-army1">
                    <div className="uk-offcanvas-bar uk-padding-small-left uk-padding-small-right uk-padding-small-bottom uk-padding-top">
                        <button className="uk-offcanvas-close" type="button" uk-close="true"></button>
                        <div>
                        {
                            this.state.list1.map((item, key) => {
                                return (
                                    <div key={key} className="uk-margin-bottom">
                                        <h5 className="uk-text-uppercase">{item.name}</h5>
                                        <div className="uk-grid uk-grid-small" uk-grid="true">
                                        {
                                            item.list.map((i, ikey) => {
                                                return (
                                                    <div key={ikey} className="uk-width-1-2">
                                                        <a className="uk-text-meta uk-text-truncate" onClick={
                                                            () => this.setState({player1: i}, () => {
                                                                UIkit.offcanvas('#offcanvas-army1').hide();
                                                            })
                                                        }>{i.name}</a>
                                                    </div>
                                                )
                                            })
                                        }
                                        </div>
                                    </div>
                                )
                            })
                        }
                        </div>
                    </div>
                </div>
                <div id="offcanvas-army2">
                <div className="uk-offcanvas-bar uk-padding-small-left uk-padding-small-right uk-padding-small-bottom uk-padding-top">
                        <button className="uk-offcanvas-close" type="button" uk-close="true"></button>
                        <div>
                        {
                            this.state.list2.map((item, key) => {
                                return (
                                    <div key={key} className="uk-margin-bottom">
                                        <h5 className="uk-text-uppercase">{item.name}</h5>
                                        <div className="uk-grid uk-grid-small" uk-grid="true">
                                        {
                                            item.list.map((i, ikey) => {
                                                return (
                                                    <div key={ikey} className="uk-width-1-2">
                                                        <a className="uk-text-meta uk-text-truncate" onClick={
                                                            () => this.setState({player2: i}, () => {
                                                                UIkit.offcanvas('#offcanvas-army2').hide();
                                                            })
                                                        }>{i.name}</a>
                                                    </div>
                                                )
                                            })
                                        }
                                        </div>
                                    </div>
                                )
                            })
                        }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Army;