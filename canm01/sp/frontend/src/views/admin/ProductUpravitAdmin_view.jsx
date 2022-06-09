import axios from 'axios';
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';

const ProductUpravitAdmin_view = () => {
    let { idOfProduct, idOfRestaurant, idOfCategory } = useParams();

    const {
        register,
        setValue,
        handleSubmit,
        formState: { errors },
    } = useForm();

    useEffect(() => {
        const fetchData = async () => {
           const data = await axios.get(`http://localhost/www/canm01/sp/backend/api/product/getProductById.php?id=${idOfProduct}`);
           const currentProduct = data.data[0];
           console.log(data.data[0]);
           setValue('name', currentProduct.Name, { shouldValidate: true });
           setValue('description', currentProduct.Description, { shouldValidate: true });
           setValue('price', currentProduct.Price, { shouldValidate: true });
        }
        fetchData();
    }, [])

    const onSubmit = async (data) => {
        data["id"] = idOfProduct;
        await axios.put("http://localhost/www/canm01/sp/backend/api/product/updateProduct.php", data);
        window.location.href = `/admin/kategorie/upravit/${idOfRestaurant}/${idOfCategory}`;
    }

    return (
        <div>
            <form className='formCreateRestaurant' onSubmit={handleSubmit(onSubmit)}>
                <span>Úprava kategorie</span>
                <input className='inputCreateRestaurant' placeholder='JMÉNO...' {...register('name', { required: true })} />
                {errors.name && <p>jméno je povinné</p>}
                <input className='inputCreateRestaurant' placeholder='POPIS...' {...register('description', { required: true })} />
                {errors.description && <p>popis je povinný</p>}
                <input className='inputCreateRestaurant' placeholder='CENA...' {...register('price', { pattern: /\d+/ })} />
                {errors.price && <p>cena je povinná</p>}
                <input type="submit" value="UPRAVIT" className='submitHandlerCreateRestaurant normalButton' />
            </form>
        </div>
    )
}

export default ProductUpravitAdmin_view