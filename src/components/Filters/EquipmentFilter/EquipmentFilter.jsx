import clsx from 'clsx';
import css from './EquipmentFilter.module.css';
import equipmentOptions from './data/equipmentOptions.json';
import { useState, useEffect } from 'react';
import Icon from '../../../shared/components/Icon/Icon';

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

	return (
		<section className={css.equipmentFilter}>
			{equipmentOptions.map((option) => (
				<div
					key={option.label}
					className={clsx(
						css.filterOption,
						selectedOptions.includes(option.value) && css.checked
					)}
					onClick={() => handleOptionClick(option.value)}
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
		</section>
	);
}
