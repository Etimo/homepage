import { motion } from 'framer-motion';
import styled, { DefaultTheme, ThemeProps } from 'styled-components';
import tw from 'twin.macro';

export default styled(motion.h3)<ThemeProps<DefaultTheme>>`
	${tw`font-quest text-2xl lg:text-3xl xl:text-4xl overflow-hidden`};
`;
