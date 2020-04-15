import styled from 'styled-components';

type Props = {
	small?: number;
	medium?: number;
	large?: number;
};

export default styled.div<Props>`
	width: 100%;
	padding-left: 1.5rem;
	padding-right: 1.5rem;

	@media print, screen and (min-width: 30rem) {
		width: ${(props) => (props.small ? (100 / 12) * props.small : 100)}%;
	}

	@media print, screen and (min-width: 45rem) {
		width: ${(props) => (props.medium ? (100 / 12) * props.medium : 100)}%;
	}

	@media print, screen and (min-width: 65rem) {
		width: ${(props) => (props.large ? (100 / 12) * props.large : 100)}%;
	}
`;
