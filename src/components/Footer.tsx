import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Section from './Section';
import Caption from '../elements/Caption';
import H2 from '../elements/H2';
import tw from 'twin.macro';

const FooterComponent = styled.footer`
	width: 100%;
	height: 200px;
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

const PNumber = styled.p`
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
	P(vit) - https://www.google.com/maps/place/Etimo/@59.3341074,18.0564272,17z/data=!3m1!4b1!4m5!3m4!1s0x465f9d456a3a308f:0xb48135247622ea68!8m2!3d59.3341074!4d18.0586159
	Ikoner

*/
const Footer = () => {
	return (
		<Section style={{ backgroundColor: '#231f20' }}>
			<div className="container mx-auto xl:px-32">
				<div className="flex flex-col mb-8 text-white">
					<Caption className="mx-auto">Kontakt</Caption>
					<H2 className="mx-auto">Kontakta oss</H2>
					<InfoCaption>Telefon:</InfoCaption>
					<PNumber>076 - 213 85 97</PNumber>
					<InfoCaption>E-post:</InfoCaption>
					<PNumber>kontakt@etimo.se</PNumber>
					<InfoCaption>Adress:</InfoCaption>
					<PNumber>Kungsgatan 55, 111 22, Stockholm</PNumber>
					{/*
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-10 mt-8 mx-6">
						<div className="flex flex-col border p-10 rounded">
							<h3 className="font-sans text-2xl mb-4">För kunden</h3>
							<p className="text-gray-600 tracking-wider leading-loose">
								- Ständigt fokus på att leverera kundvärde <br />
								- Bidrar med teknisk kompetens och sprider den <br />
								- Påverkar och förbättrar proaktivt <br />
								- Är en ansvarstagande lagspelare <br />
							</p>
						</div>

						<div className="flex flex-col border p-10 rounded">
							<h3 className="font-sans text-2xl mb-4">För samhället</h3>
							<p className="text-gray-600 tracking-wider leading-loose">
								- Jobbar pro-bono åt goda organisationer <br />
								- Skänker en del av vinsten till välgörenhet <br />
								- Open Source-projekt som gör samhällsnytta <br />
								- Väljer bort uppdrag som inte gör samhällsnytta <br />
							</p>
						</div>
					</div>*/}
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
				</div>
			</div>
		</Section>
	);
};

export default Footer;
