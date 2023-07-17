import { Suspense, useEffect, useState } from "react";
import { ProductList } from "./ProductList";

function Product() {
    const [products, setProducts] = useState([])
    const [keyword, setKeyword] = useState('')

    useEffect(() => {
        async function GetProducts() {
            const response = await fetch('http://192.168.17.120:4001/api/products').then(res => res.json())
            setProducts(response)
        }

        GetProducts();
    }, []);

    const handleSubmit = evt => {
        evt.preventDefault()

        if (keyword.length === 0) {
            alert("Busqueda no puede estar vacia")
        } else {
            alert(keyword)
        }
    }

    const handleChange = evt => {
        evt.preventDefault()
        setKeyword(evt.target.value)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <button>Buscar</button>

                <label htmlFor='productName' />
                <input id='productName' placeholder="Escriba el nombre de un producto" onChange={handleChange} type='text' value={keyword} />
            </form>
            <button onClick={() => alert("No implementado")}>Nuevo</button>
            <h3>Producto</h3>
            <Suspense fallback={<>Cargando productos...</>}>
                {products?.length === [] ? <p>No hay productos</p> : <ProductList products={products} />}
            </Suspense>

        </>

    )
}

export default Product;