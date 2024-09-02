import clsx from 'clsx';
import css from './VehicleTypes.module.css';
import Icon from '../../../shared/Icon/Icon';
import { useState } from 'react';
import vehicleTypes from './data/vehicleTypes.json';

export default function VehicleTypeFilter() {
	const [selectedOptions, setSelectedOptions] = useState([]);

	const handleOptionClick = (value) => {
		setSelectedOptions((prevSelectedOptions) => {
			if (prevSelectedOptions.includes(value)) {
				return prevSelectedOptions.filter((option) => option !== value);
			} else {
				return [...prevSelectedOptions, value];
			}
		});
	};

	return (
		<div className={css.vehicleTypeFilter}>
			{vehicleTypes.map((type) => (
				<div
					key={type.label}
					className={clsx(
						css.filterOption,
						selectedOptions.includes(type.label) && css.checked
					)}
					onClick={() => handleOptionClick(type.label)}
				>
					<div className={css.info}>
						<Icon
							className={`${css.filterIcon} ${css[type.className] || ''}`}
							id={type.iconId}
							width="32"
							height="32"
						/>
						{type.label}
					</div>
				</div>
			))}
		</div>
	);
}
