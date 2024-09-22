import { Triangle } from 'react-loader-spinner';
import css from './Loader.module.css';

export const Loader = () => {
	return (
		<div className={css.loader}>
			<Triangle
				visible={true}
				height="100"
				width="100"
				color="#e44848"
				ariaLabel="triangle-loading"
				wrapperStyle={{}}
				wrapperClass=""
			/>
		</div>
	);
};
