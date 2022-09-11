import './cart-dropdown.styles.scss';
import Button from '../button/button.component';

const CartDropdown = () => {

    return (
        <>
            <div class='cart-dropdown-container'>
                <div className='cart-items'>
                    <Button>Checkout</Button>
                </div>

            </div>
        </>
    );

}

export default CartDropdown;