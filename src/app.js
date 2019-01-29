import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import createHistory from "history/createBrowserHistory";
import { Provider } from "react-redux";
import configureStore from "./configureStore";

import Home from "./containers/home";
import Army from "./containers/army";

const initialState = {};
const history = createHistory();
const store = configureStore(initialState, history);

class App extends React.Component{
    constructor(props){
        super(props);
    }
    componentWillMount(){
        
    }
    render(){
        return (
            <Provider store={store}>
                <Router>
                    <div>
                        <div>
                            <Route exact path="/" component={Home}/>
                            <Route path="/army/:name1/:name2" component={Army}/>
                        </div>
                        <div>
                            {/*<Footer/>*/}
                        </div>
                    </div>
                </Router>
            </Provider>
        )
    }
}

export default App;