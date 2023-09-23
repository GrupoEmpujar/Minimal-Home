import React,{useState} from 'react';
import './navbar.css';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo/logo.png';
import 'react-bootstrap-icons';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <header className='navbar__header'>

            <nav className='navbar'>
                <Link to='/' className='logo'>
                    <img src={logo} alt="logo" />
                </Link>
                <div className='navbar__menu' onClick={()=>{
                    setMenuOpen(!menuOpen)
                }}>
                    <span className='navbar-menu__span'></span>
                    <span className='navbar-menu__span'></span>
                    <span className='navbar-menu__span'></span>
                </div>

                <div className={menuOpen? "navbar__container-ul-form open":"navbar__container-ul-form"}>

                    <ul className='navbar__ul'>
                        <li>
                            <NavLink to='/'>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to='/catalogo'>Catálogo</NavLink>
                        </li>
                        <li className='navbar__contacto'>
                            <NavLink to='/contacto'>Contacto</NavLink>
                        </li>
                        <li className='navbar__contacto'>
                            <NavLink to='/admin'>Admin</NavLink>
                        </li>
                    </ul>
                    <form className="navbar__form">
                        <input
                            type="text"
                            placeholder="Buscar producto..."
                            className="navbar__input"
                            aria-label="Search"
                            id="searchInput"
                        />
                        <Link to={`/catalogo/`} className='navbar-form__button'>
                            Buscar
                        </Link>
                    </form>
                </div>
            </nav>
        </header>
    )
}

export default Navbar