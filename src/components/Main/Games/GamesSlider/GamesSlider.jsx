'use client'
import {useRef, useState} from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/scss';

import {GamesCard} from "@main/Games/GamesCard/GamesCard";

import styles from './GamesSlider.module.scss';
import classNames from "classnames";

export const GamesSlider = ({gamesList}) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const swiperRef = useRef(null);

    const handleSlideChange = swiper => {
        setActiveIndex(swiper.realIndex);
    };

    return (
        <div className={styles.container}>
            <Swiper
                ref={swiperRef}
                modules={[Autoplay]}
                slidesPerView="auto"
                onSlideChange={handleSlideChange}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                className={classNames(styles.slider, {
                    [styles.sliderActive]: activeIndex === 0
                })}
            >
                {gamesList.map(game => (
                    <SwiperSlide key={game.id}>
                        <div className={'container'}>
                            <GamesCard
                                {...game}
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}