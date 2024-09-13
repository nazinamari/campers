import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import css from './Slider.module.css';

export default function Slider({ data, component: Component }) {
	return (
		<Swiper
			grabCursor={true}
			slidesPerView={1}
			modules={[Navigation]}
			navigation={{
				prevEl: `.${css.swiperButtonPrev}`,
				nextEl: `.${css.swiperButtonNext}`,
			}}
			className={css.swiperContainer}
		>
			{data.map((item) => (
				<SwiperSlide key={item.id}>
					<Component {...item} />
				</SwiperSlide>
			))}
		</Swiper>
	);
}
