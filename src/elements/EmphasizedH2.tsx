import styled from 'styled-components';
import H2 from './H2';
import tw from 'twin.macro';

export default styled(H2)`
	line-height: 1.25;
	font-weight: 400;
	margin-bottom: 0;
	${tw`text-center lg:text-left md:mt-4 lg:mt-6 xl:mt-8`}
`;
