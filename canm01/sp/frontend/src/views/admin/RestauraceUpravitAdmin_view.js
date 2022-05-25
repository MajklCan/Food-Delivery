import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';

const RestauraceUpravitAdmin_view = () => {
    let { id } = useParams();

    const {
        register,
        setValue,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const [restaurantData, setRestaurantData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await axios.get(`http://localhost/www/canm01/sp/backend/api/restaurant/getRestaurantById.php?id=${id}`);
            const currentRestaurant = data.data[0];
            setRestaurantData(currentRestaurant);
            setValue('description', currentRestaurant.Description, { shouldValidate: true });
            setValue('deliveryPrice', currentRestaurant.DeliveryPrice, { shouldValidate: true });
            setValue('deliveryEnstimateMin', currentRestaurant.DeliveryEstimateMin, { shouldValidate: true });
            setValue('openFrom', currentRestaurant.OpenFrom, { shouldValidate: true });
            setValue('openTo', currentRestaurant.OpenTo, { shouldValidate: true });
            setValue('acceptsFoodVoucher', currentRestaurant.AcceptsFoodVoucher, { shouldValidate: true });
        }
        fetchData();
    }, [])

    const onSubmit = async (data) => {
        data["id"] = id;
        await axios.put("http://localhost/www/canm01/sp/backend/api/restaurant/updateRestaurant.php", data);
        window.location.href = "/admin/restaurace";
    }

    return (
        <div>
            <form className='formCreateRestaurant' onSubmit={handleSubmit(onSubmit)}>
                <span>Úprava restaurace</span>
                <input className='inputCreateRestaurant' placeholder='POPIS...' {...register('description', { required: true })} />
                {errors.description && <p>popis je povinný</p>}
                <input className='inputCreateRestaurant' placeholder='CENA DORUČENÍ...' {...register('deliveryPrice', { required: true })} />
                {errors.deliveryPrice && <p>cena doručení je povinná</p>}
                <input className='inputCreateRestaurant' placeholder='ODHADOVANÁ DOBA DORUČENÍ...' {...register('deliveryEnstimateMin', { pattern: /\d+/ })} />
                {errors.deliveryEnstimateMin && <p>odhadovaná cena je povinná</p>}
                <input className='inputCreateRestaurant' placeholder='OTEVŘENO OD...' {...register('openFrom', { pattern: /\d+/ })} />
                {errors.openFrom && <p>otevřeno od je povinné</p>}
                <input className='inputCreateRestaurant' placeholder='OTEVŘENO DO...' {...register('openTo', { pattern: /\d+/ })} />
                {errors.openTo && <p>otevřeno do je povinné</p>}
                <input className='inputCreateRestaurant' placeholder='PŘIJÍMÁ SLEVOVÝ KUPÓN...' {...register('acceptsFoodVoucher', { pattern: /\d+/ })} />
                {errors.acceptsFoodVoucher && <p>odhadovaná cena je povinná</p>}
                <input type="submit" value="upravit" className='submitHandlerCreateRestaurant normalButton' />
            </form>
        </div>
    )
}

export default RestauraceUpravitAdmin_view