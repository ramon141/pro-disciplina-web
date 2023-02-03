import {
    BrowserRouter as Router,
    Route,
    Routes as RoutesDom
} from 'react-router-dom';
import Home from './pages/Home';
import Login from "./pages/Login";

export default function Routes() {
    return (
        <Router>
            <RoutesDom>
                <Route path="/" element={<Login />} />
                <Route path="/home" element={<Home />} />
            </RoutesDom>
        </Router>
    );
}