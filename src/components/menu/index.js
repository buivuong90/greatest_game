import React from "react";
import {withRouter} from "react-router";

class Menu extends React.Component{
    constructor(props){
        super(props);
        this.navigateToRegistration = this.navigateToRegistration.bind(this);
        this.navigateToLogin = this.navigateToLogin.bind(this);
        this.navigateToHome = this.navigateToHome.bind(this);
    }
    navigateToHome(){
        this.props.history.push('/');
    }
    navigateToLogin(){
        this.props.history.push('/login');
    }
    navigateToRegistration(){
        this.props.history.push('/registration');
    }
    render(){
        return (
            <div className="uk-background-secondary">
                <div className="uk-flex uk-flex-center uk-light uk-main-menu">
                    <a className="uk-tile uk-tile-mute uk-padding-small uk-link-heading uk-flex uk-flex-center"
                        onClick={this.navigateToHome}>
                        <img src="http://demo.swap-ez.com/assets/logo2.bfe8cc381ae464b6045494b74be163fd.png" className="image-logo"/>
                    </a>
                    <a className="uk-tile uk-tile-mute uk-padding-small uk-link-heading uk-flex-1 uk-flex uk-flex-center uk-link-item uk-margin-left">
                        Your Purpose
                    </a>
                    <a className="uk-tile uk-tile-mute uk-padding-small uk-link-heading uk-flex-1 uk-flex uk-flex-center uk-link-item">
                        Smart Phones
                    </a>
                    <a className="uk-tile uk-tile-mute uk-padding-small uk-link-heading uk-flex-1 uk-flex uk-flex-center uk-link-item">
                        Tablets
                    </a>
                    <a className="uk-tile uk-tile-mute uk-padding-small uk-link-heading uk-flex-1 uk-flex uk-flex-center uk-link-item">
                        Smart Watches
                    </a>
                    <a className="uk-tile uk-tile-mute uk-padding-small uk-link-heading uk-flex-1 uk-flex uk-flex-center uk-link-item">
                        Support
                    </a>
                    <a className="uk-tile uk-tile-mute uk-padding-small uk-link-heading uk-link-heading-active uk-flex-1 uk-flex uk-flex-center uk-link-item"
                        onClick={this.navigateToRegistration}>
                        Register
                    </a>
                    <a className="uk-tile uk-tile-mute uk-padding-small uk-link-heading uk-flex uk-flex-center uk-margin-left">
                        <h6><span uk-icon="icon: search"></span></h6>
                    </a>
                    <div className="uk-tile uk-tile-mute uk-padding-small uk-link-heading uk-flex uk-flex-center uk-margin-left">
                        <div className="uk-inline uk-cart">
                            <span uk-icon="icon: cart"/>
                            <div className="uk-position-center-right-out">
                                <span className="uk-badge">2</span>
                            </div>
                        </div>
                        <div uk-dropdown="pos: bottom-justify">
                            <ul className="uk-nav uk-dropdown-nav">
                                <li>
                                    <a className="uk-link-reset" href="#">
                                        <span uk-icon="icon: cart"/>
                                        &nbsp;&nbsp;Bag
                                    </a>
                                </li>
                                <li className="uk-nav-divider"></li>
                                <li>
                                    <a className="uk-link-reset" onClick={this.navigateToLogin} href="#">
                                        <span uk-icon="icon: sign-in"/>
                                        &nbsp;&nbsp;Login
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Menu);