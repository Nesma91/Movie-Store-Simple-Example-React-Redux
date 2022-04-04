import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./component/Navebar";
import NotFound from "./pages/NotFound";
import Favourites from "./pages/Favourites";
import Movies from "./pages/Movies";
import MovieDetails from "./pages/MovieDetails";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className="container my-5">
          <Switch>
            <Route path="/" exact component={Movies} />
            <Route path="/Movies" exact component={Movies} />
            <Route path="/Movies/:id" exact component={MovieDetails} />
            <Route path="/Favourites" exact component={Favourites} />
            <Route path="*" exact component={NotFound} />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
