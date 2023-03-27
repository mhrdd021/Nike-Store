import React from "react";
import Title from "./utils/Title";

//Slider
import { Splide, SplideSlide } from "@splidejs/react-splide";
// Default theme
import "@splidejs/react-splide/css";
//Icons
import { ClockIcon, HashtagIcon, HeartIcon } from "@heroicons/react/24/solid";

//Images
import Blog1 from "../assets/blog1.jpg";
import Blog2 from "../assets/blog2.jpg";
import Blog3 from "../assets/blog3.jpg";
import Blog4 from "../assets/blog4.jpg";

//Lodash
import { truncate } from "lodash"

const Stories = () => {
  const story = {
    title: "Top Stories",
    news: [
      {
        title: "Jayson Tatum Debuts",
        text: "Jordan Brands signature model for the past few years, Jayson Tatum will be dawning the Air Jordan 37 this season before attaining potentially his first signature sneaker with Jumpman, which he rumored to be in the works recently via his Twitter.",
        img: Blog1,
        url: "https://sneakernews.com/2022/09/14/air-jordan-37-low/",
        like: "3/5",
        time: "11 Mins",
        by: "Jared Ebanks",
        btn: "Read More",
      },
      {
        title: "Bro’s Nike Zoom Freak 4",
        text: "Arriving right time for the Fall, this upcoming take on the Zoom Freak 4 seemingly draws inspiration from Thanksgiving. Orange and brown, two staples of the holiday, are used throughout the upper, dressing the parts not bathed in shades of grey.",
        img: Blog2,
        time: "41 Mins",
        like: "5/5",
        url: "https://sneakernews.com/2022/09/14/nike-zoom-freak-4-ironstone-orange-trance-cobblestone-sail-dj6149-003/",
        by: "Michael Le",
        btn: "Read More",
      },
      {
        title: "Nike Air Max Plus",
        text: "The Nike Air Max Plus has enjoyed the reveal of several colorways these last few of months. And as we officially embark on the Fall season, an additional set have been added to the calendar, including this newly-revealed grey and orange colorway.",
        img: Blog3,
        time: "2 Hours",
        url: "https://sneakernews.com/2022/09/14/nike-air-max-plus-grey-orange-black-fb3358-001/",
        like: "5/5",
        by: "Michael Le",
        btn: "Read More",
      },
      {
        title: "Air Jordan Retro High OG",
        text: "Air Jordan Retro High OG popular series of AJ1s with the popular color-blocking with the original Yellow Toe flavor. The colorway was revealed back PE by musician Zach Myers, nearly four years later, Jordan fanatics will finally get their shot a GR release.",
        img: Blog4,
        time: "7 Months",
        url: "https://sneakernews.com/2022/03/09/air-jordan-1-retro-high-og-yellow-toe-555088-711/",
        like: "5/5",
        by: "Sneaker News",
        btn: "Read More",
      },
    ],
  };

  const splideOptions ={
        perPage: 4,
        perMove: 1,
        type: 'loop',
        rewind: true,
        keyboard: 'global' ,
        gap: '1rem',
        pagination: false,
        padding: '2rem',
        breakpoints: {
            1200: {perPage: 3},
            991: {perPage: 2.3},
            768: {perPage: 2},
            500: {perPage: 1.3},
            425: {perPage: 1},
        }
    }

  return (
    <>
      <div className="nike-container mb-11">
        <Title title={story.title} />
        <div className="mt-7">
          <Splide options={splideOptions}>
            {story.news.map((val, i) => (
              <SplideSlide key={i} className="mb-0.5">
                <div
                  className="relative grid items-center gap-4 pb-2 rounded-lg shadow 
                        shadow-slate-200 ring-1 ring-slate-200"
                >
                  <div className="flex flex-col item-center justify-center">
                    <img
                      alt="first"
                      src={val.img}
                      className="w-full h-48 object-cover shadow-md 
                                shadow-slate-200 rounded-tl-lg 
                                rounded-tr-lg"
                    />
                    <div className="flex items-center justify-between
                    w-full px-4 py-4">
                      <div className="flex items-center gap-0.5">
                        <HeartIcon className="icon-style text-red-500 w-5 h-5" />
                        <span className="text-xs font-bold">{val.like}</span>
                      </div>
                      <div className="flex items-center gap-0.5">
                        <ClockIcon className="icon-style w-4 h-4 text-black" />
                        <span className="text-xs font-bold">{val.time}</span>
                      </div>
                      <div className="flex items-center gap-0.5">
                        <HashtagIcon className="icon-style text-blue-600" />
                        <span className="text-xs font-bold text-blue-600 ">{val.by}</span>
                      </div>
                    </div>
                    <div className="grid item-center justify-items-start px-4">
                      <h1 className="text-base font-semibold lg:text-sm">{val.title}</h1>
                      <p className="text-sm text-justify lg:text-xs">{truncate(val.text, {length: 175})}</p>
                    </div>
                    <div className="flex items-center justify-center px-4 w-full mt-4">
                      <a href={val.url} target="_blank" role={"button"}
                      className="w-full bg-gradient-to-b from-slate-900 
                      to-black shadow-md shadow-black text-center text-slate-100 py-1.5 button-theme">{val.btn}</a>
                    </div>
                  </div>
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>
    </>
  );
};

export default Stories;
