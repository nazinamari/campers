export default function Review({ reviewer_name, reviewer_rating, comment }) {
	return (
		<div className="review">
			<h2>{reviewer_name}</h2>
			<p>Rating: {reviewer_rating} / 5</p>
			<p>{comment}</p>
		</div>
	);
}
