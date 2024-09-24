import Filters from '../../components/Filters/Filters';
import CamperList from '../../components/CamperList/CamperList';
import css from './CatalogPage.module.css';
import { useMediaQuery } from 'react-responsive';

export default function CatalogPage() {
	const isDesktop = useMediaQuery({
		query: '(min-width: 1440px)',
	});

	const isTablet = useMediaQuery({
		query: '(min-width: 768px)',
	});

	const isTabletOrDesktop = isDesktop || isTablet;

	return (
		<div className={css.container}>
			{isTabletOrDesktop && <Filters />}
			<CamperList />
		</div>
	);
}
