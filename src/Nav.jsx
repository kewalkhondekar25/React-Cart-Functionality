import React, { useContext } from 'react'
import { AiFillThunderbolt } from 'react-icons/ai'
import { AiOutlineShopping } from 'react-icons/ai'
import {BsPerson} from 'react-icons/bs'
import { AppContext } from './Context'

const Nav = () => {
    const {qty} = useContext(AppContext)
    return (
        <nav>
            <div>
                <AiFillThunderbolt className='apple' />
            </div>
            <div>
                <p className='cart-count'>{qty}</p>
                <AiOutlineShopping className='cart' />
                <BsPerson className='cart-login'/>
            </div>
        </nav>
    )
}

export default Nav;
