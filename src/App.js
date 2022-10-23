import Home from "./pages/Home";
import Units from "./pages/Units";
import "./components/style.scss"
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import {DataProvider} from "./context/DataContext"
import UnitItem from "./pages/UnitItem";


function App() {
  return (
    <DataProvider>
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/units" exact element={<Units />} />
        <Route path="/units/:id" element={<UnitItem/>} />
      </Routes>
    </Router>
    </DataProvider>
  );
}

export default App;
