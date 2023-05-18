import React, { useContext } from 'react'
import { AppContext } from './Context';
import CartItems from './CartItems';



const CartContainer = () => {

  //const{id, title, price, img, qty} = items;
  const { cart,total,clearCart, remove } = useContext(AppContext);
  return (
    <section>
      <h1>Your bag total is &#8377; {total}</h1>
      <button className='btn btn-primary w-25 mt-3 mb-3'>Check Out</button>
      <hr />
      {
        cart.map((item) => {
          return (
            <CartItems key={item.id} {...item} />
          )
        })
      }

      <button className='btn btn-danger w-25 m-5' onClick={clearCart} >Clear Cart</button>

    </section>
  )
}

export default CartContainer
