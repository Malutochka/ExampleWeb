import './Categies.css'
import {categories} from "../mork/categories-mock";
const Categories = () => {
    return (
        <div className="categories">
            {
                categories.map(categories =>{
                    return (
                        <div>
                            {categories.Name}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Categories;