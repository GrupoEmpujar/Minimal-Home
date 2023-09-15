
import './App.css';
import { BrowserRouter as Router,Routes, Route} from "react-router-dom";
import AppRoutes from "./routes/Routes"
import NavbarBs from './components/Navbar/Navbar';
import 'react-bootstrap';

function App() {
  return (
    <Router>
      <NavbarBs/>
      <AppRoutes />

    </Router>
  );
}

export default App;
