import { useState } from 'react';
import Button from '../../shared/components/Button/Button';
import { formatPrice } from '../../shared/utils/formatPrice';
import Features from '../Features/Features';
import css from './CamperCard.module.css';
import CustomModal from '../../shared/components/Modal/Modal';

export default function CamperCard({ camper }) {
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const modalStyles = {
		content: {
			width: '982px',
			height: '720px',
		},
	};
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
					<p>Rating: {camper.rating} stars</p>
					<p>Location: {camper.location}</p>
					{/* Відображаємо перші 6 характеристик */}
					<Features data={camper} maxVisible={6} />

					<Button className={css.showAllButton} onClick={handleOpen}>
						Show more
					</Button>

					<CustomModal
						isOpen={open}
						onRequestClose={handleClose}
						title="All Features"
						component={Features}
						componentProps={{ data: camper }}
						additionalStyles={modalStyles}
					/>
				</div>
			</div>
		</div>
	);
}

// <Modal isOpen={open} onRequestClose={handleClose}>
// 	<div>
// 		<h2>All Features</h2>
// 		<Features data={camper} />
// 		{/* <Button onClick={handleClose}>Close</Button> */}
// 	</div>
// </Modal>;
