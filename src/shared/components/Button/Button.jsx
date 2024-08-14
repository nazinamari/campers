import css from './Button.module.css';

export default function Button({
	className = '',
	type = 'submit',
	onClick,
	children,
}) {
	return (
		<button className={`${css.btn} ${className}`} type={type} onClick={onClick}>
			{children}
		</button>
	);
}
