import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { useInterval } from '../hooks';

const variants = {
	initial: {
		x: -200,
		opacity: 0,
		zIndex: 0,
	},
	active: {
		x: 0,
		opacity: 1,
		zIndex: 1,
	},
	exit: {
		x: 200,
		opacity: 0,
		zIndex: 0,
		duration: 0.5,
	},
};

const Item = styled(motion.p)`
	position: relative;
	${tw`font-mont`}
`;

type Props = {
	items: string[];
};

const Carousel = ({ items }: Props) => {
	const [page, setPage] = useState(0);

	useInterval(() => setPage((page + 1) % items.length), 8000);

	return (
		<AnimatePresence exitBeforeEnter initial={false}>
			<Item
				key={page}
				variants={variants}
				initial="initial"
				animate="active"
				exit="exit"
			>
				{items[page]}
			</Item>
		</AnimatePresence>
	);
};

export default Carousel;
