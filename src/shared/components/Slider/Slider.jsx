import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import css from './Slider.module.css';
import Icon from '../Icon/Icon';
import { useEffect } from 'react';

export default function Slider({ data, component: Component }) {
	useEffect(() => {
		const swiper = document.querySelector('.swiper').swiper;
		swiper.navigation.update();
	}, []);

	return (
		<div className={css.swiper_container}>
			<Swiper
				grabCursor={true}
				slidesPerView={1}
				spaceBetween={30}
				modules={[Navigation]}
				navigation={{
					nextEl: `.${css.swiper_button_next}`, // Кастомний клас для "далі"
					prevEl: `.${css.swiper_button_prev}`, // Кастомний клас для "назад"
				}}
			>
				{data.map((item) => (
					<SwiperSlide key={item.id} className={css.wrapper}>
						<Component {...item} />
					</SwiperSlide>
				))}
			</Swiper>
			<div className={css.swiper_buttons_container}>
				<div className={`${css.swiper_button_prev} swiper-button-prev`}>
					<Icon className={css.icon} id="i-left" width="100" height="100" />
				</div>
				<div className={`${css.swiper_button_next} swiper-button-next`}>
					<Icon className={css.icon} id="i-right" width="100" height="100" />
				</div>
			</div>
		</div>
	);
}
