import React from 'react'
import { FaSearch } from "react-icons/fa";

const Buscador = () => {
    return (

        <form action="/" className='flex items-center justify-center bg-transparent border-2 border-main-color rounded-full py-2 px-4'>

            <input type="text" name="" id="" placeholder='Buscar..' className='bg-inherit border-none outline-none' />
            <button type="submit">
                <i className='text-main-color'><FaSearch></FaSearch></i>
            </button>

        </form>

    )
}

export default Buscador