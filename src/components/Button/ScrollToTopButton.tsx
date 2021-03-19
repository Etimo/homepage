import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import tw from 'twin.macro';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

const ScrollToTopButtonStyle = styled.div`
	${tw`fixed bottom-15px right-15px md:bottom-20px md:right-20px lg:bottom-40px xl:right-62px z-50`}
`;

const Icon = styled(FontAwesomeIcon)`
	${tw`text-black`};
`;

type Props = {
	showBelow: number;
};

const ScrollToTopButton = ({ showBelow }: Props) => {
	const [show, setShow] = useState(showBelow ? false : true);

	const handleScroll = () => {
		if (window.pageYOffset > showBelow) {
			if (!show) setShow(true);
		} else {
			if (show) setShow(false);
		}
	};

	const handleClick = () => {
		window[`scrollTo`]({ top: 0, behavior: `smooth` });
	};

	useEffect(() => {
		if (showBelow) {
			window.addEventListener(`scroll`, handleScroll);
			return () => window.removeEventListener(`scroll`, handleScroll);
		}
	});

	return (
		<>
			{show && (
				<ScrollToTopButtonStyle>
					<motion.button
						className="w-30p h-30p lg:w-50p lg:h-50p bg-cyan rounded-full focus:outline-none focus:shadow"
						onClick={handleClick}
						initial={{ opacity: 0 }}
						aria-label="to top"
						whileHover={{
							opacity: 0.5,
							transition: { duration: 0.7 },
						}}
						animate={{
							opacity: 1,
							transition: { duration: 0.7, ease: 'easeIn' },
						}}
					>
						<Icon icon={faChevronUp} size="1x" />
					</motion.button>
				</ScrollToTopButtonStyle>
			)}
		</>
	);
};
export default ScrollToTopButton;
