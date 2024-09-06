import Features from '../Features/Features';
import css from './FeaturesTab.module.css';

export default function FeaturesTab({ data }) {
	return (
		<div className={css.featuresTab_container}>
			<Features data={data} />
		</div>
	);
}
