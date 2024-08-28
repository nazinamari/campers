import { useState } from 'react';
import css from './LocationFilter.module.css';
import Icon from '../../../shared/Icon/Icon';

export default function LocationFilter() {
	const [location, setLocation] = useState('Kyiv, Ukraine');

	const handleLocationChange = (e) => {
		setLocation(e.target.value);
	};

	return (
		<div className={css.locationFilter}>
			<label htmlFor="location">Location</label>
			<input
				id="location"
				type="text"
				value={location}
				onChange={handleLocationChange}
				className={css.locationInput}
				placeholder="Enter location"
			/>
			<Icon
				className={css.locationIcon}
				id="i-map_pin"
				width="16"
				height="16"
			/>
		</div>
	);
}
