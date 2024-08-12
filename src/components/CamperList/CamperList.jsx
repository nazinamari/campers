import List from '../../shared/components/List/List';
import CamperCard from '../CamperCard/CamperCard';
import css from './CamperList.module.css';

export default function CamperList({ campers }) {
	return (
		<List className={css.camperList}>
			{campers.map((camper) => (
				<CamperCard key={camper.id} camper={camper} />
			))}
		</List>
	);
}
