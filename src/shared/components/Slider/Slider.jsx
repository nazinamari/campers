import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import css from './Slider.module.css';

export default function Slider({ data, component: Component }) {
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
				<div className={`${css.swiper_button_prev} swiper-button-prev`}></div>
				<div className={`${css.swiper_button_next} swiper-button-next`}></div>
			</Swiper>
		</div>
	);
}
