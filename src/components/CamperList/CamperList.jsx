import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCampers } from '../../redux/catalog/selectors';
import List from '../../shared/components/List/List';
import CamperCard from '../CamperCard/CamperCard';
import css from './CamperList.module.css';
import { fetchCampers } from '../../redux/catalog/operations';
// import { selectFilter } from '../../redux/filter/selectors';

export default function CamperList() {
	const dispatch = useDispatch();
	const allCampers = useSelector(selectCampers); // Всі кемпери
	// const filters = useSelector(selectFilter);
	// const [filteredCampers, setFilteredCampers] = useState([]);

	useEffect(() => {
		dispatch(fetchCampers()); // Викликаємо екшн для фільтрованого завантаження кемперів
	}, [dispatch]);

	// Фільтрація кемперів на основі фільтрів з API
	// useEffect(() => {
	// 	if (filters.location || filters.equipment.length > 0 || filters.type) {
	// 		// Фільтрація кемперів на основі фільтрів
	// 		const newFilteredCampers = allCampers.filter((camper) => {
	// 			const matchesLocation = filters.location
	// 				? camper.location
	// 						.toLowerCase()
	// 						.includes(filters.location.toLowerCase())
	// 				: true;

	// 			const matchesEquipment =
	// 				filters.equipment.length > 0
	// 					? camper.equipment &&
	// 					  filters.equipment.every((eq) =>
	// 							camper.equipment
	// 								.map((e) => e.toLowerCase())
	// 								.includes(eq.toLowerCase())
	// 					  )
	// 					: true;

	// 			const matchesType = filters.type
	// 				? camper.type.toLowerCase() === filters.type.toLowerCase()
	// 				: true;

	// 			return matchesLocation && matchesEquipment && matchesType;
	// 		});
	// 		setFilteredCampers(newFilteredCampers);
	// 	} else {
	// 		// Якщо немає фільтрів, відображати всі кемпери
	// 		setFilteredCampers(allCampers);
	// 	}
	// }, [filters, allCampers]);

	return (
		<List className={css.camperList}>
			{allCampers.length > 0 ? (
				allCampers.map((camper) => (
					<li key={camper._id}>
						<CamperCard camper={camper} />
					</li>
				))
			) : (
				<li>No campers found</li> // Повідомлення, якщо кемперів не знайдено
			)}
		</List>
	);
}
