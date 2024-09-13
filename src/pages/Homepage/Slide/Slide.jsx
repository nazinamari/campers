import { Picture } from '../../../shared/components/Picture/Picture';
import s from './Slide.module.css';

export default function Slide({ url, alt, width, height }) {
	return (
		<div>
			<div className={s.slideContainer}>
				<Picture
					defaultImage={url}
					alt={alt}
					width={width}
					height={height}
					pictureClassName={s.pictureWrapper}
				/>
			</div>
		</div>
	);
}
