import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddPerson from "./users/AddPerson";
import EditPerson from "./users/EditPerson";
import ViewPerson from "./users/ViewPerson";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/addperson" element={<AddPerson />} />
          <Route exact path="/editperson/:id" element={<EditPerson />} />
          <Route exact path="/viewperson/:id" element={<ViewPerson />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
