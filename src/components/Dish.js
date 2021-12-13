import {Link} from 'react-router-dom'


function Dish(props){
    const {idMeal: id,
            strMeal: name,
            strMealThumb: img,
           } = props;

        return <div className="card dish" key={id}>
                
                    <div className="card-image">
                        <img src={img} />   
                    </div>

                    <div className="card-content">
                       <span className="card-title">{name}</span>
                       
                       <div className="card-action">
                         <Link to = {`/meal/${id}/`} className="btn">See {name} recipe</Link>
                       </div>
                    </div>
                 </div>

}

export default Dish;