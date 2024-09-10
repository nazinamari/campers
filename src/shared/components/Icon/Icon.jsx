import sprite from '../../../../public/icons.svg';

export default function Icon({ className, width, height, id, onClick }) {
	return (
		<>
			<svg
				className={className}
				width={width}
				height={height}
				onClick={onClick}
			>
				<use href={`${sprite}#${id}`} />
			</svg>
		</>
	);
}
