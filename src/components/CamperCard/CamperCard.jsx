import css from './CamperCard.module.css';

export default function CamperCard({ camper }) {
	console.log(camper);
	return (
		<div className={css.camperCard}>
			<h2>{camper.name}</h2>
			<p>
				<strong>Price:</strong> ${camper.price}
			</p>
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
			<p>
				<strong>Description:</strong> {camper.description}
			</p>
			<div className={css.gallery}>
				{camper.gallery.map((image, index) => (
					<img key={index} src={image} alt={`${camper.name} ${index + 1}`} />
				))}
			</div>
			<h3>Reviews:</h3>
			<ul>
				{camper.reviews.map((review, index) => (
					<li key={index}>
						<strong>{review.reviewer_name}:</strong> {review.reviewer_rating}{' '}
						stars - {review.comment}
					</li>
				))}
			</ul>
		</div>
	);
}
