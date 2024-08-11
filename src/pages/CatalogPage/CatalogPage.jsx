import Filters from '../../components/Filters/Filters';
import VehicleList from '../../components/VehicleList/VehicleList';
import css from './CatalogPage.module.css';

export default function CatalogPage() {
	return (
		<div className={css.container}>
			<Filters />
			<VehicleList />
		</div>
	);
}
