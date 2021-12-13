import Dish from "./Dish";

function DishesList(props){

    const {dishes = []} = props;

        return <div className="dishes-list">
            {dishes.map(el => (<Dish key={el.idMeal} {...el} />))}
        </div>

}
export default DishesList;