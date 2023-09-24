
import './App.css';
import { BrowserRouter as Router,Routes, Route} from "react-router-dom";
import AppRoutes from "./routes/Routes"
import NavbarBs from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import 'react-bootstrap';

function App() {
  return (
    <Router>
      <NavbarBs/>
      <AppRoutes />
      <Footer />
    </Router>
  );
}

export default App;
