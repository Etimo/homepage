import { motion } from 'framer-motion';
import styled, { DefaultTheme, ThemeProps } from 'styled-components';
import tw from 'twin.macro';

export default styled(motion.h2)<ThemeProps<DefaultTheme>>`
	${tw`font-quest text-3xl lg:text-4xl xl:text-5xl overflow-hidden`};
`;
