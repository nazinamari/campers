import BookingForm from '../BookingForm /BookingForm';
import Review from '../Review/Review';
import css from './ReviewsTab.module.css';

export default function ReviewsTab({ data }) {
	const reviews = data.reviews;

	return (
		<section className={css.tab_container}>
			<div className={css.left}>
				<div className={css.reviews}>
					{reviews.map((review, index) => (
						<Review
							key={index}
							reviewer_name={review.reviewer_name}
							reviewer_rating={review.reviewer_rating}
							comment={review.comment}
						/>
					))}
				</div>
			</div>
			<div className={css.right}>
				<BookingForm />
			</div>
		</section>
	);
}
