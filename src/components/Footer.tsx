import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Section from './Section';
import Caption from '../elements/Caption';
import H2 from '../elements/H2';
import tw from 'twin.macro';

const FooterComponent = styled.footer`
	${tw`pt-6 md:pt-8 lg:pt-10`};
	display: flex;
	flex-direction: row-reverse;
	> ul {
		list-style-type: none;
		display: flex;
		margin: auto;
		padding: 0;
	}
	> ul li {
		padding: 5px;
	}
`;

const Icon = styled(FontAwesomeIcon)`
	color: ${(props) => props.theme.primary};
	transition: color 0.1s ease-out;

	:hover {
		color: ${(props) => props.theme.secondary};
	}
`;

/** UNUSED */
const Triangle = styled.div`
	width: 0;
	height: 0;
	position: absolute;
	border-bottom: 200px solid ${(props) => props.theme.primary};
	border-left: 200px solid transparent;
`;

const InfoP = styled.p`
	${tw`mx-auto text-sm tracking-wider ease-in duration-200`};

	:hover {
		color: ${(props) => props.theme.secondary};
	}
`;

const InfoCaption = styled(Caption)`
	${tw`text-xs md:text-sm mx-auto pb-2 md:pb-3 pt-6 lg:pt-10`};
`;

/* Caption(vit) - Kontakt
	H2/EmphasizedH2(vit) - Kontakta oss
	Caption(vit) - Telefon
	P(vit) - nummer
	Caption(vit) - E-post
	P(vit) - e-post
	Caption(vit) - Adress
	P(vit) - Adress
	P(vit) - 
	Ikoner

*/
const Footer = () => {
	return (
		<Section style={{ backgroundColor: '#231f20' }}>
			<div className="container mx-auto xl:px-32">
				<div className="flex flex-col mb-8 text-white">
					<Caption className="mx-auto">Kontakt</Caption>
					<H2 className="mx-auto">Kontakta oss</H2>
					{/* TODO: Form here. */}
					<InfoCaption>Telefon:</InfoCaption>
					<InfoP>
						<a href="tel:0762138597">076 - 213 85 97</a>
					</InfoP>
					<InfoCaption>E-post:</InfoCaption>
					<InfoP>
						<a href="mailto:kontakt@etimo.se">kontakt@etimo.se</a>
					</InfoP>
					<InfoCaption>Adress:</InfoCaption>
					<InfoP className="pointer-events-none">
						Kungsgatan 55, 111 22, Stockholm
					</InfoP>
					<InfoP>
						<a href="https://www.google.com/maps/place/Etimo/@59.3341074,18.0564272,17z/data=!3m1!4b1!4m5!3m4!1s0x465f9d456a3a308f:0xb48135247622ea68!8m2!3d59.3341074!4d18.0586159">
							Karta
						</a>
					</InfoP>
					<div className="mx-auto flex flex-col">
						<FooterComponent>
							<ul>
								<li>
									<a
										href="https://github.com/Etimo/"
										target="_blank"
										title="Etimos Github"
									>
										<Icon icon={faGithubSquare} size="3x" />
									</a>
								</li>
							</ul>
						</FooterComponent>
						<InfoP style={{ color: '#888888' }}>© Etimo</InfoP>
					</div>
				</div>
			</div>
		</Section>
	);
};

export default Footer;
