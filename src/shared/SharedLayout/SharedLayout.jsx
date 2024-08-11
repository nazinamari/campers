import css from './SharedLayout.module.css';

export default function SharedLayout({ children }) {
	return <main className={css.container}>{children}</main>;
}
