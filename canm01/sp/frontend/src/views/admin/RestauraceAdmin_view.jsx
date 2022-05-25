import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Nav } from 'react-bootstrap';

const RestauraceAdmin_view = () => {
    const [restaurants, setRestaurants] = useState([]);
    useEffect(() => {
        const getRestaurants = async () => {
            const data = await axios.get("http://localhost/www/canm01/sp/backend/api/restaurant/getRestaurants.php");
            console.log(data.data);
            setRestaurants(data.data)
        }
        getRestaurants();
    }, [])

    const deleteRestaurant = async (idOfRestaurant) => {
        const ahoj = await axios({
            method: 'GET',
            url: `http://localhost/www/canm01/sp/backend/api/restaurant/deleteRestaurant.php?id=${idOfRestaurant}`,
        })
        setRestaurants(restaurants.filter(restaurant => restaurant.RestaurantID !== idOfRestaurant));
    }

    return (
        <div className='RestauraceAdmin'>
            <span>Správa restaurací</span>
            <div className='restaurantsContainer'>
                {
                    restaurants.map(restaurant => (
                        <div className='restaurant'>
                            {restaurant.Description}
                            <div>
                                <button className='normalButton' onClick={() => window.location.href = `/admin/restaurace/upravit/${restaurant.RestaurantID}`}>UPRAVIT</button>
                                <button className='normalButton' onClick={() => deleteRestaurant(restaurant.RestaurantID)}>SMAZAT</button>
                            </div>
                        </div>
                    ))
                }
                <button className='normalButton' onClick={() => window.location.href = "/admin/restaurace/nova"}>NOVÁ RESTAURACE</button>
            </div>
        </div>
    )
}

export default RestauraceAdmin_view