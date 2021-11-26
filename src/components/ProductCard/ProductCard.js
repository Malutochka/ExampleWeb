import './ProductCard.css'
import {useState} from "react";

const ProductCard = (props) => {
    const [amount, setamount] = useState (0)


    return(
        <div className="Product-card">
            <div className={"title"}>
                {props.title}
            </div>

            <div className={"author"}>
                {props.author}
            </div>
            <div className={"description"}>
                {props.description}
            </div>
            <div className={"price"}>
                {props.price}
            </div>

            <div className={"Order-block"}>
                <div className={"amount"}>
                    {amount}
                </div>

                <div className={"add"}>
                    <button onClick={() =>{
                        setamount(amount + 1)
                    }}> + </button>
                </div>

                <div className={"remove"}>
                    <button onClick={() =>{
                        amount > 0 && setamount(amount - 1)
                    }}> - </button>
                </div>
            </div>

        </div>
    )
}

export default ProductCard