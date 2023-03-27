import React from 'react'
import Title from './utils/Title'

//Slider
import { Splide, SplideSlide } from '@splidejs/react-splide';
// Default theme
import '@splidejs/react-splide/css';
//Icons
import { ClockIcon, HashtagIcon, HeartIcon } from '@heroicons/react/24/solid';

const Stories = ({ story: { title, news} }) => {
  return (
    <>
    <div className='nike-container mb-11'>
        <Title title={title}/>
        <div>
            <Splide>
                {news.map((val,i) => (
                    <SplideSlide 
                    key={i}
                    className="mb-0.5">
                        <div>
                            <div>
                                <img src={val.img}
                                alt={`img/story/${i}`}
                                className="w-20 h-20">
                                </img>
                                <div>
                                    <div>
                                        <HeartIcon className='icon-style'/>
                                        <span>{val.like}</span>
                                    </div>
                                    <div>
                                        <ClockIcon className='icon-style'/>
                                        <span>{val.time}</span>
                                    </div>
                                    <div>
                                        <HashtagIcon className='icon-style'/>
                                        <span>{val.by}</span>
                                    </div>
                                </div>
                                <div>
                                    <h1>{val.title}</h1>
                                    <p>{val.text}</p>
                                </div>
                                <div>
                                    <a href={val.url}>{val.btn}</a>
                                </div>
                            </div>
                        </div>
                    </SplideSlide>
                ))}
            </Splide>
        </div>
    </div>
    </>
  )
}

export default Stories