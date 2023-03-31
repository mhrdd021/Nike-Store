import React from 'react'

//Components
import { Navbar , Hero , Sales, FlexContent, Stories , Footer, Cart} from './components'

//Data
import { heroapi , popularsales , toprateslaes , highlight , sneaker , footerAPI} from './data/Data'

const App = () => {
  return (
    <>
      <main className='flex flex-col gap-16 relative'>
        <Navbar/>
        <Cart/>
        <Hero heroapi={heroapi}/>
        <Sales endpoint={popularsales} ifExists/>
        <FlexContent endpoint={highlight} ifExists/>
        <Sales endpoint={toprateslaes}/>
        <FlexContent endpoint={sneaker}/>
        <Stories/>
        <Footer footerAPI={footerAPI}/>
      </main>
    </>
  )
}

export default App