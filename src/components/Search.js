
import { useState } from "react";



function Search ({cb = Function.prototype}) {
    const [value, setValue] = useState('');

    const handleKey = (e) => {
        if (e.key === 'Enter') {
            handleSubmit();
        } 
    }

    const handleSubmit = (e) => {
        cb(value);
    }


    return <div className="input-field col s12">
            <input type="search"  placeholder="search" onKeyDown={handleKey} onChange={(e) => setValue(e.target.value)} value={value} />
            <button className="btn search" onClick={handleSubmit} >Search</button>
        </div>
   
}

export default Search;