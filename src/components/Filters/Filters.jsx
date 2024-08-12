import EquipmentFilter from './EquipmentFilter/EquipmentFilter';
import css from './Filters.module.css';
import LocationFilter from './LocationFilter/LocationFilter';
import VehicleTypeFilter from './VehicleTypes/VehicleTypes';

export default function Filters() {
	return (
		<aside className={css.filters}>
			<LocationFilter />
			<h3>Vehicle equipment</h3>
			<EquipmentFilter />
			<h3>Vehicle type</h3>
			<VehicleTypeFilter />
			<button className={css.searchBtn}>Search</button>
		</aside>
	);
}
