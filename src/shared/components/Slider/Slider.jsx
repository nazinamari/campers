import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import css from './Slider.module.css';
import Icon from '../Icon/Icon';

export default function Slider({ data, component: Component }) {
	const [swiperInstance, setSwiperInstance] = useState(null);
	const [isPrevDisabled, setIsPrevDisabled] = useState(true);
	const [isNextDisabled, setIsNextDisabled] = useState(false);

	useEffect(() => {
		if (swiperInstance) {
			const handleSlideChange = () => {
				if (!swiperInstance) return;

				setIsPrevDisabled(swiperInstance.isBeginning);
				setIsNextDisabled(swiperInstance.isEnd);
			};

			swiperInstance.on('slideChange', handleSlideChange);
			handleSlideChange();

			return () => {
				swiperInstance.off('slideChange', handleSlideChange);
			};
		}
	}, [swiperInstance]);

	return (
		<div className={css.swiper_container}>
			<Swiper
				grabCursor={true}
				slidesPerView={1}
				spaceBetween={30}
				modules={[Navigation]}
				navigation={{
					nextEl: `.${css.swiper_button_next}`,
					prevEl: `.${css.swiper_button_prev}`,
				}}
				onSwiper={setSwiperInstance}
			>
				{data.map((item) => (
					<SwiperSlide key={item.id} className={css.wrapper}>
						<Component {...item} />
					</SwiperSlide>
				))}
			</Swiper>
			<div className={css.swiper_buttons_container}>
				<div
					className={`${css.swiper_button_prev} swiper-button-prev ${
						isPrevDisabled ? css.disabled : ''
					}`}
				>
					<Icon className={css.icon} id="i-left" width="44" height="44" />
				</div>
				<div
					className={`${css.swiper_button_next} swiper-button-next ${
						isNextDisabled ? css.disabled : ''
					}`}
				>
					<Icon className={css.icon} id="i-right" width="44" height="44" />
				</div>
			</div>
		</div>
	);
}
