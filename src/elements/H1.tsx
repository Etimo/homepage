import { motion } from 'framer-motion';
import styled from 'styled-components';
import tw from 'twin.macro';

export default styled(motion.h1)`
	${tw`font-quest text-5xl md:text-6xl lg:text-8xl xl:text-10xl overflow-hidden self-center`};
`;
