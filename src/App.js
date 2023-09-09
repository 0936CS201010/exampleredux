import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import EmployeeInterface from "./Component/EmployeeInterface";
import DisplayAll from "./Component/DisplayAll";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route element={<EmployeeInterface/>} path="/employeeinterface"/>
          <Route element={<DisplayAll/>} path="/displayall"/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
