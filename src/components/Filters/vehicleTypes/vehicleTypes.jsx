import css from './vehicleTypes.module.css';

const vehicleTypes = [
	{ label: 'Van', icon: '🚐' },
	{ label: 'Fully Integrated', icon: '🚌' },
	{ label: 'Alcove', icon: '🚍' },
];

export default function VehicleTypeFilter() {
	return (
		<div className={css.vehicleTypeFilter}>
			{vehicleTypes.map((type) => (
				<button key={type.label} className={css.filterOption}>
					<span className={css.filterIcon}>{type.icon}</span>
					{type.label}
				</button>
			))}
		</div>
	);
}
