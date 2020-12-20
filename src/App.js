import React, { Component } from 'react';
import Dashboard from './Pages/dashboard'
import Analytics from './Pages/analytics'
import List from './Pages/randomlist'

import { Route, BrowserRouter as Router, Switch} from 'react-router-dom';

class App extends Component {
    
    render() {
        return (  
            <Router>     
                <Switch>                
                <Route path="/analytics" component={Analytics} />
                <Route path="/list" component={List} />
                <Route path="/"  exact component={Dashboard} />
                </Switch>
            </Router> 
        )
    }

}

export default App;