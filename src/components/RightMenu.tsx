import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'gatsby';
import React, { useState } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { CyanHover } from '../animations';
import { Caption, H4, P } from '../elements';

const links = [
	{ name: 'Start', url: '/', local: true },
	{ name: 'Karriär', url: '/karriar', local: true },
	{ name: 'Klienter', url: '/klienter-och-expertis', local: true },
	{ name: 'Blogg', url: 'https://blog.etimo.se/', local: false },
];

const Icon = styled(FontAwesomeIcon)`
	transition: color 0.1s ease-out;
	${tw`text-darkGray`};

	:hover {
		color: ${(props) => props.theme.secondary};
	}
`;

const MenuNav = styled(motion.nav)(() => [
	tw`fixed h-full bg-menuGray top-0 right-0 z-40`,
	tw`w-270p md:w-350p lg:w-25r xl:w-450p` /* Width */,
	tw`pl-8 pr-5 pt-20 pb-5` /* Phones */,
	tw`md:pl-large md:pr-8 md:pb-8` /* Tablets */,
	tw`lg:pl-60p lg:pr-small lg:pt-32 lg:pb-large` /* Laptops */,
	tw`xl:pl-20` /* Desktops */,
]);

const HamburgerButton = styled.div`
	${tw`fixed top-15px right-15px md:top-20px md:right-20px lg:top-40px xl:right-62px z-50`}
`;

const ModifiedCapt = styled(Caption)`
	${tw`mb-1 md:mb-1 xl:mb-1`};
`;

const RightMenu = () => {
	const [active, setActive] = useState(false);

	return (
		<>
			<HamburgerButton>
				<button
					className="w-50p h-50p lg:w-60p lg:h-60p bg-cyan rounded-full"
					onClick={() => setActive(!active)}
				>
					<svg className="mx-auto" viewBox="0 0 150 100" width="35" height="20">
						<rect y="25" width="150" height="5" />
						<rect y="50" width="150" height="5" />
						<rect y="75" width="150" height="5" />
					</svg>
				</button>
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
											className="mb-6 md:mb-8 mr-auto px-1"
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
								<div className="mt-auto">
									<ModifiedCapt>Telefon:</ModifiedCapt>
									<P className="mb-7" style={{ color: 'white' }}>
										076 - 213 85 97
									</P>
									<ModifiedCapt>E-post:</ModifiedCapt>
									<P className="mb-7" style={{ color: 'white' }}>
										kontakt@etimo.se
									</P>
									<Caption>Följ oss:</Caption>
									<div className="ml-2 mb-2 mt-2">
										<a
											href="https://github.com/Etimo/"
											target="_blank"
											title="Etimos Github"
										>
											<Icon icon={faGithubSquare} size="2x" />
										</a>
									</div>
								</div>
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
