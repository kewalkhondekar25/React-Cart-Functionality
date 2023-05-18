import React, { useContext } from 'react'
import { IoMdArrowDropup } from 'react-icons/io'
import { IoMdArrowDropdown } from 'react-icons/io'
import { AppContext } from './Context'

const CartItems = ({id, title, price, img, qty}) => {
  const {remove, increase, decrease} = useContext(AppContext)
  return (
    <article>
      <div className='cart-menu'>
        <img src={img} alt="pic" />
        <h3>{title}</h3>
        <div>
          <button className='btn-up'><IoMdArrowDropup className='up' onClick={()=> increase(id)} /></button>
          <h4>{qty}</h4>
          <button className='btn-down'><IoMdArrowDropdown className='down' onClick={()=> decrease(id)} /></button>
        </div>
        <div>
          <h4> &#8377; {price}</h4>
          <button className='btn-remove' onClick={() => remove(id)}>Remove</button>
        </div>
      </div>
      <hr />
    </article>
  )
}

export default CartItems
