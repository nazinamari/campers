import Button from '../../shared/components/Button/Button';
import EquipmentFilter from './EquipmentFilter/EquipmentFilter';
import css from './Filters.module.css';
import LocationFilter from './LocationFilter/LocationFilter';
import VehicleTypeFilter from './VehicleTypes/VehicleTypes';
import List from '../../shared/components/List/List';
import {
	selectLocation,
	selectEquipment,
	selectType,
} from '../../redux/filter/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { setLocation, setEquipment, setType } from '../../redux/filter/slice';
import {
	fetchCampers,
	fetchFilteredCampers,
} from '../../redux/catalog/operations';

export default function Filters({ close }) {
	const dispatch = useDispatch();
	const location = useSelector(selectLocation);
	const equipment = useSelector(selectEquipment);
	const type = useSelector(selectType);

	const handleSearchClick = () => {
		if (!location && !equipment.length && !type) {
			dispatch(fetchCampers());
		} else {
			dispatch(fetchFilteredCampers());
		}
		close();
	};

	return (
		<aside className={css.filters}>
			<LocationFilter
				currentLocation={location}
				onLocationChange={(newLocation) => dispatch(setLocation(newLocation))}
			/>
			<List className={css.filter__list}>
				<h1 className={css.list__title}>Filters</h1>
				<li className={css.item__filter}>
					<h2 className={css.item__title}>Vehicle equipment</h2>
					<div className={css.separator}></div>
					<EquipmentFilter
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
			<div className={css.btnSearchPosition}>
				<Button className={css.searchBtn} onClick={handleSearchClick}>
					Search
				</Button>
			</div>
		</aside>
	);
}
