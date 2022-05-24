import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form';

const RestauraceVytvoritAdmin_view = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        await axios.post("http://localhost/www/canm01/sp/backend/api/restaurant/createRestaurant.php", data);
        window.location.href = "/admin/restaurace";
    }

    return (
        <form className='formCreateRestaurant' onSubmit={handleSubmit(onSubmit)}>
            <span>Vytváření restaurací</span>
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
            <input type="submit" className='submitHandlerCreateRestaurant normalButton' />
        </form>
    );
}

export default RestauraceVytvoritAdmin_view