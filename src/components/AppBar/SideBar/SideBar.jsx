import { forwardRef, useEffect } from 'react';
import css from './SideBar.module.css';
import Filters from '../../Filters/Filters';
import Logo from '../../../shared/components/Logo/Logo';

export default forwardRef(function Sidebar({ isOpen, close }, ref) {
	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}

		return () => {
			document.body.style.overflow = '';
		};
	}, [isOpen]);

	return (
		<div ref={ref} className={`${css.sidebar} ${isOpen ? css.open : ''}`}>
			{isOpen && <Filters close={close} />}

			<div className={css.logo}>
				<Logo />
			</div>
		</div>
	);
});
