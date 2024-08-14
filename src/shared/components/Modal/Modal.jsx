import Modal from 'react-modal';
import css from './Modal.module.css';
import Icon from '../../Icon/Icon';
import { baseStyles } from './ModalStyles';

Modal.setAppElement('#root');

export default function CustomModal({
	isOpen,
	onRequestClose,
	title,
	component: Component,
	componentProps,
	additionalStyles = {},
}) {
	const mergedStyles = {
		content: { ...baseStyles.content, ...additionalStyles.content },
		overlay: { ...baseStyles.overlay, ...additionalStyles.overlay },
	};

	return (
		<Modal
			isOpen={isOpen}
			onRequestClose={onRequestClose}
			style={mergedStyles}
			contentLabel={title}
		>
			<button onClick={onRequestClose} className={css.closeButton}>
				<Icon className={css.iClose} id="i-close" width={16} height={16} />
			</button>
			<h2>{title}</h2>
			<div>{Component && <Component {...componentProps} />}</div>
		</Modal>
	);
}
