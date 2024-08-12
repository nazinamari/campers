import { formatPrice } from '../../shared/utils/formatPrice';
import css from './CamperCard.module.css';

export default function CamperCard({ camper }) {
	// console.log(camper);
	const titleImage = camper.gallery?.[0];

	return (
		<div className={css.camperCard}>
			<div className={css.camperContent}>
				{titleImage ? (
					<img src={titleImage} alt={camper.name} className={css.camperImg} />
				) : (
					<p>No image available</p>
				)}
				<div className={css.camperDetails}>
					<div className={css.camperHeader}>
						<h2 className={css.camperTitle}>{camper.name}</h2>
						<p className={css.price}>{formatPrice(camper.price)}</p>
					</div>
					<p>
						<strong>Rating:</strong> {camper.rating} stars
					</p>
					<p>
						<strong>Location:</strong> {camper.location}
					</p>
					<p>
						<strong>Capacity:</strong> {camper.adults} adults, {camper.children}{' '}
						children
					</p>
					<p>
						<strong>Engine:</strong> {camper.engine}
					</p>
					<p>
						<strong>Transmission:</strong> {camper.transmission}
					</p>
					<p>
						<strong>Dimensions:</strong> {camper.length} L x {camper.width} W x{' '}
						{camper.height} H
					</p>
					<p>
						<strong>Fuel Consumption:</strong> {camper.consumption}
					</p>
					{/* <p>
				<strong>Description:</strong> {camper.description}
			</p> */}
					<h3>Reviews:</h3>
					{/* <ul>
				{camper.reviews.map((review, index) => (
					<li key={index}>
						<strong>{review.reviewer_name}:</strong> {review.reviewer_rating}{' '}
						stars - {review.comment}
					</li>
				))}
			</ul> */}
				</div>
			</div>
		</div>
	);
}
