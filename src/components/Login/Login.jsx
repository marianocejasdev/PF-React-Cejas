import { useState } from "react"
import { useAuth } from "../../context/AuthContext"
import { FaUserAlt } from "react-icons/fa";


const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const { login } = useAuth()

    const handleLogin = (e) => {
        e.preventDefault()

        login(username, password)
    }

    return (

        <div className="container flex flex-col flex-1 items-center justify-center gap-12">

            <form onSubmit={handleLogin} className="flex flex-col items-center justify-center gap-10 py-24 px-48 rounded-xl border-2 border-main-color">

                <i className="text-main-color text-4xl"><FaUserAlt></FaUserAlt></i>

                <input required type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Username..' className='bg-inherit py-2 px-4 rounded-full border-2 border-main-color outline-none text-white' />

                <input required type="password" title="Debe contener al menos un número y una letra mayúscula y minúscula, y al menos 8 o más caracteres" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password..' className='bg-inherit py-2 px-4 rounded-full border-2 border-main-color outline-none text-white' />

                <button to="/login" className='inline-flex items-center justify-center gap-2 bg-main-color py-2 px-8 rounded-full text-lg text-black font-medium'><p>Iniciar Sesión</p></button>
            </form>
        </div>
    )
}

export default Login