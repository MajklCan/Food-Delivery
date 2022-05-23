import axios from 'axios';
import React, { useEffect, useState } from 'react'

const RestauraceAdmin_view = () => {
    const [restaurants, setRestaurants] = useState([]);
    useEffect(() => {
        const getRestaurants = async () => {
            const data = await axios.get("http://localhost/www/canm01/sp/backend/api/restaurants.php");
            console.log(data.data);
            setRestaurants(data.data)
        }
        getRestaurants();
    }, [])

    return (
        <div className='RestauraceAdmin'>
            <span>Správa restaurací</span>
            <div className='restaurantsContainer'>
                {
                    restaurants.map(restaurant => (
                        <div className='restaurant'>{restaurant.Description}</div>
                    ))
                }
            </div>
        </div>
    )
}

export default RestauraceAdmin_view