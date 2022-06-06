import axios from 'axios';
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import ProductAdmin_view from './ProductAdmin_view'
const CategoryUpravitAdmin_view = () => {
    let { idOfRestaurant, idOfCategory } = useParams();

    const {
        register,
        setValue,
        handleSubmit,
        formState: { errors },
    } = useForm();

    useEffect(() => {
        const fetchData = async () => {
            const data = await axios.get(`http://localhost/www/canm01/sp/backend/api/category/getCategoryById.php?id=${idOfCategory}`);
            console.log(data.data[0]);
            const currentCategory = data.data[0];
            console.log(currentCategory);
            setValue('name', currentCategory.Name, { shouldValidate: true });
            setValue('priority', currentCategory.Priority, { shouldValidate: true });
        }
        fetchData();
    }, [])

    const onSubmit = async (data) => {
        data["id"] = idOfRestaurant;
        await axios.put("http://localhost/www/canm01/sp/backend/api/category/updateCategory.php", data);
        window.location.href = "/admin/restaurace/upravit/" + idOfCategory;
    }

    return (
        <div className="formMainRestaurantChange">
            <form className='formCreateRestaurant' onSubmit={handleSubmit(onSubmit)}>
                <span>Úprava kategorie</span>
                <input className='inputCreateRestaurant' placeholder='JMÉNO...' {...register('name', { required: true })} />
                {errors.name && <p>jméno je povinné</p>}
                <input className='inputCreateRestaurant' placeholder='PRIORITA...' {...register('priority', { required: true })} />
                {errors.priority && <p>priorita je povinná</p>}
                <input type="submit" value="UPRAVIT" className='submitHandlerCreateRestaurant normalButton' />
            </form>
            <ProductAdmin_view idOfCategory={idOfCategory} idOfRestaurant={idOfRestaurant}/>
        </div>
    )
}

export default CategoryUpravitAdmin_view