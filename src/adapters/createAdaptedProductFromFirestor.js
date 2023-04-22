export const createAdaptedProductFromFirestore = (doc) => {
    const data = doc.data()

    const productAdapted = {
        id: doc.id,
        nombre: data.nombre,
        imagen: data.imagen,
        precio: data.precio,
        stock: data.stock,
        categoria: data.categoria,
        descripcion: data.descripcion
    }

    return productAdapted
}