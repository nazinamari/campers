import { NavLink } from 'react-router-dom';
import css from './AppBar.module.css';
import clsx from 'clsx';
import Logo from '../../shared/components/Logo/Logo';

const makeLinkClass = ({ isActive }) => {
	return clsx(css.link, isActive && css.isActive);
};

export default function AppBar() {
	return (
		<header className={css.container}>
			<nav className={css.navigation}>
				<Logo />
				<div className={css.navPages}>
					<NavLink to="/catalog" className={makeLinkClass}>
						Catalog
					</NavLink>
					<NavLink to="/favorites" className={makeLinkClass}>
						Favorites
					</NavLink>
				</div>
			</nav>
		</header>
	);
}
