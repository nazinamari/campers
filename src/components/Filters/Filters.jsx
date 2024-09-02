import Button from '../../shared/components/Button/Button';
import EquipmentFilter from './EquipmentFilter/EquipmentFilter';
import css from './Filters.module.css';
import LocationFilter from './LocationFilter/LocationFilter';
import VehicleTypeFilter from './VehicleTypes/VehicleTypes';
import List from '../../shared/components/List/List';
import {
	selectEquipment,
	selectLocation,
	selectType,
} from '../../redux/filter/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFilteredCampers } from '../../redux/catalog/operations';
import { setEquipment, setLocation, setType } from '../../redux/filter/slice';
import { useEffect, useState } from 'react';

export default function Filters() {
	const dispatch = useDispatch();
	const location = useSelector(selectLocation);
	const equipment = useSelector(selectEquipment);
	const type = useSelector(selectType);

	const [localLocation, setLocalLocation] = useState(location);

	useEffect(() => {
		setLocalLocation(location);
	}, [location]);

	const handleSearchClick = () => {
		dispatch(setLocation(localLocation));
		dispatch(fetchFilteredCampers());
	};

	return (
		<aside className={css.filters}>
			<LocationFilter
				currentLocation={localLocation} // Використовуємо локальний стан
				onLocationChange={(newLocation) => setLocalLocation(newLocation)}
			/>
			<List className={css.filter__list}>
				<h1 className={css.list__title}>Filters</h1>
				<li className={css.item__filter}>
					<h2 className={css.item__title}>Vehicle equipment</h2>
					<div className={css.separator}></div>
					<EquipmentFilter
						className={css.equipmentFilter}
						currentEquipment={equipment}
						onEquipmentChange={(newEquipment) =>
							dispatch(setEquipment(newEquipment))
						}
					/>
				</li>
				<li className={css.item__filter_vehicle}>
					<h2 className={css.item__title}>Vehicle type</h2>
					<div className={css.separator}></div>
					<VehicleTypeFilter
						currentType={type}
						onTypeChange={(newType) => dispatch(setType(newType))}
					/>
				</li>
			</List>
			<Button className={css.searchBtn} onClick={handleSearchClick}>
				Search
			</Button>
		</aside>
	);
}
