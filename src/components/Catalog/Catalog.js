import './Catalog.css'

import ProductCard from "../ProductCard/ProductCard";
import {product} from "../mork/Product-mork";

const Catalog = () => {
    return(
       <div className="catalog">
           {
               product.map(product => {
                   return (<ProductCard id ={product.id} author={product.author}  description={product.description} price={product.price}/>)
               })
           }
       </div>
    )
}

export default Catalog;