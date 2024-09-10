import clsx from 'clsx';
import Icon from '../../shared/components/Icon/Icon';
import css from './Review.module.css';

export default function Review({ reviewer_name, reviewer_rating, comment }) {
	const stars = Array(5).fill(0);

	// Функція для визначення класу зірки
	const getStarClass = (index) => {
		return clsx({
			[css.i_star_rate]: index < reviewer_rating, // Заповнена зірка
			[css.i_star]: index >= reviewer_rating, // Порожня зірка
		});
	};

	return (
		<div className="review">
			<div className={css.review_header}>
				<div className={css.avatar}>
					<p className={css.avatar_letter}>{reviewer_name.charAt(0)}</p>
				</div>
				<div>
					<h3 className={css.customer_name}>{reviewer_name}</h3>
					<div className={css.star_rating}>
						{stars.map((_, index) => (
							<Icon
								key={index}
								className={getStarClass(index)}
								id="i-star"
								width="16"
								height="16"
							/>
						))}
					</div>
				</div>
			</div>
			<p className={css.comment}>{comment}</p>
		</div>
	);
}
