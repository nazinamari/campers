import Icon from '../../../shared/components/Icon/Icon';
import css from './LocationFilter.module.css';
import { useState, useEffect, useRef } from 'react';

const locations = [
	'Ukraine, Kyiv',
	'Ukraine, Poltava',
	'Ukraine, Dnipro',
	'Ukraine, Odesa',
	'Ukraine, Lviv',
	'Ukraine, Kharkiv',
	'Ukraine, Sumy',
];

export default function LocationFilter({ currentLocation, onLocationChange }) {
	const [localLocation, setLocalLocation] = useState(currentLocation);
	const [filteredLocations, setFilteredLocations] = useState(locations); // Показуємо всі локації за замовчуванням
	const [isDropdownOpen, setDropdownOpen] = useState(false);
	const dropdownRef = useRef(null);

	const handleLocationChange = (event) => {
		const inputValue = event.target.value;
		setLocalLocation(inputValue);

		// Фільтрування локацій на основі введеного значення
		const filtered = locations.filter((location) =>
			location.toLowerCase().includes(inputValue.toLowerCase())
		);
		setFilteredLocations(filtered);
		setDropdownOpen(true); // Відкриваємо список, коли є фільтровані результати
	};

	const handleBlur = () => {
		onLocationChange(localLocation);
		// Затримка для того, щоб дати час на вибір елементу перед закриттям
		setTimeout(() => setDropdownOpen(false), 100);
	};

	const handleSelectLocation = (location) => {
		setLocalLocation(location);
		setFilteredLocations(locations); // Повертаємо всі локації після вибору
		setDropdownOpen(false);
		onLocationChange(location);
	};

	// Закриваємо список, коли клік поза елементом
	useEffect(() => {
		const handleClickOutside = (event) => {
			if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
				setDropdownOpen(false);
			}
		};

		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

	const handleInputClick = () => {
		setDropdownOpen(true);
		setFilteredLocations(locations); // Показуємо всі локації при кліку на інпут
	};

	return (
		<section className={css.locationFilter} ref={dropdownRef}>
			<label htmlFor="location">Location</label>
			<input
				id="location"
				type="text"
				value={localLocation}
				onChange={handleLocationChange}
				onBlur={handleBlur}
				className={css.locationInput}
				placeholder="Enter location"
				onClick={handleInputClick} // Відкриваємо список при кліку на інпут
			/>
			{isDropdownOpen && filteredLocations.length > 0 && (
				<ul className={css.locationList}>
					{filteredLocations.map((location, index) => (
						<li
							key={index}
							onMouseDown={() => handleSelectLocation(location)}
							className={css.locationItem}
						>
							{location}
						</li>
					))}
				</ul>
			)}
			<Icon
				className={css.locationIcon}
				id="i-map_pin"
				width="16"
				height="16"
			/>
		</section>
	);
}
