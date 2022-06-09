import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';

const ProductVytvoritAdmin_view = () => {
    const { idOfRestaurant, idOfCategory} = useParams();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        data["categoryID"] = idOfCategory;
        data["restaurantID"] = idOfRestaurant;
        const ahoj = await axios.post("http://localhost/www/canm01/sp/backend/api/product/createProduct.php", data);
        window.location.href = `http://localhost:3000/admin/kategorie/upravit/${idOfRestaurant}/${idOfCategory}`;
    }

    return (
        <form className='formCreateRestaurant' onSubmit={handleSubmit(onSubmit)}>
            <span>Vytváření produktů</span>
            <input className='inputCreateRestaurant' placeholder='JMÉNO...' {...register('name', { required: true })} />
            {errors.name && <p>jméno je povinné</p>}
            <input className='inputCreateRestaurant' placeholder='POPIS...' {...register('description', { required: true })} />
            {errors.description && <p>popis je povinný</p>}
            <input className='inputCreateRestaurant' placeholder='CENA...' {...register('price', { pattern: /\d+/ })} />
            {errors.price && <p>cena je povinná</p>}
            <input type="submit" value="VYTVOŘIT" className='submitHandlerCreateRestaurant normalButton' />
        </form>
    );
}

export default ProductVytvoritAdmin_view