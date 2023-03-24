import { Link } from "react-router-dom"

const Item = ({ id, nombre, imagen, precio }) => {

    return (
        <div className="flex flex-col gap-4">
            <img className="drop-shadow-[0_0px_10px_rgba(255,122,0,0.8)] hover:scale-105 transition-all" src={imagen} alt={nombre} />
            <h3 className="font-medium text-white">{nombre}</h3>
            <h4 className="font-medium text-white">${precio}</h4>
            <Link to={`/item/${id}`} className="text-dark hover:text-yellow-500 font-medium border-2 border-yellow-500 bg-yellow-500 hover:bg-black rounded-full py-2 px-5 transition-all">Ver Detalle</Link>
        </div >
    )

}

export default Item