import React from 'react'
import {Routes, Route} from "react-router-dom";
import Home from '../pages/Home';
import Catalogo from '../pages/Catalogo/Catalogo';
import Contacto from '../pages/Contacto/Contacto';
import Admin from '../pages/Admin/Admin';



const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/catalogo' element={<Catalogo />} />
            <Route path='/catalogo/:name' element={<Catalogo/>}/>
            <Route path='/contacto/:id' element={<Contacto />} />
            <Route path='/admin' element={<Admin />} />
        </Routes>
    )
}

export default AppRoutes