import { useEffect, useState } from 'react';
import { selectCampers } from '../../redux/catalog/selectors';
import List from '../../shared/components/List/List';
import CamperCard from '../CamperCard/CamperCard';
import css from './CamperList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCampers } from '../../redux/catalog/operations';
import { selectFilter } from '../../redux/filter/selectors';

export default function CamperList() {
	const dispatch = useDispatch();
	const allCampers = useSelector(selectCampers); // Всі кемпери
	const filters = useSelector(selectFilter);
	const [filteredCampers, setFilteredCampers] = useState([]);

	// Завантаження всіх кемперів при первинному завантаженні компонента
	useEffect(() => {
		dispatch(fetchCampers());
	}, [dispatch]);

	// Фільтрація кемперів при зміні фільтрів
	useEffect(() => {
		if (filters.location || filters.equipment.length > 0 || filters.type) {
			// Фільтрація кемперів на основі фільтрів
			const newFilteredCampers = allCampers.filter((camper) => {
				// Фільтрування по всіх критеріях
				return (
					(!filters.location || camper.location.includes(filters.location)) &&
					(filters.equipment.length === 0 ||
						filters.equipment.every((eq) => camper.equipment.includes(eq))) &&
					(!filters.type || camper.type === filters.type)
				);
			});
			setFilteredCampers(newFilteredCampers);
		} else {
			// Якщо немає фільтрів, відображати всі кемпери
			setFilteredCampers(allCampers);
		}
	}, [filters, allCampers]);

	return (
		<List className={css.camperList}>
			{filteredCampers.length > 0 ? (
				filteredCampers.map((camper) => (
					<li key={camper._id}>
						<CamperCard camper={camper} />
					</li>
				))
			) : (
				<li>No campers found</li> // Покажіть повідомлення, якщо нічого не знайдено
			)}
		</List>
	);
}
