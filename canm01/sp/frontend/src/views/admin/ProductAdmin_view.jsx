import axios from 'axios';
import React, { useEffect, useState } from 'react'

const CategoryAdmin_view = ({ idOfCategory, idOfRestaurant }) => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const getProducts = async () => {
            const data = await axios.get(`http://localhost/www/canm01/sp/backend/api/product/getProducts.php?categoryID=${idOfCategory}`);
            setProducts(data.data)
        }
        getProducts();
    }, [])

    const deleteCategory = async (idOfProduct) => {
        const ahoj = await axios({
            method: 'GET',
            url: `http://localhost/www/canm01/sp/backend/api/product/deleteProduct.php?id=${idOfProduct}`,
        })
        console.log(ahoj);
        setProducts(products.filter(product => product.ProductID !== idOfProduct));
    }

    return (
        <div className='RestauraceAdmin'>
            <span>Správa produktů</span>
            <div className='restaurantsContainer'>
                {
                    products.map(product => (
                        <div className='restaurant'>
                            {product.Name}
                            <div>
                                <button className='normalButton' onClick={() => window.location.href = `/admin/produkt/upravit/${idOfRestaurant}/${idOfCategory}/${product.ProductID}`}>UPRAVIT</button>
                                <button className='normalButton' onClick={() => deleteCategory(product.ProductID)}>SMAZAT</button>
                            </div>
                        </div>
                    ))
                }
                <button className='normalButton' onClick={() => window.location.href = `/admin/produkt/nova/${idOfRestaurant}/${idOfCategory}`}>NOVÝ PRODUKT</button>
            </div>
        </div>
    )
}

export default CategoryAdmin_view