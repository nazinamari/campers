import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import HomePage from '../../pages/HomePage';
import CatalogPage from '../../pages/CatalogPage/CatalogPage';
import FavoritesPage from '../../pages/FavoritesPage';
import SharedLayout from '../../shared/components/SharedLayout/SharedLayout';
import AppBar from '../AppBar/AppBar';

export default function App() {
	const location = useLocation();
	const isHomePage = location.pathname === '/';

	return (
		<>
			{!isHomePage && <AppBar />}
			<SharedLayout>
				{!isHomePage && <AppBar />}
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/catalog" element={<CatalogPage />} />
					<Route path="/favorites" element={<FavoritesPage />} />
					<Route path="*" element={<Navigate to="/" />} />
				</Routes>
			</SharedLayout>
		</>
	);
}
