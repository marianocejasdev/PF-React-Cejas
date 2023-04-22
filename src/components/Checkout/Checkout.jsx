import { collection, query, where, documentId, getDocs, writeBatch, addDoc } from "firebase/firestore"
import { CartContext } from '../../context/CartContext'
import { db } from "../../services/firebase/firebaseConfig"
import { useContext, useState } from 'react'
import { useNotification } from "../../notification/NotificationService"

import { useNavigate } from "react-router-dom"

import ContactForm from "../ContactForm/ContactForm"

const Checkout = () => {
    const [orderId, setOrderId] = useState('')
    const [loading, setLoading] = useState(false)
    const { cart, total, clearCart } = useContext(CartContext)

    const { setNotification } = useNotification()

    const navigate = useNavigate()

    const createOrder = async (userData) => {
        try {
            setLoading(true)

            const objOrder = {
                buyer: userData,
                items: cart,
                total: total
            }

            const ids = cart.map(prod => prod.id)

            const productsRef = query(collection(db, 'products'), where(documentId(), 'in', ids))

            const { docs } = await getDocs(productsRef)

            const batch = writeBatch(db)
            const outOfStock = []

            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock

                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart?.quantity

                if (stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity })
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc })
                }
            })

            if (outOfStock.length === 0) {
                batch.commit()

                const ordersRef = collection(db, 'orders')

                const orderAdded = await addDoc(ordersRef, objOrder)

                clearCart()
                setOrderId(orderAdded.id)

                setTimeout(() => {
                    navigate('/')
                }, 5000)
            } else {
                setNotification('error', 'Hay productos que no tienen stock', 10)
            }
        } catch (error) {
            setNotification('error', 'Hubo un error generando la orden', 10)
        } finally {
            setLoading(false)
        }

    }

    if (loading) {
        return (
            <div className="container flex flex-1 items-center justify-center">
                <h1 className="text-3xl font-bold text-main-color">Se está generando su Orden</h1>
            </div>
        )
    }

    if (orderId) {
        return (
            <div className="container flex flex-col flex-1 items-center justify-center">
                <h1 className="text-3xl font-bold text-main-color">El id de su compra es: {orderId}</h1>
                <h2 className="text-3xl font-bold text-main-color">¡Muchas Gracias! 👋</h2>
            </div>
        )
    }

    return (
        <div className="container flex flex-col flex-1 items-center justify-center gap-12">
            <ContactForm onConfirm={createOrder} />
        </div>
    )
}

export default Checkout