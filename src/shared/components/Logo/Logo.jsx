import { NavLink } from 'react-router-dom';
import css from './Logo.module.css';
import clsx from 'clsx';
import Icon from '../Icon/Icon';

const makeLinkClass = ({ isActive }) => {
	return clsx(css.link, isActive && css.isActive);
};

export default function Logo() {
	return (
		<>
			<NavLink to="/" className={makeLinkClass}>
				<div className={css.logoGroup}>
					<Icon className={css.iLogo} id="i-camper3" width="40" height="40" />
					<span>Campers</span>
				</div>
			</NavLink>
		</>
	);
}
