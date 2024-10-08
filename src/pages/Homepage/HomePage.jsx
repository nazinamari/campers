import { Link } from 'react-router-dom';
import css from './HomePage.module.css';
import picData from './data/pic.json';
import * as images from './data/img/index.js';
import Slider from '../../shared/components/Slider/Slider.jsx';
import Slide from './Slide/Slide.jsx';
import Icon from '../../shared/components/Icon/Icon.jsx';

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
		<section className={css.homePage_container}>
			<div className={css.homePage_container}>
				<h1 className={css.title}>Discover the Freedom of the Open Road</h1>
				{/* <p className={css.description}>
					Rent a campervan for comfortable journeys across Ukraine.
				</p> */}
				<p className={css.logo}>
					Rent a campervan for comfortable journeys across Ukraine. Adventure
					Made Easy
				</p>
				<Link to="/catalog" className={css.link}>
					Visit our Catalog&nbsp;
					<Icon className={css.click} id="i-click" />
					<span className={css.clickText}>&nbsp;Explore Now</span>
				</Link>
			</div>
			<Slider data={data} component={Slide} />
		</section>
	);
}
