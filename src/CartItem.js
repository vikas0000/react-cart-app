import React from 'react';

const CartItem = (props) =>{

        const {title, price, qty} = props.product;
        return (
            <div className='cart-item'>
                <div className='left-block'>
                    <img alt="product Image" style={styles.image} src = {props.product.img}/>    
                </div>
                <div className='right-block'>
                    <div style={{fontSize: 25}}>{title}</div>
                    <div style={{color: '#777'}}>Rs. {price}</div>
                    <div style={{color: '#777'}}>Qty {qty}</div>
                    <div className='cart-item-actions'>
                        {/* Button */}
                        <img 
                        alt="decrease" 
                        className="action-icons" 
                        src="https://image.flaticon.com/icons/svg/1828/1828906.svg"
                        onClick={() => props.onDecreaseQuantity(props.product)}
                        
                        />
                        <img 
                        alt="increase" 
                        className="action-icons" 
                        src="https://image.flaticon.com/icons/svg/992/992651.svg"
                        onClick={() => props.onIncreaseQuantity(props.product)}
                        
                        />
                        <img 
                        alt="delete" 
                        className="action-icons" 
                        src="https://image.flaticon.com/icons/svg/1345/1345823.svg"
                        onClick={() => props.onDelete(props.product.id)}
                        
                        />
                        
                    </div>
                </div>
            </div>
        );
    }


const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: '#777'

    }
}

export default CartItem;