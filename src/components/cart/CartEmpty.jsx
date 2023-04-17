import React from 'react'

//Icons
import { ArrowLeftIcon } from '@heroicons/react/24/solid'

//Images 
import emptybag from '../../assets/emptybag.svg'

const CartEmpty = ({ onCartToggle }) => {
  return (
    <>
        <div className='flex flex-col items-center justify-center h-screen px-11 text-center gap-7'>
            <img 
            src={emptybag}
            alt="emptybag/img"
            className='w-60 lg:w-44 sm:w-40 h-auto object-fill transition-all duration-300 hover:scale-110'
            />
            <button type='button' className='button-theme bg-gradient-to-br from-sky-500 to-blue-500
            flex items-center justify-center text-slate-100 py-2 gap-3 text-sm px-5 font-semibold
            active:scale-110' onClick={onCartToggle}>
                <ArrowLeftIcon className='w-5 h-5 text-slate-100' />
                <span className=''>
                    Back to Nike Store
                </span>
            </button>
        </div>
    </>
  ) 
}

export default CartEmpty