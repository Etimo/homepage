import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'gatsby';
import React, { useState } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { CyanHover } from '../animations';
import { Caption, H4, P } from '../elements';
import { FollowEtimoLinks } from './FollowEtimoLinks';
import { useViewportSize } from '../hooks';
import { sizes } from '../helpers';

const links = [
	{ name: 'Start', url: '/', local: true },
	{ name: 'Våra tjänster', url: '/tjanster', local: true },
	{ name: 'Investeringsstrategi', url: '/etimo-ventures', local: true },
	{ name: 'Våra kunder', url: '/kunder', local: true },
	{ name: 'Om oss', url: '/om-oss', local: true },
	{ name: 'Karriär', url: '/karriar', local: true },
];

const MenuNav = styled(motion.nav)(() => [
	tw`fixed h-full bg-menuGray top-0 right-0 z-40`,
	tw`w-270p md:w-350p lg:w-25r xl:w-450p` /* Width */,
	tw`pl-8 pr-5 pt-20 pb-5` /* Phones */,
	tw`md:pl-large md:pr-8 md:pb-8` /* Tablets */,
	tw`lg:pl-60p lg:pr-small lg:pb-large` /* Laptops */,
	tw`xl:pl-20 xl:pt-32` /* Desktops */,
]);

const HamburgerButton = styled.div`
	${tw`fixed top-15px right-15px md:top-20px md:right-20px lg:top-40px xl:right-62px z-50`}
`;

const ModifiedCapt = styled(Caption)`
	${tw`mb-1 md:mb-1 xl:mb-1`};
`;

const HoverP = styled(P)`
	${tw`text-white`};
	:hover {
		color: ${(props) => props.theme.secondary};
	}
`;

const parentVar = {
	init: {},
	anim: {
		transition: {
			delayChildren: 0.5,
			staggerChildren: 0.2,
		},
	},
};

const lineVar = {
	init: {
		pathLength: 0,
		opacity: 0,
	},
	anim: {
		opacity: [0, 0.5, 1, 1, 1],
		pathLength: [0, 0.2, 0.7, 0.9, 1],
		transition: {
			times: [0, 0.3, 0.5, 0.7, 1],
			duration: 1,
		},
	},
};

const RightMenu = () => {
	const [active, setActive] = useState(false);
	const [height, width] = useViewportSize();

	const isLaptop = height <= sizes().minimumHeight && width >= sizes().laptop;

	return (
		<>
			<HamburgerButton>
				<motion.button
					className="w-50p h-50p lg:w-60p lg:h-60p bg-cyan rounded-full focus:outline-none focus:shadow"
					onClick={() => setActive(!active)}
					initial={{ opacity: 0 }}
					animate={{
						opacity: 1,
						transition: { duration: 0.7, ease: 'easeIn' },
					}}
				>
					<motion.svg
						className="mx-auto"
						width="30"
						height="20"
						strokeWidth="1"
						initial="init"
						animate="anim"
						stroke="black"
						variants={parentVar}
					>
						<AnimatePresence>
							{active ? (
								<>
									<motion.path key="1" d="M 5 0 L 25 20" variants={lineVar} />
									<motion.path key="2" d="M 5 20 L 25 0" variants={lineVar} />
								</>
							) : (
								<>
									<motion.path key="3" d="M 0 5 L 30 5" variants={lineVar} />
									<motion.path key="4" d="M 30 10 L 0 10" variants={lineVar} />
									<motion.path key="5" d="M 0 15 L 30 15" variants={lineVar} />
								</>
							)}
						</AnimatePresence>
					</motion.svg>
				</motion.button>
			</HamburgerButton>
			<AnimatePresence>
				{active && (
					<>
						<MenuNav
							initial={{ x: '100%' }}
							animate={{ x: 0 }}
							transition={{
								duration: 0.4,
								ease: 'easeInOut',
							}}
							exit={{ x: '100%' }}
						>
							<div className="flex flex-col text-white h-full">
								{links.map((link) => {
									return (
										<CyanHover
											key={link.name}
											className="mb-6 md:mb-8 mr-auto px-1 min-h-cyanHover"
										>
											{link.local ? (
												<Link to={link.url}>
													<H4>{link.name}</H4>
												</Link>
											) : (
												<a href={link.url} target="_blank" rel="noreferer">
													<H4>{link.name}</H4>
												</a>
											)}
										</CyanHover>
									);
								})}

								{!isLaptop && (
									<div className="mt-auto">
										<ModifiedCapt>Telefon:</ModifiedCapt>
										<a href="tel:0760213150" target="_blank">
											<HoverP className="mb-7">076 - 021 31 50</HoverP>
										</a>
										<ModifiedCapt>E-post:</ModifiedCapt>
										<a href="mailto:kontakt@etimo.se" target="_blank">
											<HoverP className="mb-7">kontakt@etimo.se</HoverP>
										</a>
										<Caption>Följ oss:</Caption>
										<FollowEtimoLinks />
									</div>
								)}
							</div>
						</MenuNav>
						<div
							className="top-0 left-0 w-screen h-screen fixed z-10"
							onClick={() => setActive(false)}
						/>
					</>
				)}
			</AnimatePresence>
		</>
	);
};

export default RightMenu;
