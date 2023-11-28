import React from 'react'
import {Routes, Route} from "react-router-dom";
import Home from '../pages/Home';
import Catalogo from '../pages/Catalogo/Catalogo';
 
import Admin from '../pages/Admin/Admin';
 
import DetalleItem from '../components/DetalleItem/DetalleItem';



const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/catalogo' element={<Catalogo />} />
            <Route path='/catalogo/:name' element={<Catalogo/>}/>
            
            <Route path='/catalogo/detalle/:id' element={<DetalleItem />}/>
             
            <Route path='/admin' element={<Admin />} />
        </Routes>
    )
}

export default AppRoutes