const CartWidget = () => {

    return (

        <div className="flex items-center gap-2">
            <span className="flex items-center justify-center bg-yellow-400 w-3 h-3 p-3 rounded-full">{1}</span>
            <a href="#">
                <i className="fa-solid fa-cart-shopping text-yellow-400 text-xl"></i>
            </a>
        </div>

    )

};

export default CartWidget;