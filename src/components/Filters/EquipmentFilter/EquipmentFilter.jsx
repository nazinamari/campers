import clsx from 'clsx';
import css from './EquipmentFilter.module.css';
import equipmentOptions from './data/equipmentOptions.json';
import Icon from '../../../shared/Icon/Icon';
import { useState, useEffect } from 'react';

export default function EquipmentFilter({
	currentEquipment,
	onEquipmentChange,
}) {
	const [selectedOptions, setSelectedOptions] = useState([]);

	useEffect(() => {
		setSelectedOptions(currentEquipment);
	}, [currentEquipment]);

	const handleOptionClick = (value) => {
		const newSelection = selectedOptions.includes(value)
			? selectedOptions.filter((option) => option !== value)
			: [...selectedOptions, value];

		setSelectedOptions(newSelection);
		onEquipmentChange(newSelection);
	};

	useEffect(() => {
		console.log(selectedOptions);
	}, [selectedOptions]);

	return (
		<div className={css.equipmentFilter}>
			{equipmentOptions.map((option) => (
				<div
					key={option.label}
					className={clsx(
						css.filterOption,
						selectedOptions.includes(option.label) && css.checked
					)}
					onClick={() => handleOptionClick(option.label)}
				>
					<div className={css.info}>
						<Icon
							className={`${css.filterIcon} ${css[option.className] || ''}`}
							id={option.iconId}
							width="32"
							height="32"
						/>
						<span>{option.label}</span>
					</div>
				</div>
			))}
		</div>
	);
}
