import React from 'react'
import {Routes, Route} from "react-router-dom";
import Home from '../pages/Home';
import Catalogo from '../pages/Catalogo/Catalogo';
import Nosotros from '../pages/Nosotros';
import Admin from '../pages/Admin/Admin';
import NotFound from '../components/NotFound/NotFound';



const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/catalogo' element={<Catalogo />} />
            <Route path='/catalogo/:name' element={<Catalogo/>}/>
            <Route path='/contacto/:id' element={<Nosotros />} />
            <Route path='/admin' element={<Admin />} />
            <Route path='*' element={<NotFound />}/>
        </Routes>
    )
}

export default AppRoutes