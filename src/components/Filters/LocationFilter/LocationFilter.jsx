// import { useEffect } from 'react';
import css from './LocationFilter.module.css';
import Icon from '../../../shared/Icon/Icon';
import { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { setLocation } from '../../../redux/filter/slice';

export default function LocationFilter({ currentLocation, onLocationChange }) {
	const [localLocation, setLocalLocation] = useState(currentLocation);

	const handleLocationChange = (event) => {
		setLocalLocation(event.target.value);
	};

	const handleBlur = () => {
		onLocationChange(localLocation);
	};

	return (
		<div className={css.locationFilter}>
			<label htmlFor="location">Location</label>
			<input
				id="location"
				type="text"
				value={localLocation}
				onChange={handleLocationChange}
				onBlur={handleBlur}
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
