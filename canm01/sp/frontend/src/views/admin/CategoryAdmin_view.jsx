import axios from 'axios';
import React, { useEffect, useState } from 'react'

const CategoryAdmin_view = ({ idOfRestaurant }) => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        const getCategories = async () => {
            const data = await axios.get(`http://localhost/www/canm01/sp/backend/api/category/getCategories.php?restaurantID=${idOfRestaurant}`);
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
                                <button className='normalButton' onClick={() => window.location.href = `/admin/kategorie/upravit/${category.RestaurntID}/${category.CategoryID}`}>UPRAVIT</button>
                                <button className='normalButton' onClick={() => deleteCategory(category.CategoryID)}>SMAZAT</button>
                            </div>
                        </div>
                    ))
                }
                <button className='normalButton' onClick={() => window.location.href = "/admin/kategorie/nova/" + idOfRestaurant}>NOVÁ KATEGORIE</button>
            </div>
        </div>
    )
}

export default CategoryAdmin_view