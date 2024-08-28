import Button from '../../shared/components/Button/Button';
import EquipmentFilter from './EquipmentFilter/EquipmentFilter';
import css from './Filters.module.css';
import LocationFilter from './LocationFilter/LocationFilter';
import VehicleTypeFilter from './VehicleTypes/VehicleTypes';
import List from '../../shared/components/List/List';

export default function Filters() {
	return (
		<aside className={css.filters}>
			<LocationFilter />
			<List className={css.filter__list}>
				<h1 className={css.list__title}>Filters</h1>
				<li className={css.item__filter}>
					<h2 className={css.item__title}>Vehicle equipment</h2>
					<div className={css.separator}></div>
					<EquipmentFilter className={css.equipmentFilter} />
				</li>
				<li className={css.item__filter_vehicle}>
					<h2 className={css.item__title}>Vehicle type</h2>
					<div className={css.separator}></div>
					<VehicleTypeFilter />
				</li>
			</List>
			<Button className={css.searchBtn}>Search</Button>
		</aside>
	);
}
