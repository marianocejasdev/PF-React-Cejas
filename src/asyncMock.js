const products = [
    {
        id: "1",
        nombre: "Grand Triple Bacon",
        precio: 890,
        imagen: "https://raw.githubusercontent.com/zeikdev/img-react/c4e89f4b9c7e854622fea7f8a6f11c328660a7aa/burger-1.svg",
        categoria: "hamburguesas",
        "descripcion": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        id: "2",
        nombre: "Grand Crispy Onion",
        precio: 990,
        imagen: "https://raw.githubusercontent.com/zeikdev/img-react/c4e89f4b9c7e854622fea7f8a6f11c328660a7aa/burger-2.svg",
        categoria: "hamburguesas",
        "descripcion": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        id: "3",
        nombre: "Crispy Chicken",
        precio: 1090,
        imagen: "https://raw.githubusercontent.com/zeikdev/img-react/c4e89f4b9c7e854622fea7f8a6f11c328660a7aa/burger-3.svg",
        categoria: "hamburguesas",
        "descripcion": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        id: "4",
        nombre: "Guacamole Cheese Burger",
        precio: 890,
        imagen: "https://raw.githubusercontent.com/zeikdev/img-react/c4e89f4b9c7e854622fea7f8a6f11c328660a7aa/burger-4.svg",
        categoria: "hamburguesas",
        "descripcion": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        id: "5",
        nombre: "Veggie Burger",
        precio: 990,
        imagen: "https://raw.githubusercontent.com/zeikdev/img-react/c4e89f4b9c7e854622fea7f8a6f11c328660a7aa/burger-5.svg",
        categoria: "hamburguesas",
        "descripcion": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        id: "6",
        nombre: "Stacker Triple",
        precio: 1090,
        imagen: "https://raw.githubusercontent.com/zeikdev/img-react/c4e89f4b9c7e854622fea7f8a6f11c328660a7aa/burger-6.svg",
        categoria: "hamburguesas",
        "descripcion": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        id: "7",
        nombre: "Heart Attack Burger",
        precio: 890,
        imagen: "https://raw.githubusercontent.com/zeikdev/img-react/c4e89f4b9c7e854622fea7f8a6f11c328660a7aa/burger-7.svg",
        categoria: "hamburguesas",
        "descripcion": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        id: "8",
        nombre: "BBQ Bacon",
        precio: 990,
        imagen: "https://raw.githubusercontent.com/zeikdev/img-react/c4e89f4b9c7e854622fea7f8a6f11c328660a7aa/burger-8.svg",
        categoria: "hamburguesas",
        "descripcion": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        id: "9",
        nombre: "Papas Fritas",
        precio: 690,
        imagen: "https://raw.githubusercontent.com/zeikdev/img-react/c4e89f4b9c7e854622fea7f8a6f11c328660a7aa/papas-fritas.svg",
        categoria: "papas-fritas",
        "descripcion": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        id: "10",
        nombre: "Coca-Cola",
        precio: 590,
        imagen: "https://raw.githubusercontent.com/zeikdev/img-react/c4e89f4b9c7e854622fea7f8a6f11c328660a7aa/coca-cola.svg",
        categoria: "bebidas",
        "descripcion": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        id: "11",
        nombre: "Fanta",
        precio: 590,
        imagen: "https://raw.githubusercontent.com/zeikdev/img-react/c4e89f4b9c7e854622fea7f8a6f11c328660a7aa/fanta.svg",
        categoria: "bebidas",
        "descripcion": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        id: "12",
        nombre: "Sprite",
        precio: 590,
        imagen: "https://raw.githubusercontent.com/zeikdev/img-react/c4e89f4b9c7e854622fea7f8a6f11c328660a7aa/sprite.svg",
        categoria: "bebidas",
        "descripcion": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 1500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter((product) => product.categoria === categoryId))
        }, 1500)
    })
}

export const getProductsById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find((product) => product.id === productId))
        }, 1500)
    })
}