import {
  Route,
  BrowserRouter as Router,
  Routes as ReactRouterRoutes,
} from "react-router-dom";
import Home from "./Home";
import ToDoList from "./ToDoList";

const Routes = () => {
  return (
    <Router>
      <ReactRouterRoutes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<ToDoList />} />
      </ReactRouterRoutes>
    </Router>
  );
};

export default Routes;
