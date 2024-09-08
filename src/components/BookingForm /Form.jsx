import {
	SecondWrapper,
	FormTitle,
	FormText,
	Input,
	TextField,
	Button,
} from './Form.styled';

export const Form = () => {
	return (
		<SecondWrapper>
			<FormTitle>Book your campervan now</FormTitle>
			<FormText>Stay connected! We are always ready to help you.</FormText>
			<form>
				<Input placeholder="Name" type="text" />
				<Input placeholder="Email" type="email" />
				<Input placeholder="Booking date" type="text" />
				<TextField placeholder="Comment" />
				<Button>Send</Button>
			</form>
		</SecondWrapper>
	);
};
