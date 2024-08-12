import Filters from '../../components/Filters/Filters';
import CamperList from '../../components/CamperList/CamperList';
import css from './CatalogPage.module.css';

export default function CatalogPage() {
	return (
		<div className={css.container}>
			<Filters />
			{/* <VehicleList campers={campers} /> */}
		</div>
	);
}
