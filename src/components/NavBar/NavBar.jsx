import React from 'react'
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaClock, FaFacebookF, FaInstagram, FaWhatsapp, FaUserAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import Buscador from '../Buscador/Buscador';
import CartWidget from '../CartWidget/CartWidget';



const NavBar = () => {

    const { user, logout } = useAuth()

    return (

        // HEADER

        <header className='bg-black'>

            {/* TOP */}
            <div className="container flex items-center justify-between py-2 text-white text-sm">

                <div className='flex items-center justify-center gap-4'>
                    <Link to="#" className='flex items-center justify-center gap-4 hover:text-main-color transition-colors'><i className='text-main-color'><FaMapMarkerAlt></FaMapMarkerAlt></i>857 Abbott Unions Suite 645</Link>
                    <Link to="#" className='flex items-center justify-center gap-4 hover:text-main-color transition-colors'><i className='text-main-color'><FaEnvelope></FaEnvelope></i>info@hamburguesasdeverdad.com.ar</Link>
                    <Link to="#" className='flex items-center justify-center gap-4 hover:text-main-color transition-colors'><i className='text-main-color'><FaPhoneAlt></FaPhoneAlt></i>574-273-9916</Link>
                    <Link to="#" className='flex items-center justify-center gap-4 hover:text-main-color transition-colors'><i className='text-main-color'><FaClock></FaClock></i>Lunes a Sábados de 09:00 a 17:00</Link>
                </div>

                <div className='flex items-center justify-center gap-4'>
                    <Link to="#"><i className='text-main-color'><FaFacebookF></FaFacebookF></i></Link>
                    <Link to="#"><i className='text-main-color'><FaInstagram></FaInstagram></i></Link>
                    <Link to="#"><i className='text-main-color'><FaWhatsapp></FaWhatsapp></i></Link>
                </div>

            </div>
            {/* end of TOP */}

            {/* NAV */}
            <nav className='container flex items-center justify-between py-4 text-white'>

                <div className='flex items-center justify-center gap-6'>

                    <Link to="/">
                        <img src="/logo.svg" alt="HDV - hamburguesas de Verdad." />
                    </Link>

                    <Link to="/" className='font-medium uppercase hover:text-yellow-500 transition-colors'>Inicio</Link>
                    <Link to='/category/hamburguesas' className='font-medium uppercase hover:text-yellow-500 transition-colors'>Hamburguesas</Link>
                    <Link to='/category/papas-fritas' className='font-medium uppercase hover:text-yellow-500 transition-colors'>Papas Fritas</Link>
                    <Link to='/category/bebidas' className='font-medium uppercase hover:text-yellow-500 transition-colors'>Bebidas</Link>

                </div>

                <Buscador></Buscador>

                {
                    user ? (

                        <div className='flex items-center justify-center gap-4'>
                            <Link onClick={logout} className='inline-flex items-center justify-center gap-2 bg-main-color py-2 px-4 rounded-full text-sm text-black font-medium'><i><FaUserAlt></FaUserAlt></i><p>{user.username}</p></Link>
                            <CartWidget></CartWidget>
                        </div>

                    ) : (

                        <div className='flex items-center justify-center gap-4'>
                            <Link to="/login" className='inline-flex items-center justify-center gap-2 bg-main-color py-2 px-4 rounded-full text-sm text-black font-medium'><i><FaUserAlt></FaUserAlt></i><p>Iniciar Sesión</p></Link>
                            <CartWidget></CartWidget>
                        </div>

                    )
                }

            </nav>
            {/* end of NAV */}

        </header>

        // end of HEADER

    )
}

export default NavBar