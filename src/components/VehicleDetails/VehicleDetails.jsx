import css from './VehicleDetails.module.css';

export default function VehicleDetails({ data }) {
	const camper = () => console.log(data);

	camper();

	return (
		<section className={css.vehicle_details}>
			<h3 className={css.titile}>Vehicle details</h3>
			<table className={css.vehicle_table}>
				<tr>
					<th>Form</th>
					<td>Panel truck</td>
				</tr>
				<tr>
					<th>Length</th>
					<td>5.4 m</td>
				</tr>
				<tr>
					<th>Width</th>
					<td>2.01 m</td>
				</tr>
				<tr>
					<th>Height</th>
					<td>2.05 m</td>
				</tr>
				<tr>
					<th>Tank</th>
					<td>132 l</td>
				</tr>
				<tr>
					<th>Consumption</th>
					<td>12.4 l/100km</td>
				</tr>
			</table>
		</section>
	);
}
