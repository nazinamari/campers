import { forwardRef } from 'react';
import css from './SideBar.module.css';

export default forwardRef(function Sidebar({ isOpen, close }, ref) {
	return (
		<div ref={ref} className={`${css.sidebar} ${isOpen ? css.open : ''}`}>
			<button onClick={close}>Закрити</button>
		</div>
	);
});
