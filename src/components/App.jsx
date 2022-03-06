import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Home } from '../pages/Home';
import { History } from '../pages/History';

export function App() {
    return (
        <Router>
            <Switch>
                <Route exact path='/'>
                    <Home />
                </Route>
                <Route path='/history'>
                    <History />
                </Route>
            </Switch>
        </Router>
    );
}