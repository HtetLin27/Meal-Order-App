import React from 'react';
import classes from './Cart.module.css'
import Modal from '../UI/Modal';


const Cart = (props) => {
    const cartitems = <ul>{[{id:'c1',name:'Sushi',amount:2,price:12.99}].map((item)=> <li style={{ listStyle: 'none',marginLeft:'-40px' }}>{item.name}</li>)}</ul> 

  return (
    <Modal onClose={props.onClose} >        
      {cartitems}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>35.62</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
            <button className={classes.button}>Order</button>
        </div>
    </Modal>

  )
}

export default Cart
