import css from './EquipmentFilter.module.css';

const equipmentOptions = [
	{ label: 'AC', icon: '🌬️' },
	{ label: 'Automatic', icon: '⚙️' },
	{ label: 'Kitchen', icon: '🍴' },
	{ label: 'TV', icon: '📺' },
	{ label: 'Shower/WC', icon: '🚿' },
];

export default function EquipmentFilter() {
	return (
		<div className={css.equipmentFilter}>
			{equipmentOptions.map((option) => (
				<button key={option.label} className={css.filterOption}>
					<span className={css.filterIcon}>{option.icon}</span>
					{option.label}
				</button>
			))}
		</div>
	);
}
