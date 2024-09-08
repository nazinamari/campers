import css from './VehicleDetails.module.css';

export default function VehicleDetails({ data }) {
	return (
		<section className={css.vehicle_details}>
			<h3 className={css.titile}>Vehicle details</h3>
			<table className={css.vehicle_table}>
				<tbody>
					<tr>
						<th>Form</th>
						<td>{data.form}</td>
					</tr>
					<tr>
						<th>Length</th>
						<td>
							<span>{data.length.slice(0, -1)}</span>
							<span className={css.td_span}> {data.length.slice(-1)}</span>
						</td>
					</tr>
					<tr>
						<th>Width</th>
						<td>
							<span>{data.width.slice(0, -1)}</span>
							<span className={css.td_span}> {data.width.slice(-1)}</span>
						</td>
					</tr>
					<tr>
						<th>Height</th>
						<td>
							<span>{data.height.slice(0, -1)}</span>
							<span className={css.td_span}> {data.height.slice(-1)}</span>
						</td>
					</tr>
					<tr>
						<th>Tank</th>
						<td>
							<span>{data.tank.slice(0, -1)}</span>
							<span className={css.td_span}> {data.tank.slice(-1)}</span>
						</td>
					</tr>
					<tr>
						<th>Consumption</th>
						<td>{data.consumption}</td>
					</tr>
				</tbody>
			</table>
		</section>
	);
}
