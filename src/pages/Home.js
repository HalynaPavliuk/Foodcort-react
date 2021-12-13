import {useEffect, useState} from 'react';
import {getAllCategories} from '../api'
import Preloader from '../components/Preloader';
import CategoryList from '../components/CategoryList'
import Search from '../components/Search';
import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
 
function Home() {
    const [catalog, setCatalog] = useState([]);
    const [filCatalog, setFilCatalog] = useState([]);

    const {pathname, search} = useLocation();
    const navigate = useNavigate();



    useEffect(() => {
        getAllCategories().then(data => {
            setCatalog(data.categories); 
            setFilCatalog(search ? data.categories.filter(el => el.strCategory.toLowerCase().includes(search.split('=')[1].toLowerCase())
          ) : data.categories
        )})
    }, [search])
    


    const handleSearch = (str) => {
        setFilCatalog(catalog.filter(el => el.strCategory.toLowerCase().includes(str.toLowerCase())));
        navigate(`${pathname}?search=${str}`)
    }
    


    return <>
    <Search cb={handleSearch} />
    {!catalog.length ? <Preloader /> : <CategoryList categories={filCatalog} /> }
    </>
}

export default Home;