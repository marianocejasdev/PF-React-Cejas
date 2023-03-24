import Logo from '/img/logo.svg'
import CartWidget from '../CartWidget/CartWidget'
import SearchInput from '../SearchInput/SearchInput'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {

    return (

        <nav className="bg-black">
            <div className="container px-10 mx-auto flex items-center justify-between py-3">

                <div className='flex items-center justify-between gap-5'>

                    <Link to={'/'}>
                        <img src={Logo} className='w-16' alt="HDV - Hamburguesas de Verdad." />
                    </Link>

                    <NavLink to='/category/hamburguesas' className="target:text-yellow-500 text-white uppercase font-medium hover:text-yellow-500 transition-all text-lg">Hamburguesas</NavLink>
                    <NavLink to='/category/papas-fritas' className="text-white uppercase font-medium hover:text-yellow-500 transition-all text-lg">Papas Fritas</NavLink>
                    <NavLink to='/category/bebidas' className="text-white uppercase font-medium hover:text-yellow-500 transition-all text-lg">Bebidas</NavLink>

                </div>

                <div className='flex items-center justify-between gap-5'>

                    <SearchInput></SearchInput>
                    <CartWidget></CartWidget>

                </div>

            </div>
        </nav >
    )
}

export default Navbar;