import { NavLink } from 'react-router-dom';
import css from './AppBar.module.css';
import clsx from 'clsx';
import Logo from '../../shared/components/Logo/Logo';
import Icon from '../../shared/components/Icon/Icon';
import Sidebar from './SideBar/SideBar';
import { useState, useEffect, useRef } from 'react';
import { useMediaQuery } from 'react-responsive';

const makeLinkClass = ({ isActive }) => {
	return clsx(css.link, isActive && css.isActive);
};

export default function AppBar() {
	const [isOpen, setIsOpen] = useState(false);
	const sidebarRef = useRef(null); // Додайте реф для сайдбару

	const isDesktop = useMediaQuery({
		query: '(min-width: 1440px)',
	});

	const isTablet = useMediaQuery({
		query: '(min-width: 768px)',
	});

	// Закриття сайдбару при натисканні поза ним
	useEffect(() => {
		const handleClickOutside = (event) => {
			if (
				isOpen &&
				sidebarRef.current &&
				!sidebarRef.current.contains(event.target)
			) {
				setIsOpen(false);
			}
		};

		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [isOpen]);

	return (
		<header className={css.container}>
			<nav className={css.navigation}>
				{/* Показуємо бургер-меню лише на мобільних пристроях */}
				{!isDesktop && !isTablet && (
					<>
						<Icon
							className={css.burger}
							onClick={() => setIsOpen(!isOpen)} // Змінюємо стан
							id="i-burger"
							width="24"
							height="24"
						/>
					</>
				)}

				{/* Лого показується тільки на планшетах і десктопах */}
				{(isDesktop || isTablet) && <Logo />}

				<div className={css.navPages}>
					<NavLink to="/catalog" className={makeLinkClass}>
						Catalog
					</NavLink>
					<NavLink to="/favorites" className={makeLinkClass}>
						Favorites
					</NavLink>
				</div>
			</nav>

			{/* Сайдбар, який виїжджає зліва */}
			<Sidebar
				ref={sidebarRef} // Додаємо реф
				isOpen={isOpen}
				close={() => setIsOpen(false)}
			/>
		</header>
	);
}
