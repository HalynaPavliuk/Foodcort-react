import {useParams} from 'react-router-dom'
import {getFilterByCategory} from '../api';
import {useEffect, useState} from 'react';
import Preloader from '../components/Preloader';
import DishesList from '../components/DishesList';

function CategoryDishes(){
    const {name} = useParams();
    const [dishes, setDishes] = useState([]);


    useEffect(() => {
        getFilterByCategory(name).then((data) => {setDishes(data.meals)});
    }, [name]);
    
        return <>
            {!dishes.length ? <Preloader /> : <DishesList dishes={dishes} />}
        </>
}

export default CategoryDishes;