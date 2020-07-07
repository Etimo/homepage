import { motion } from 'framer-motion';
import styled, { DefaultTheme, ThemeProps } from 'styled-components';
import tw from 'twin.macro';

export default styled(motion.h3)<ThemeProps<DefaultTheme>>`
	${tw`font-quest text-xl lg:text-2xl xl:text-3xl overflow-hidden`};
`;
