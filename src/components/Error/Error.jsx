import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
    return (

        <div className="container flex flex-col flex-1 items-center justify-center gap-12">

            <div className="flex flex-col items-center justify-center gap-4">
                <span className="text-3xl font-bold text-yellow-500">Oops!</span>
                <h1 className="text-3xl font-bold text-yellow-500">Hubo un Error</h1>
            </div>

            <Link to="/" className='inline-flex items-center justify-center gap-2 bg-main-color py-2 px-8 rounded-full text-lg text-black font-medium'><p>Volver al Inicio</p></Link>

        </div>

    )
}

export default Error