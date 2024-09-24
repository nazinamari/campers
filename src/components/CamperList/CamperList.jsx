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
import { fetchCampers } from '../../redux/catalog/operations';
import { Loader } from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Button from '../../shared/components/Button/Button';

export default function CamperList() {
	const dispatch = useDispatch();
	const allCampers = useSelector(selectCampers); // Всі кемпери
	const isLoading = useSelector(selectIsLoading);
	const error = useSelector(selectError);
	const isLastPage = useSelector(selectIsLastPage);

	useEffect(() => {
		dispatch(fetchCampers());
	}, [dispatch]);

	const handleLoadMore = () => {
		if (!isLoading && !isLastPage) {
			dispatch(fetchCampers());
		}
	};

	return (
		<section className={css.list__section}>
			{isLoading && allCampers.length === 0 && <Loader />}
			{error && <ErrorMessage />}
			{!isLoading && (
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
			)}
			{!isLoading && !isLastPage && allCampers.length > 0 && (
				<div className={css.loadMorePosition}>
					<Button
						onClick={handleLoadMore}
						disabled={isLoading}
						className={css.btnMore}
					>
						{isLoading ? 'Loading' : 'Load More'}
					</Button>
				</div>
			)}
		</section>
	);
}
