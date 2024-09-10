import BookingForm from '../BookingForm /BookingForm';
import Features from '../Features/Features';
import VehicleDetails from '../VehicleDetails/VehicleDetails';
import css from './FeaturesTab.module.css';

export default function FeaturesTab({ data }) {
	return (
		<section className={css.tab_container}>
			<div className={css.left}>
				<Features data={data} />
				<VehicleDetails data={data} />
			</div>
			<div className={css.right}>
				<BookingForm />
			</div>
		</section>
	);
}
