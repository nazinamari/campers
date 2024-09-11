import { useDispatch, useSelector } from 'react-redux';
import { selectFavourites } from '../redux/favourites/selectors';
import CamperCard from '../components/CamperCard/CamperCard';
import { removeFromFavourites } from '../redux/favourites/slice';

export default function FavouritesPage() {
	const favourites = useSelector(selectFavourites);
	const dispatch = useDispatch();
	console.log(favourites);

	const handleToggleFavorite = (campersData) => {
		dispatch(removeFromFavourites(campersData._id));
	};

	return (
		<section>
			<h1>Favourite Campers</h1>
			{favourites.length > 0 ? (
				favourites.map((item) => (
					<CamperCard
						key={item._id}
						camper={item}
						onToggleFavorite={handleToggleFavorite}
					/>
				))
			) : (
				<h2>No favourites campers</h2>
			)}
		</section>
	);
}
