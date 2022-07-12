import { motion } from 'framer-motion';
import styled, { DefaultTheme, ThemeProps } from 'styled-components';
import tw from 'twin.macro';

export default styled(motion.h4)<ThemeProps<DefaultTheme>>`
	${tw`font-quest text-lg lg:text-lg xl:text-xl overflow-hidden`};
`;