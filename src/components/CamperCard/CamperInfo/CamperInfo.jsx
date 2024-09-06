import { useState } from 'react';
import Icon from '../../../shared/Icon/Icon';
import css from './CamperInfo.module.css';

export default function CamperInfo({ camper }) {
	const [open, setOpen] = useState(false);
	const [initialTab, setInitialTab] = useState('Features');

	const handleOpen = (tab = 'Features') => {
		setInitialTab(tab);
		setOpen(true);
	};

	return (
		<>
			<div className={css.camperInfo}>
				<a
					href="#"
					className={css.ratingLink}
					onClick={(e) => {
						e.preventDefault();
						handleOpen('Reviews');
					}}
				>
					<div className={css.textContainer}>
						<Icon className={css.i_star} id="i-star" width="16" height="16" />
						<div className={css.reviewContainer}>
							<div className={css.reviewInfo}>
								{camper.rating} ({camper.reviews.length} Reviews)
							</div>
							<hr className={css.underline} />
						</div>
					</div>
				</a>
				<Icon className={css.i_pin} id="i-map_pin" width="16" height="16" />
				<p className={css.location}>
					{camper.location.split(', ').reverse().join(', ')}
				</p>
			</div>
		</>
	);
}
