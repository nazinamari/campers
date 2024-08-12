import { useEffect } from 'react';
import { selectCampers } from '../../redux/catalog/selectors';
import List from '../../shared/components/List/List';
import CamperCard from '../CamperCard/CamperCard';
import css from './CamperList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCampers } from '../../redux/catalog/operations';

export default function CamperList() {
	const dispatch = useDispatch();
	const campers = useSelector(selectCampers);

	useEffect(() => {
		dispatch(fetchCampers());
	}, [dispatch]);

	return (
		<List className={css.camperList}>
			{campers.map((camper) => (
				<CamperCard key={camper._id} camper={camper} />
			))}
		</List>
	);
}
