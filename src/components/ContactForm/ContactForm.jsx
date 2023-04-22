import { useState } from "react"

const ContactForm = ({ onConfirm }) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [email2, setEmail2] = useState('')

    const handleSubmit = () => {
        const userData = {
            name, phone, email
        }

        onConfirm(userData)
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center gap-10 py-24 px-48 rounded-xl border-2 border-main-color">

            <div className="flex flex-col items-center justify-center gap-4">
                <h1 className="text-3xl font-bold text-yellow-500">Checkout</h1>
                <h2 className="text-md font-normal text-white">Ingrese sus datos</h2>
            </div>

            <input minLength="5" type="text" required value={name} onChange={(e) => setName(e.target.value)} placeholder="Nombre.." className='bg-inherit py-2 px-4 rounded-full border-2 border-main-color outline-none text-white' />
            <input title="El telefono debe tener al menos 10 numeros" type="tel" pattern="[0-9]{10}" required value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Teléfono.." className='bg-inherit py-2 px-4 rounded-full border-2 border-main-color outline-none text-white' />
            <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Correo.." className='bg-inherit py-2 px-4 rounded-full border-2 border-main-color outline-none text-white' />
            <input type="email" required value={email2} onChange={(e) => setEmail2(e.target.value)} placeholder="Correo.." className='bg-inherit py-2 px-4 rounded-full border-2 border-main-color outline-none text-white' />

            {
                email === email2 ?
                    <button className='inline-flex items-center justify-center gap-2 bg-main-color py-2 px-8 rounded-full text-lg text-black font-medium'>Generar Orden</button>
                    :
                    <>
                        <button disabled="disabled" className='inline-flex items-center justify-center gap-2 bg-yellow-300 py-2 px-8 rounded-full text-lg text-black font-medium'>Generar Orden</button>
                        <p className="text-white text-sm">Los correos no coinciden</p>
                    </>

            }

        </form>
    )
}

export default ContactForm