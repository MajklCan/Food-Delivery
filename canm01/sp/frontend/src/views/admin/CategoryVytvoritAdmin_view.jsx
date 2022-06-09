import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';

const CategoryVytvoritAdmin_view = () => {
    let { idOfRestaurant } = useParams();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        data["restaurantID"] = idOfRestaurant;
        const ahoj = await axios.post("http://localhost/www/canm01/sp/backend/api/category/createCategory.php", data);
        window.location.href = "/admin/restaurace/upravit/" + idOfRestaurant;
    }

    return (
        <form className='formCreateRestaurant' onSubmit={handleSubmit(onSubmit)}>
            <span>Vytváření kategorií</span>
            <input className='inputCreateRestaurant' placeholder='JMÉNO...' {...register('name', { required: true })} />
            {errors.name && <p>jméno je povinné</p>}
            <input className='inputCreateRestaurant' placeholder='PRIORITA...' {...register('priority', { pattern: /\d+/, required: true })} />
            {errors.priority && <p>priorita je povinná</p>}
            <input type="submit" value="VYTVOŘIT" className='submitHandlerCreateRestaurant normalButton' />
        </form>
    );
}

export default CategoryVytvoritAdmin_view