import React from 'react'
import {Routes, Route} from "react-router-dom";
import Home from '../pages/Home';
import Catalogo from '../pages/Catalogo/Catalogo';
import Contacto from '../pages/Contacto/Contacto';
import Admin from '../pages/Admin/Admin';
import DetalleItem from '../components/DetalleItem/DetalleItem';
import AdminCrear from '../pages/Admin/AdminCrear';
import AdminEdit from '../pages/Admin/AdminEdit';



const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/catalogo' element={<Catalogo />} />
            <Route path='/catalogo/:name' element={<Catalogo/>}/>
            <Route path='/catalogo/detalle/:id' element={<DetalleItem />}/>
            <Route path='/contacto' element={<Contacto />} />
            <Route path='/admin' element={<Admin />} />
            <Route path='/admin/crear' element= {<AdminCrear/>}/>;
            <Route path='/admin/edit/:id' element={<AdminEdit />}/>;
        </Routes>
    )
}

export default AppRoutes