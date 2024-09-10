import clsx from 'clsx';
import css from './VehicleTypes.module.css';
import { useState, useEffect } from 'react';
import vehicleTypes from './data/vehicleTypes.json';
import Icon from '../../../shared/components/Icon/Icon';

export default function VehicleTypeFilter({ currentType, onTypeChange }) {
	const [selectedOptions, setSelectedOptions] = useState([]);

	useEffect(() => {
		setSelectedOptions(currentType);
	}, [currentType]);

	const handleOptionClick = (value) => {
		const newSelection = selectedOptions.includes(value)
			? selectedOptions.filter((option) => option !== value)
			: [...selectedOptions, value];

		setSelectedOptions(newSelection);
		onTypeChange(newSelection);
	};

	return (
		<div className={css.vehicleTypeFilter}>
			{vehicleTypes.map((type) => (
				<div
					key={type.label}
					className={clsx(
						css.filterOption,
						selectedOptions.includes(type.value) && css.checked
					)}
					onClick={() => handleOptionClick(type.value)}
				>
					<div className={css.info}>
						<Icon
							className={`${css.filterIcon} ${css[type.className] || ''}`}
							id={type.iconId}
							width="32"
							height="32"
						/>
						<span>{type.label}</span>
					</div>
				</div>
			))}
		</div>
	);
}
