import { useEffect, useRef, useState } from 'react';
import css from './CamperModal.module.css';
import List from '../../shared/components/List/List';
import CamperInfo from '../CamperInfo/CamperInfo';
import { formatPrice } from '../../shared/utils/formatPrice';
import FeaturesTab from '../FeaturesTab/FeaturesTab';
import ReviewsTab from '../ReviewsTab/ReviewsTab';

export default function CamperModal({ data, initialTab = 'Features' }) {
	const [activeTab, setActiveTab] = useState(initialTab);
	const featuresRef = useRef(null);
	const reviewsRef = useRef(null);

	// Виконується після першого рендеру компонента або коли змінюється initialTab.
	useEffect(() => {
		// Прокручуємо вниз тільки якщо активна вкладка "Reviews".
		if (activeTab === 'Reviews' && reviewsRef.current) {
			reviewsRef.current.scrollIntoView({ behavior: 'smooth' });
		}
	}, [activeTab]); // Залежність від activeTab

	// Функція для зміни активної вкладки.
	const handleTabChange = (tabName) => {
		setActiveTab(tabName);
		// Прокручуємо до відповідної секції при зміні вкладки.
		if (tabName === 'Features' && featuresRef.current) {
			featuresRef.current.scrollIntoView({ behavior: 'smooth' });
		} else if (tabName === 'Reviews' && reviewsRef.current) {
			reviewsRef.current.scrollIntoView({ behavior: 'smooth' });
		}
	};

	return (
		<>
			<h2 className={css.camperTitle}>{data.name}</h2>
			<CamperInfo camper={data} onTabChange={handleTabChange} />
			<p className={css.price}>{formatPrice(data.price)}</p>
			<div className={css.content}>
				<List className={css.gallery}>
					{data.gallery.map((image, index) => (
						<li key={index} className={css.galleryItem}>
							<img
								src={image}
								alt={`${data.name} ${index + 1}`}
								className={css.imgItem}
							/>
						</li>
					))}
				</List>
				<p className={css.description}>{data.description}</p>

				<List className={css.tab_container}>
					<li
						onClick={() => handleTabChange('Features')}
						className={activeTab === 'Features' ? css.activeTab : css.tabs}
						role="button"
						tabIndex={0}
					>
						Features
					</li>

					<li
						onClick={() => handleTabChange('Reviews')}
						className={activeTab === 'Reviews' ? css.activeTab : css.tabs}
						role="button"
						tabIndex={0}
					>
						Reviews
					</li>
				</List>

				<div
					ref={featuresRef} // Реф для секції "Features"
					className={
						activeTab === 'Features' ? css.activeContainer : css.hidden
					}
				>
					<FeaturesTab data={data} />
				</div>

				<div
					ref={reviewsRef}
					className={activeTab === 'Reviews' ? css.activeContainer : css.hidden}
				>
					<ReviewsTab data={data} />
				</div>
			</div>
		</>
	);
}
