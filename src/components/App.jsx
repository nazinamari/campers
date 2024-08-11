import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import CatalogPage from '../pages/CatalogPage';
import Features from './Features/Features';
import Reviews from './Reviews/Reviews';
import FavoritesPage from '../pages/FavoritesPage';
import NotFoundPage from '../pages/NotFoundPage';

export default function App() {
	return (
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="/catalog" element={<CatalogPage />}>
				<Route path="features" element={<Features />} />
				<Route path="reviews" element={<Reviews />} />
			</Route>
			<Route path="/catalog/:id" element={<CatalogPage />} />
			<Route path="/favorites" element={<FavoritesPage />} />
			<Route path="*" element={<NotFoundPage />} />
		</Routes>
	);
}
