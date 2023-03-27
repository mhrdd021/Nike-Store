import React from 'react'

//Components
import { Hero , Sales, FlexContent, Stories} from './components'

//Data
import { heroapi , popularsales , toprateslaes , highlight , sneaker , story} from './data/data.js'

const App = () => {
  return (
    <>
      <main className='flex flex-col gap-16 relative'>
        <Hero heroapi={heroapi}/>
        <Sales endpoint={popularsales} ifExists/>
        <FlexContent endpoint={highlight} ifExists/>
        <Sales endpoint={toprateslaes}/>
        <FlexContent endpoint={sneaker}/>
        <Stories story={story}/>
      </main>
    </>
  )
}

export default App