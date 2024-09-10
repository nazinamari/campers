import Icon from '../../shared/components/Icon/Icon';
import css from './Review.module.css';

export default function Review({ reviewer_name, reviewer_rating, comment }) {
	return (
		<div className="review">
			<div>
				<Icon className={css.i_star} id="i-star" width="16" height="16" />
				<h2>{reviewer_name}</h2>
			</div>
			<p>Rating: {reviewer_rating} / 5</p>
			<p>{comment}</p>
		</div>
	);
}
