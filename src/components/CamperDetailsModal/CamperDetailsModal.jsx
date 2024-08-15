// import { Suspense } from 'react';
// import { NavLink, Outlet } from 'react-router-dom';

// export default function CamperDetailsModal({ data }) {
// 	return (
// 		<>
// 			<p>{data.engine}</p>
// 			<div>
// 				<NavLink to={`/catalog/${data._id}/features`}>Features</NavLink>
// 				<NavLink to={`/catalog/${data._id}/reviews`}>Reviews</NavLink>
// 			</div>
// 			<Suspense>
// 				<Outlet />
// 			</Suspense>
// 		</>
// 	);
// }
import { useEffect, useRef, useState } from 'react';
import css from './CamperDetailsModal.module.css';

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
			<h2>{data.engine}</h2>
			<p>
				Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in
				laying out print, graphic or web designs. The passage is attributed to
				an unknown typesetter in the 15th century who is thought to have
				scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a
				type specimen book. It usually begins with: “Lorem ipsum dolor sit amet,
				consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
				et dolore magna aliqua.” The purpose of lorem ipsum is to create a
				natural looking block of text (sentence, paragraph, page, etc.) that
				doesn't distract from the layout. A practice not without controversy,
				laying out pages with meaningless filler text can be very useful when
				the focus is meant to be on design, not content. The passage experienced
				a surge in popularity during the 1960s when Letraset used it on their
				dry-transfer sheets, and again during the 90s as desktop publishers
				bundled the text with their software. Today it's seen all around the
				web; on templates, websites, and stock designs. Use our generator to get
				your own, or read on for the authoritative history of lorem ipsum. Lorem
				ipsum, or lipsum as it is sometimes known, is dummy text used in laying
				out print, graphic or web designs. The passage is attributed to an
				unknown typesetter in the 15th century who is thought to have scrambled
				parts of Cicero's De Finibus Bonorum et Malorum for use in a type
				specimen book. It usually begins with: “Lorem ipsum dolor sit amet,
				consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
				et dolore magna aliqua.” The purpose of lorem ipsum is to create a
				natural looking block of text (sentence, paragraph, page, etc.) that
				doesn't distract from the layout. A practice not without controversy,
				laying out pages with meaningless filler text can be very useful when
				the focus is meant to be on design, not content. The passage experienced
				a surge in popularity during the 1960s when Letraset used it on their
				dry-transfer sheets, and again during the 90s as desktop publishers
				bundled the text with their software. Today it's seen all around the
				web; on templates, websites, and stock designs. Use our generator to get
				your own, or read on for the authoritative history of lorem ipsum. Lorem
				ipsum, or lipsum as it is sometimes known, is dummy text used in laying
				out print, graphic or web designs. The passage is attributed to an
				unknown typesetter in the 15th century who is thought to have scrambled
				parts of Cicero's De Finibus Bonorum et Malorum for use in a type
				specimen book. It usually begins with: “Lorem ipsum dolor sit amet,
				consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
				et dolore magna aliqua.” The purpose of lorem ipsum is to create a
				natural looking block of text (sentence, paragraph, page, etc.) that
				doesn't distract from the layout. A practice not without controversy,
				laying out pages with meaningless filler text can be very useful when
				the focus is meant to be on design, not content. The passage experienced
				a surge in popularity during the 1960s when Letraset used it on their
				dry-transfer sheets, and again during the 90s as desktop publishers
				bundled the text with their software. Today it's seen all around the
				web; on templates, websites, and stock designs. Use our generator to get
				your own, or read on for the authoritative history of lorem ipsum.
			</p>
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
				<p>
					Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in
					laying out print, graphic or web designs. The passage is attributed to
					an unknown typesetter in the 15th century who is thought to have
					scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a
					type specimen book. It usually begins with: “Lorem ipsum dolor sit
					amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
					labore et dolore magna aliqua.” The purpose of lorem ipsum is to
					create a natural looking block of text (sentence, paragraph, page,
					etc.) that doesn't distract from the layout. A practice not without
					controversy, laying out pages with meaningless filler text can be very
					useful when the focus is meant to be on design, not content. The
					passage experienced a surge in popularity during the 1960s when
					Letraset used it on their dry-transfer sheets, and again during the
					90s as desktop publishers bundled the text with their software. Today
					it's seen all around the web; on templates, websites, and stock
					designs. Use our generator to get your own, or read on for the
					authoritative history of lorem ipsum. Lorem ipsum, or lipsum as it is
					sometimes known, is dummy text used in laying out print, graphic or
					web designs. The passage is attributed to an unknown typesetter in the
					15th century who is thought to have scrambled parts of Cicero's De
					Finibus Bonorum et Malorum for use in a type specimen book. It usually
					begins with: “Lorem ipsum dolor sit amet, consectetur adipiscing elit,
					sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”
					The purpose of lorem ipsum is to create a natural looking block of
					text (sentence, paragraph, page, etc.) that doesn't distract from the
					layout. A practice not without controversy, laying out pages with
					meaningless filler text can be very useful when the focus is meant to
					be on design, not content. The passage experienced a surge in
					popularity during the 1960s when Letraset used it on their
					dry-transfer sheets, and again during the 90s as desktop publishers
					bundled the text with their software. Today it's seen all around the
					web; on templates, websites, and stock designs. Use our generator to
					get your own, or read on for the authoritative history of lorem ipsum.
				</p>
			</div>

			<div
				ref={reviewsRef}
				className={activeTab === 'Reviews' ? css.activeContainer : css.hidden}
			>
				<p>Reviews content goes here...</p>
				<p>
					Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in
					laying out print, graphic or web designs. The passage is attributed to
					an unknown typesetter in the 15th century who is thought to have
					scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a
					type specimen book. It usually begins with: “Lorem ipsum dolor sit
					amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
					labore et dolore magna aliqua.” The purpose of lorem ipsum is to
					create a natural looking block of text (sentence, paragraph, page,
					etc.) that doesn't distract from the layout. A practice not without
					controversy, laying out pages with meaningless filler text can be very
					useful when the focus is meant to be on design, not content. The
					passage experienced a surge in popularity during the 1960s when
					Letraset used it on their dry-transfer sheets, and again during the
					90s as desktop publishers bundled the text with their software. Today
					it's seen all around the web; on templates, websites, and stock
					designs. Use our generator to get your own, or read on for the
					authoritative history of lorem ipsum. Lorem ipsum, or lipsum as it is
					sometimes known, is dummy text used in laying out print, graphic or
					web designs. The passage is attributed to an unknown typesetter in the
					15th century who is thought to have scrambled parts of Cicero's De
					Finibus Bonorum et Malorum for use in a type specimen book. It usually
					begins with: “Lorem ipsum dolor sit amet, consectetur adipiscing elit,
					sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”
					The purpose of lorem ipsum is to create a natural looking block of
					text (sentence, paragraph, page, etc.) that doesn't distract from the
					layout. A practice not without controversy, laying out pages with
					meaningless filler text can be very useful when the focus is meant to
					be on design, not content. The passage experienced a surge in
					popularity during the 1960s when Letraset used it on their
					dry-transfer sheets, and again during the 90s as desktop publishers
					bundled the text with their software. Today it's seen all around the
					web; on templates, websites, and stock designs. Use our generator to
					get your own, or read on for the authoritative history of lorem ipsum.
				</p>
			</div>
		</>
	);
}
