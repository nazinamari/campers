import { useState } from 'react';
import css from './LocationFilter.module.css';

export default function LocationFilter() {
	const [location, setLocation] = useState('Kharkiv, Ukraine');

	const handleLocationChange = () => {
		const newLocation = prompt('Enter new location:', location);
		if (newLocation) {
			setLocation(newLocation);
		}
	};

	return (
		<div className={css.locationFilter}>
			<label htmlFor="location">Location</label>
			<div
				id="location"
				className={css.locationDisplay}
				onClick={handleLocationChange}
			>
				<i className={css.locationIcon}>📍</i> {location}
			</div>
		</div>
	);
}
