import Button from '../../shared/components/Button/Button';
import css from './BookingForm.module.css';

export default function BookingForm() {
	return (
		<>
			<h3 className={css.title}>Book your campervan now</h3>
			<p className={css.description}>
				Stay connected! We are always ready to help you.
			</p>
			<Button className={css.btnSend}>Send</Button>
		</>
	);
}
