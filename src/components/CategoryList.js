import Category from "./Category";

function CategoryList(props){

    const {categories = []} = props;

        return <div className="category-list">
            {categories.map(el => (<Category key={el.idCategory} {...el} />))}
        </div>

}
export default CategoryList;