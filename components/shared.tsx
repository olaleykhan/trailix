import styled from 'styled-components';

const Container = styled.div`
	width: 90%;
	min-width: 400px;
	margin: 0 auto;
	/* min-height: 100vh; */
`;
export const BaseButton = styled.button<{ rounded?: boolean,  }>`
	padding: 0.8rem 2rem;
	font-weight: 500;
	font-size: 1rem;
	border: none;
	color: var(--black);
	background-color: var(--white10);
	/* width: 10rem; */
	width: fit-content;
	cursor: pointer;
	/* line-height: 1.5rem; */
	display: flex;
	align-items: center;
	align-content: center;
	border-radius: ${({ rounded }) => (rounded ? '1.6rem' : 'none')};
`;

export const Button = styled(BaseButton) <{ inverted?: boolean }>`
${(props)=>props.inverted? "background-color: var(--black);	color: var(--white10);": "" }

	`;
