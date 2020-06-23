import styled from 'styled-components';
import tw from 'twin.macro';
import P from './P';

export default styled(P)`
	::before {
		content: '-';
		position: absolute;
		margin-left: -10px;
	}
	${tw`mb-2 lg:mb-1`};
`;
