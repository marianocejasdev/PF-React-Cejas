import Item from "../Item/Item";


const ItemList = ({ products }) => {
    return (

        <div className="grid grid-cols-4 gap-5 p-10 justify-items-center items-center">

            {
                products.map(product => {
                    return (

                        <Item key={product.id} {...product}></Item>

                    )
                })
            }

        </div>
    )
}

export default ItemList