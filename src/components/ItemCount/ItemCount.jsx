const ItemCount = () => {
    return (
        <div className="flex gap-3 py-5">
            <div className="flex gap-5 justify-between items-center border-2 border-yellow-500 bg-yellow-500 rounded-full py-1 px-2 transition-all">

                <button className="flex items-center bg-yellow-500 hover:bg-amber-400 justify-center w-3 h-3 p-3 rounded-full transition-all">
                    <i className="fa-solid fa-minus"></i>
                </button>

                <span className="font-medium">0</span>

                <button className="flex items-center bg-yellow-500 hover:bg-amber-400 justify-center w-3 h-3 p-3 rounded-full">
                    <i className="fa-solid fa-plus"></i>
                </button>

            </div>

            <button className="flex items-center gap-3 justify-center text-dark hover:text-yellow-500 font-medium border-2 border-yellow-500 bg-yellow-500 hover:bg-black rounded-full py-2 px-5 transition-all">
                <i className="fa-solid fa-cart-plus"></i>
                Agregar al Carrito</button>
        </div>
    )
}

export default ItemCount

