import { forwardRef, useEffect } from 'react';
import css from './SideBar.module.css';
import Filters from '../../Filters/Filters';
import Logo from '../../../shared/components/Logo/Logo';

export default forwardRef(function Sidebar({ isOpen, close }, ref) {
	// Використовуємо useEffect для блокування прокрутки при відкритті сайдбару
	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden'; // Блокуємо прокрутку сторінки
		} else {
			document.body.style.overflow = ''; // Відновлюємо прокрутку
		}

		// Повертаємо функцію очищення, щоб скинути прокрутку при розмонтуванні
		return () => {
			document.body.style.overflow = ''; // Скидаємо стиль overflow при закритті або розмонтуванні
		};
	}, [isOpen]);

	return (
		<div ref={ref} className={`${css.sidebar} ${isOpen ? css.open : ''}`}>
			{/* Рендеримо фільтри тільки якщо сайдбар відкритий */}
			{isOpen && <Filters close={close} />}

			{/* Логотип */}
			<div className={css.logo}>
				<Logo />
			</div>
		</div>
	);
});
