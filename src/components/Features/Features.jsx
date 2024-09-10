import List from '../../shared/components/List/List';
import Icon from '../../shared/components/Icon/Icon';
import css from './Features.module.css';
import allFeaturesData from './data/features.json';

export default function Features({ data, maxVisible }) {
	const directAccessKeys = [
		'adults',
		'beds',
		'engine',
		'children',
		'transmission',
		'form',
	];

	const allFeatures = allFeaturesData.map((feature) => {
		const value = directAccessKeys.includes(feature.key)
			? data?.[feature.key]
			: data?.details?.[feature.key];

		// Формування підпису (label) для характеристики
		const label = feature.label.replace(/{(.*?)}/g, () => value || 0);

		// Визначення, чи потрібно рендерити характеристику
		const exists =
			value &&
			(typeof value === 'number'
				? value > 0
				: typeof value === 'string'
				? value.trim().length > 0
				: true);

		return {
			...feature,
			label,
			exists,
		};
	});

	const availableFeatures = allFeatures.filter((feature) => feature.exists);

	const visibleFeatures = maxVisible
		? availableFeatures.slice(0, maxVisible)
		: availableFeatures;

	return (
		<section>
			<List className={css.features}>
				{visibleFeatures.map((feature) => (
					<div key={feature.key} className={css.featureItem}>
						<Icon
							className={`${css.icon} ${css[feature.className] || ''}`}
							id={feature.iconId}
							width="20"
							height="20"
						/>
						<span className={css.label}>{feature.label}</span>
					</div>
				))}
			</List>
		</section>
	);
}
