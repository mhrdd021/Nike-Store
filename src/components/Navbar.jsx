import React, { useEffect, useState } from 'react'

//Hook
import { useDispatch } from 'react-redux/es/exports'
import { useSelector } from 'react-redux/es/exports'
import { selectTotalQTY } from '../app/CartSlice'
//Icons
import { HeartIcon , ShoppingBagIcon , MagnifyingGlassIcon} from "@heroicons/react/24/outline"
//Logo
import Logo from '../assets/logo.png'
import { setOpenCart } from '../app/CartSlice'

const Navbar = () => {

const [navState , setNavState] = useState(false)

const dispatch = useDispatch();
const totalQTY = useSelector(selectTotalQTY);

const onCartToggle = () => {
    dispatch(setOpenCart({
        cartState: true
    }))
}

const onNavScroll = () => {
    if(window.scrollY > 30){
        setNavState(true)
    } else {
        setNavState(false)
    }
}

useEffect(() => {
    window.addEventListener('scroll' , onNavScroll);

    return () => {
        window.removeEventListener('scroll' , 
        onNavScroll)
    }
} , [])

  return (
    <>
        <header className={
            !navState ? 'absolute top-7 left-0 right-0 opacity-100 z-50'
            :
            'fixed top-0 left-0 right-0 h-[9vh] flex item-center justify-center opacity-100 z-[200] blur-effect-theme'
        }>
            <nav className='flex items-center justify-between nike-container'>
                <div className='flex item-center'>
                    <img src={Logo} alt="logo" 
                    className={`w-16 h-auto 
                    ${navState &&  "filter brightness-0"}
                    `} />
                </div>

                <ul className='flex items-center justify-center gap-2'>
                    <li className='grid items-center'>
                        <MagnifyingGlassIcon className={`icon-style ${navState && "text-slate-900 transition-all duration-300"}`}/>
                    </li>
                    <li className='grid items-center'>
                        <HeartIcon className={`icon-style ${navState && "text-slate-900 transition-all duration-300"}`}/>
                    </li>
                    <li className='grid items-center'>
                        <button type='button' onClick={onCartToggle} className='border-none outline-none active:scale-110
                        transition-all duration-300 relative'>
                            <ShoppingBagIcon className={`icon-style ${navState && "text-slate-900 transition-all duration-300"}`}/>
                            <div className={`absolute top-4 right-0 
                            w-4 h-4 text-[0.65rem] leading-tight font-medium rounded-full flex
                            item-center justify-center cursor-pointer hover:scale-110 transition-all
                            duration-300
                            ${navState ? 'bg-slate-900 text-slate-100 shadow-slate-900' : 'bg-slate-100 text-slate-900 shadow-slate-900'}`}>{totalQTY}</div>
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    </>
  )
}

export default Navbar