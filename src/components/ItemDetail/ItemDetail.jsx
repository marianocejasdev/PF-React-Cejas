import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({ nombre, imagen, precio, descripcion }) => {

    return (
        <>
            <img className="drop-shadow-[0_0px_10px_rgba(255,122,0,0.8)] hover:scale-105 transition-all" src={imagen} alt={nombre} />

            <div className="flex flex-col gap-3">
                <h3 className="font-medium text-white text-3xl">{nombre}</h3>
                <h4 className="font-medium text-white text-xl">${precio}</h4>
                <p className="text-white text-xs">{descripcion}</p>
                <ItemCount></ItemCount>
            </div>
        </>
    )
}

export default ItemDetail