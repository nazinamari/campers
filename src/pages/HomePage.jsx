import { Link } from 'react-router-dom';

export default function HomePage() {
	return (
		<div>
			<h1>Discover the Freedom of the Open Road</h1>
			<p>
				Rent a campervan or motorhome for comfortable journeys across Ukraine.
				Explore our diverse selection, catering to every budget and group size.
			</p>
			<Link to="/catalog" className="cta-button">
				Explore Now
			</Link>
		</div>
	);
}
