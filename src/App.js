import Home from "./pages/Home";
import Units from "./pages/Units";
import "./components/style.scss"
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/units" exact element={<Units />} />
      </Routes>
    </Router>
  );
}

export default App;
