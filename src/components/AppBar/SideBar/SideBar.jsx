import { forwardRef } from 'react';
import css from './SideBar.module.css';
import Filters from '../../Filters/Filters';
import Logo from '../../../shared/components/Logo/Logo';

export default forwardRef(function Sidebar({ isOpen, close }, ref) {
	return (
		<div ref={ref} className={`${css.sidebar} ${isOpen ? css.open : ''}`}>
			{isOpen && <Filters close={close} />}
			<div className={css.logo}>
				<Logo />
			</div>
		</div>
	);
});
