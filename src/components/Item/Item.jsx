import { Link } from "react-router-dom"

const Item = ({ id, nombre, imagen, precio }) => {

    return (
        <div className="flex flex-col gap-4 font-medium text-white">
            <img className="drop-shadow-[0_0px_10px_rgba(255,122,0,0.8)] hover:scale-105 transition-all w-[250px] h-[250px]" src={imagen} alt={nombre} />
            <h3>{nombre}</h3>
            <h4>${precio}</h4>
            <Link to={`/item/${id}`} className="text-black hover:text-main-color border-2 border-main-color bg-main-color hover:bg-black rounded-full py-2 px-5 transition-colors">Ver Detalle</Link>
        </div >
    )

}

export default Item