import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App/App.jsx';
import './index.css';
import 'modern-normalize';
import { store } from './redux/store.js';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</Provider>
	</StrictMode>
);
