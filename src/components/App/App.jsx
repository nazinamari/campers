import { Route, Routes, useLocation } from 'react-router-dom';
import HomePage from '../../pages/HomePage';
import CatalogPage from '../../pages/CatalogPage/CatalogPage';
import Features from '../Features/Features';
import Reviews from '../Reviews/Reviews';
import FavoritesPage from '../../pages/FavoritesPage';
import NotFoundPage from '../../pages/NotFoundPage';
import SharedLayout from '../../shared/SharedLayout/SharedLayout';
import AppBar from '../AppBar/AppBar';
import css from './App.module.css';

export default function App() {
	const location = useLocation();

	return (
		<div className={css.container}>
			{location.pathname !== '/' && <AppBar />}
			<SharedLayout>
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
			</SharedLayout>
		</div>
	);
}
