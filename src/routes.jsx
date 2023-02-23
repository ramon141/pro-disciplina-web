import {
  BrowserRouter as Router,
  Route,
  Routes as RoutesDom,
} from "react-router-dom";
import PreOfferRegister from "./pages/PreOfferRegister";
import Login from "./pages/Login";
import PreOfferEdit from "./pages/PreOfferEdit";
import Home from "./pages/Home";
import Sidebar from "./components/Sidebar";

export default function Routes() {
  const routesConfigure = [
    {
      path: "/",
      element: <Login />,
      isPrivate: false,
    },
    {
      path: "/pre-oferta",
      element: <PreOfferRegister />,
      isPrivate: false,
    },
    {
      path: "/pre-oferta/:id",
      element: <PreOfferEdit />,
      isPrivate: false,
    },
    {
      path: "/home",
      element: <Home />,
      isPrivate: true,
    },
  ];

  return (
    <Router>
      <RoutesDom>
        {routesConfigure.map(({ path, element, isPrivate = false }) =>
          isPrivate ? (
            <Route
              key={path}
              path={path}
              element={<Sidebar>{element}</Sidebar>}
            />
          ) : (
            <Route key={path} path={path} element={element} />
          )
        )}
      </RoutesDom>
    </Router>
  );
}
