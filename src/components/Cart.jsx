import React from 'react'

//Components
import CartCount from './cart/CartCount'
import CartEmpty from './cart/CartEmpty'
import CartItem from './cart/CartItem'

//Hook
import { useDispatch } from 'react-redux'
import { selectCartItems, selectCartState, setCloseCart, setClearCartItem, setGetTotals, selectTotalAmount, selectTotalQTY } from '../app/CartSlice'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { useEffect } from 'react'

const Cart = () => {

const dispatch = useDispatch();
const ifCartState = useSelector(selectCartState);
const cartItems = useSelector(selectCartItems);
const totalAmount = useSelector(selectTotalAmount);
const totalQTY = useSelector(selectTotalQTY);

useEffect(()=>{
  dispatch(setGetTotals())
} , [cartItems, dispatch])


const onCartToggle = () => {
    dispatch(setCloseCart({
        cartState: false
    }))
}

const onClearCartItem = () => {
  dispatch(setClearCartItem())
}
  return (
    <>
        <div className={`fixed top-0 right-0 left-0 bottom-0 
        blur-effect-theme w-full h-screen opacity-100 z-[250]
        ${ifCartState ? 'opacity-100 visible translate-x-0' 
        :
        'opacity-0 invisible translate-x-8'
        }`}>
            <div className={`blur-effect-theme h-screen max-w-xl 
            w-full absolute right-0`}>
                <CartCount totalQTY={totalQTY}  onCartToggle={onCartToggle} onClearCartItem={onClearCartItem}/>

                {cartItems.length === 0 ? <CartEmpty onCartToggle={onCartToggle} /> : 
                <div>
                  <div className='flex items-start justify-start flex-col gap-y-7 lg:gap-y-5 overflow-y-scroll h-[81vh] scroll-smooth scroll-hidden py-3'>
                    {cartItems?.map((item,i) => (
                      <CartItem key={i} item={item}/>
                    ))}
                  </div>

                  <div className='fixed bottom-0 bg-white w-full px-5 py-2 grid item-center'>
                    <div className='flex items-center justify-between'>
                      <h1 className='text-base font-semibold uppercase'>SubTotal</h1>
                      <h1 className='text-sm rounded bg-theme-cart text-slate-100 px-1 py-0.5'>${totalAmount}</h1>
                    </div>

                    <div className='grid items-center gap-2'>
                        <p className='text-sm font-medium text-center'>
                          Taxes and shipping will calculate at shipping
                        </p>
                        <button className='button-theme bg-theme-cart text-slate-100' type='button'>
                          Check Out
                        </button>
                    </div>
                  </div>

                </div>
                }

            </div>
        </div>
    </>
  )
}

export default Cart