import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	selectCampers,
	selectError,
	selectIsLastPage,
	selectIsLoading,
} from '../../redux/catalog/selectors';
import List from '../../shared/components/List/List';
import CamperCard from '../CamperCard/CamperCard';
import css from './CamperList.module.css';
import {
	fetchCampers,
	fetchFilteredCampers,
} from '../../redux/catalog/operations';
import { Loader } from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Button from '../../shared/components/Button/Button';
import { selectFilter } from '../../redux/filter/selectors';

export default function CamperList() {
	const dispatch = useDispatch();
	const allCampers = useSelector(selectCampers); // Всі кемпери
	const isLoading = useSelector(selectIsLoading); // Стан завантаження
	const error = useSelector(selectError);
	const isLastPage = useSelector(selectIsLastPage);
	const filters = useSelector(selectFilter);

	useEffect(() => {
		dispatch(fetchCampers());
	}, [dispatch]);

	const handleLoadMore = () => {
		if (!isLoading && !isLastPage) {
			dispatch(fetchCampers());
		}
	};

	return (
		<section>
			{isLoading && <Loader />}
			{error && <ErrorMessage />}
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
			{!isLastPage && (
				<Button onClick={handleLoadMore} disabled={isLoading}>
					{isLoading ? 'Loading...' : 'Load More'}
				</Button>
			)}
		</section>
	);
}
