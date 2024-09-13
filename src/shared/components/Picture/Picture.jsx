export const Picture = ({
	defaultImage,
	alt = '',
	width = '825',
	height = '550',
	pictureClassName,
	...props
}) => (
	<img
		src={defaultImage}
		alt={alt}
		width={width}
		height={height}
		className={pictureClassName}
		loading="lazy"
		{...props}
	/>
);
