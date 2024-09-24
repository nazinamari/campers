import { useState } from 'react';
import Button from '../../shared/components/Button/Button';
import { formatPrice } from '../../shared/utils/formatPrice';
import Features from '../Features/Features';
import css from './CamperCard.module.css';
import CustomModal from '../../shared/components/Modal/Modal';
import CamperDetailsModal from '../CamperModal/CamperModal';
import CamperInfo from '../CamperInfo/CamperInfo';

import clsx from 'clsx';
import Icon from '../../shared/components/Icon/Icon';
import { toggleFavourite } from '../../redux/favourites/slice';
import { useDispatch } from 'react-redux';
import { useMediaQuery } from 'react-responsive';

export default function CamperCard({ camper }) {
	const [open, setOpen] = useState(false);
	const [initialTab, setInitialTab] = useState('Features');
	const [isActive, setIsActive] = useState(false);
	const dispatch = useDispatch();

	const handleOpen = (tab = 'Features') => {
		setInitialTab(tab);
		setOpen(true);
	};

	const handleClose = () => setOpen(false);

	const isMobile = useMediaQuery({
		query: '(max-width: 767px)',
	});

	const isTablet = useMediaQuery({
		query: '(min-width: 768px) and (max-width: 1439px)',
	});

	// const isDesktop = useMediaQuery({
	// 	query: '(min-width: 1440px)',
	// });

	const modalStyles = {
		content: {
			width: isMobile ? '350px' : isTablet ? '720px' : '982px',
			inset: '0px',
			padding: isMobile ? '20px' : '40px',
			marginTop: isMobile ? '60px' : '0px',
			maxHeight: '85vh',
			overflow: 'auto',
		},
		overlay: {
			overflow: 'hidden',
		},
	};

	const titleImage = camper.gallery?.[0];

	const makeHeartClass = ({ isActive }) => {
		return clsx(css.i_heart, isActive && css.heartIsActive);
	};

	const toggleHeart = () => {
		setIsActive((prev) => !prev);
		dispatch(toggleFavourite(camper));
	};

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
						<div className={css.header_left}>
							<p className={css.price}>{formatPrice(camper.price)}</p>
							<Icon
								onClick={toggleHeart}
								className={makeHeartClass({ isActive })}
								id="i-heart"
								width="24"
								height="24"
							/>
						</div>
					</div>
					<CamperInfo camper={camper} onTabChange={handleOpen} />
					<p className={css.description}>{camper.description.slice(0, 61)}..</p>

					{/* Відображаємо перші 6 характеристик */}
					<div className={css.features}>
						<Features data={camper} maxVisible={6} />
					</div>

					<Button
						className={css.showAllButton}
						onClick={() => handleOpen('Features')}
					>
						Show more
					</Button>
					{open && (
						<CustomModal
							isOpen={open}
							onRequestClose={handleClose}
							title="All Features"
							component={CamperDetailsModal}
							componentProps={{ data: camper, initialTab }}
							additionalStyles={modalStyles}
						/>
					)}
				</div>
			</div>
		</div>
	);
}
