import { Link } from 'react-router-dom';
import css from './HomePage.module.css';
// import picData from './data/pic.json';
// import * as images from './data/img/index.js';
// import Slider from '../../shared/components/Slider/Slider.jsx';
// import Slide from './Slide/Slide.jsx';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

export default function HomePage() {
	// const data = picData.map((item) => {
	// 	return {
	// 		...item,
	// 		url: images[item.url],
	// 		width: item.width,
	// 		height: item.height,
	// 	};
	// });

	return (
		<section className={css.homePage_container}>
			<h1 className={css.title}>Discover the Freedom of the Open Road</h1>
			<p className={css.description}>
				Rent a campervan or motorhome for comfortable journeys across Ukraine.
				Explore our diverse selection, catering to every budget and group size.
			</p>
			<Link to="/catalog" className={css.link}>
				Explore Now
			</Link>
			<div className={css.swiper_container}>
				<Swiper
					grabCursor={true}
					slidesPerView={1}
					spaceBetween={30}
					modules={[Navigation]}
					navigation
				>
					<SwiperSlide>
						<div className={css.wrapper}>Slide 1</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className={css.wrapper}>Slide 2</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className={css.wrapper}>Slide 3</div>
					</SwiperSlide>
				</Swiper>
			</div>
		</section>
	);
}

{
	/* <Slider data={data} component={(props) => <Slide {...props} />} /> */
}
