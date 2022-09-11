import { useContext } from "react";
import {CartContext} from '../../contexts/cart.context';

//import './checkout/styles.scss'


const Checkout = () => {

    const {cartItems, addItemToCart} = useContext(CartContext);
    

    return(
        <>
            <div>
                <h1>Checkout</h1>
                <div>
                    {
                        cartItems.map((cartItem) => {
                            const {id, name, quantity} = cartItem;
                            return <div key={id}>
                                    <h2>{name}</h2>
                                    <h2>{quantity}</h2>
                                    <span>&lt;</span>  {/*DECREMENT*/}
                                    <span onClick={() => addItemToCart(cartItem)}>&gt;</span> {/*INCREMENT*/}
                                </div>
                        })
                    }
                </div>
            </div>
        </>
    );
};

export default Checkout;