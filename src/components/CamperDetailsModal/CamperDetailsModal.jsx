import { useEffect, useRef, useState } from 'react';
import css from './CamperDetailsModal.module.css';
import Features from '../Features/Features';
import Reviews from '../Reviews/Reviews';
import List from '../../shared/components/List/List';
import CamperInfo from '../CamperCard/CamperInfo/CamperInfo';

export default function CamperDetailsModal({ data, initialTab = 'Features' }) {
	const [activeTab, setActiveTab] = useState(initialTab);

	const featuresRef = useRef(null);
	const reviewsRef = useRef(null);

	// Виконується після першого рендеру компонента або коли змінюється initialTab.
	useEffect(() => {
		if (activeTab === 'Features' && featuresRef.current) {
			featuresRef.current.scrollIntoView({ behavior: 'smooth' });
		} else if (activeTab === 'Reviews' && reviewsRef.current) {
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
			<CamperInfo camper={data} />

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

			<div className={css.buttonWrapper}>
				<button
					type="button"
					onClick={() => handleTabChange('Features')}
					className={
						activeTab === 'Features' ? css.activeTab : css.buttonAddInfo
					}
				>
					Features
				</button>
				<button
					type="button"
					onClick={() => handleTabChange('Reviews')}
					className={
						activeTab === 'Reviews' ? css.activeTab : css.buttonAddInfo
					}
				>
					Reviews
				</button>
			</div>

			<div
				ref={featuresRef} // Реф для секції "Features"
				className={activeTab === 'Features' ? css.activeContainer : css.hidden}
			>
				<p>Features content goes here...</p>
				<Features data={data} />
			</div>

			<div
				ref={reviewsRef}
				className={activeTab === 'Reviews' ? css.activeContainer : css.hidden}
			>
				<p>Reviews content goes here...</p>
				<Reviews data={data} />
			</div>
		</>
	);
}
