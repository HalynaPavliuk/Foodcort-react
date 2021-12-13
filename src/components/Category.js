import {Link} from 'react-router-dom'


function Category(props){
    const {idCategory: id,
           strCategory: name,
           strCategoryThumb: img,
           strCategoryDescription: description} = props;

        return <div className="card category" key={id}>
                
                    <div className="card-image">
                        <img src={img} />   
                    </div>

                    <div className="card-content">
                       <span className="card-title">{name}</span>
                       <p>{description.slice(0, 60)+'...'}</p>
                       <div className="card-action">
                         <Link to = {`/category/${name}`} className="btn">See {name}</Link>
                       </div>
                    </div>
                 </div>

}

export default Category;