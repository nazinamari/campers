import { Link } from 'react-router-dom';
import css from './HomePage.module.css';
import picData from './data/pic.json';
import * as images from './data/img/index.js';
import Slider from '../../shared/components/Slider/Slider.jsx';
import Slide from './Slide/Slide.jsx';

export default function HomePage() {
	const data = picData.map((item) => {
		return {
			...item,
			url: images[item.url],
			width: item.width,
			height: item.height,
		};
	});

	return (
		<section>
			<div className={css.homePage_container}>
				<h1 className={css.title}>Discover the Freedom of the Open Road</h1>
				<p className={css.description}>
					Rent a campervan or motorhome for comfortable journeys across Ukraine.
					Explore our diverse selection, catering to every budget and group
					size.
				</p>
				<Link to="/catalog" className={css.link}>
					Explore Now
				</Link>
			</div>
			<Slider data={data} component={Slide} />
		</section>
	);
}
