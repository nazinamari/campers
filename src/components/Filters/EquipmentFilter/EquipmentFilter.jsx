import clsx from 'clsx';
import css from './EquipmentFilter.module.css';
import equipmentOptions from './data/equipmentOptions.json'; // Упевнись, що цей файл імпортовано правильно
import Icon from '../../../shared/Icon/Icon';
import { useState } from 'react';

export default function EquipmentFilter() {
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
