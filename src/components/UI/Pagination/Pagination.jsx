import styles from "./Pagination.module.scss";

import classNames from "classnames";

export const Pagination = ({activeIndex, sliderList=[], setActiveIndex, swiperRef = null}) => {
    const handlePaginationClick = index => {
        setActiveIndex(index);

        if (swiperRef) {
            swiperRef.current.swiper.slideTo(index, 1000);
        }
    };

    return (
        <div
            className={styles.pagination}>
            {sliderList.map((slider, index) => (
                <button
                    key={slider.id}
                    className={classNames(styles.paginationBullet, {
                        [styles.active]: index === activeIndex,
                    })}
                    onClick={() => handlePaginationClick(index)}
                />
            ))}
        </div>
    )
}