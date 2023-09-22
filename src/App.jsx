import { useReducer } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppRoutes from "./routes/Routes"
import NavbarBs from './components/Navbar/Navbar';
import 'react-bootstrap';
import { ItemsContext, UPLOAD_ITEMS, ItemsReducer } from './context/ItemsContext';


function App() {

  const initialState = [];
  const [items, dispatch] = useReducer(ItemsReducer, initialState);

  return (
    <Router>
      <ItemsContext.Provider value={{ items, dispatch }}>
        <NavbarBs />
        <AppRoutes />
      </ItemsContext.Provider>

    </Router>
  );
}

export default App;
