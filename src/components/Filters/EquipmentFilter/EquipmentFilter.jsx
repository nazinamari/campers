import { useState } from 'react';
import css from './EquipmentFilter.module.css';
import equipmentOptions from './data/equipmentOptions.json';
import clsx from 'clsx';

export default function EquipmentFilter() {
	const [selectedOption, setSelectedOption] = useState('');

	const handleOptionChange = (event) => {
		setSelectedOption(event.target.value);
	};

	return (
		<div className={css.equipmentFilter}>
			{equipmentOptions.map((option) => (
				<label
					key={option.label}
					className={clsx(
						css.filterOption,
						selectedOption === option.label && css.checked
					)}
				>
					<input
						type="radio"
						name="equipment"
						value={option.label}
						checked={selectedOption === option.label}
						onChange={handleOptionChange}
						className={css.filterInput}
					/>
					<div className={css.info}>
						<span className={css.filterIcon}>{option.icon}</span>
						{option.label}
					</div>
				</label>
			))}
		</div>
	);
}
