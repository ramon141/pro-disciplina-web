import {
    BrowserRouter as Router,
    Route,
    Routes as RoutesDom
} from 'react-router-dom';
import PreOfferRegister from './pages/PreOfferRegister';
import Login from "./pages/Login";
import PreOfferEdit from './pages/PreOfferEdit';

export default function Routes() {
    return (
        <Router>
            <RoutesDom>
                <Route path="/" element={<Login />} />
                <Route path="/pre-oferta" element={<PreOfferRegister />} />
                <Route path="/pre-oferta/:id" element={<PreOfferEdit />} />
            </RoutesDom>
        </Router>
    );
}