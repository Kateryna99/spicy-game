'use client'
import {useRef, useState} from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/scss';

import {GamesCard} from "@main/Games/GamesCard/GamesCard";

import styles from './GamesSlider.module.scss';

export const GamesSlider = ({gamesList}) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const swiperRef = useRef(null);

    /*const handleSlideChange = swiper => {
        setActiveIndex(swiper.realIndex);
    };*/

    return (
        <div className={styles.container}>
            <Swiper
                ref={swiperRef}
                modules={[Autoplay]}
                loop={true}
                slidesPerView={1}
                /*onSlideChange={handleSlideChange}*/
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
            >
                {gamesList.map(game => (
                    <SwiperSlide key={game.id}>
                        <GamesCard
                            {...game}
                            activeIndex={activeIndex}
                            sliderList={gamesList}
                            setActiveIndex={setActiveIndex}
                            swiperRef={swiperRef}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}