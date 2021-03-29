import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import SneakerShow from './SneakerShow';

function App() {
    return (
        <Router>
            <Navbar />
            <div className="App">
                <h1>This is the App component...</h1>
                <Switch>
                    <Route exact path='/'>
                        <Home />
                    </Route>
                    <Route path='/sneakers/:id'>
                        <SneakerShow />
                    </Route>
                </Switch>
            </div >
        </Router>
    );
}

export default App;
