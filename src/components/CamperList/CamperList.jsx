import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCampers } from '../../redux/catalog/selectors';
import List from '../../shared/components/List/List';
import CamperCard from '../CamperCard/CamperCard';
import css from './CamperList.module.css';
import { fetchCampers } from '../../redux/catalog/operations';

export default function CamperList() {
	const dispatch = useDispatch();
	const allCampers = useSelector(selectCampers); // Всі кемпери

	useEffect(() => {
		dispatch(fetchCampers());
	}, [dispatch]);

	return (
		<section>
			<List className={css.camperList}>
				{allCampers.length > 0 ? (
					allCampers.map((camper) => (
						<li key={camper._id}>
							<CamperCard camper={camper} />
						</li>
					))
				) : (
					<li className={css.notfound}>No campers found</li>
				)}
			</List>
		</section>
	);
}
