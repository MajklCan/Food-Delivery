import axios from 'axios';
import React, { useEffect, useState } from 'react'

const CategoryAdmin_view = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        const getCategories = async () => {
            const data = await axios.get("http://localhost/www/canm01/sp/backend/api/category/getCategories.php");
            setCategories(data.data)
        }
        getCategories();
    }, [])

    const deleteCategory = async (idOfCategory) => {
        const ahoj = await axios({
            method: 'GET',
            url: `http://localhost/www/canm01/sp/backend/api/category/deleteCategory.php?id=${idOfCategory}`,
        })
        console.log(ahoj);
        setCategories(categories.filter(category => category.CategoryID !== idOfCategory));
    }

    return (
        <div className='RestauraceAdmin'>
            <span>Správa kategorií</span>
            <div className='restaurantsContainer'>
                {
                    categories.map(category => (
                        <div className='restaurant'>
                            {category.Name}
                            <div>
                                {/* <button className='normalButton' onClick={() => window.location.href = `/admin/restaurace/upravit/${restaurant.RestaurantID}`}>UPRAVIT</button> */}
                                <button className='normalButton' onClick={() => deleteCategory(category.CategoryID)}>SMAZAT</button>
                            </div>
                        </div>
                    ))
                }
                <button className='normalButton' onClick={() => window.location.href = "/admin/restaurace/nova"}>NOVÁ KATEGORIE</button>
            </div>
        </div>
    )
}

export default CategoryAdmin_view