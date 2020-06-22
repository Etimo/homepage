import styled from 'styled-components';
import P from './P';

export default styled(P)`
	::before {
		content: '-';
		position: absolute;
		margin-left: -10px;
	}
`;
