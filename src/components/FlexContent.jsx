import React from 'react'

const FlexContent = ({ endpoint: {title , heading , subtitle , text , img , btn , url} }) => {
  return (
    <>
        <div className={`flex items-center justify-between lg:flex-col
        lg:justify-center nike-container`}>
            <div className=''>
                <h1>{heading}</h1>
                <h1>{title}</h1>
                <p>{text}</p>
                <a href={url}>
                    <button type='button' className=''>
                        {btn}
                    </button>
                </a>
            </div>

            <div className=''>
                <img 
                    src={img}
                    alt={`img/${heading}`}/>
            </div>
        </div>
    </>
  )
}

export default FlexContent