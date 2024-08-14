import List from '../../shared/components/List/List';
import css from './Features.module.css';

export default function Features({ data, maxVisible }) {
	// Визначаємо всі можливі характеристики
	const allFeatures = [
		{
			key: 'adults',
			label: `${data.adults} adults`,
			icon: '👥',
			exists: data.adults > 0,
		},
		{
			key: 'transmission',
			label: `${data.transmission}`,
			icon: '🔧',
			exists: data.transmission,
		},
		{
			key: 'engine',
			label: `${data.engine}`,
			icon: '⛽',
			exists: data.engine,
		},
		{
			key: 'kitchen',
			label: 'Kitchen',
			icon: '🍴',
			exists: data.details.kitchen,
		},
		{
			key: 'beds',
			label: `${data.details.beds} beds`,
			icon: '🛏️',
			exists: data.details.beds > 0,
		},
		{
			key: 'airConditioner',
			label: 'AC',
			icon: '❄️',
			exists: data.details.airConditioner,
		},
		{ key: 'radio', label: 'Radio', icon: '📻', exists: data.details.radio },
		{
			key: 'hob',
			label: `${data.details.hob} hob`,
			icon: '🔥',
			exists: data.details.hob,
		},
		{ key: 'CD', label: 'CD', icon: '💿', exists: data.details.CD },
		// Додайте інші характеристики тут
	];

	// Фільтруємо всі доступні характеристики
	const availableFeatures = allFeatures.filter((feature) => feature.exists);

	// Вибираємо максимальну кількість характеристик для відображення
	const visibleFeatures = maxVisible
		? availableFeatures.slice(0, maxVisible)
		: availableFeatures;

	return (
		<List className={css.features}>
			{visibleFeatures.map((feature) => (
				<div key={feature.key} className={css.featureItem}>
					<span>{feature.icon}</span>
					<span>{feature.label}</span>
				</div>
			))}
		</List>
	);
}
