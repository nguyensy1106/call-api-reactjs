import { Component } from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Menu from './components/Menu/Menu';
import routers from './routers';

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Menu />
                    <div className="container">
                        {this.showContentMenus(routers)}
                    </div>
                </div>
            </Router>
        );
    }
    showContentMenus = (routers) => {
        var result = null;
        if (routers.length > 0) {
            result = routers.map((route, index) => {
                return (
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={route.main}
                    />
                )
            });
        }
        return <Switch>{result}</Switch>;
    }
}

export default App;
