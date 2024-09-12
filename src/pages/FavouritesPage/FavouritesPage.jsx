import { useDispatch, useSelector } from 'react-redux';
import { selectFavourites } from '../../redux/favourites/selectors';
import CamperCard from '../../components/CamperCard/CamperCard';
import { removeFromFavourites } from '../../redux/favourites/slice';
import css from './FavouritesPage.module.css';

export default function FavouritesPage() {
	const favourites = useSelector(selectFavourites);
	const dispatch = useDispatch();
	console.log(favourites);

	const handleToggleFavorite = (campersData) => {
		dispatch(removeFromFavourites(campersData._id));
	};

	return (
		<section className={css.favourite_container}>
			<h1 className={css.title}>Favourite Campers</h1>
			{favourites.length > 0 ? (
				favourites.map((item) => (
					<CamperCard
						key={item._id}
						camper={item}
						onToggleFavorite={handleToggleFavorite}
					/>
				))
			) : (
				<h2 className={css.notfound}>No favourites campers</h2>
			)}
		</section>
	);
}
