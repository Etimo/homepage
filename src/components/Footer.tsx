import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import Caption from '../elements/Caption';
import H2 from '../elements/H2';
import Section from './Section';

const IconHolder = styled.footer`
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
	transition: color 0.1s ease-out;
	${tw`text-darkGray`};

	:hover {
		color: ${(props) => props.theme.secondary};
	}
`;

const InfoP = styled.p`
	${tw`text-center text-sm tracking-wider ease-in duration-200`};

	:hover {
		color: ${(props) => props.theme.secondary};
	}
`;

const InfoCaption = styled(Caption)`
	${tw`text-xs md:text-sm text-center mb-2 md:mb-3 pt-6 md:pt-10`};
`;

const contactItems = [
	{ title: 'Telefon', description: '076 - 213 85 97', link: 'tel:0762138597' },
	{
		title: 'E-post',
		description: 'kontakt@etimo.se',
		link: 'mailto:kontakt@etimo.se',
	},
	{
		title: 'Adress',
		description: 'Kungsgatan 55, 111 22, Stockholm',
		class: 'pointer-events-none',
	},
	{
		description: 'Karta',
		link:
			'https://www.google.com/maps/place/Etimo/@59.3341074,18.0564272,17z/data=!3m1!4b1!4m5!3m4!1s0x465f9d456a3a308f:0xb48135247622ea68!8m2!3d59.3341074!4d18.0586159',
	},
];

const Footer = () => {
	return (
		<Section style={{ backgroundColor: '#231f20' }}>
			<div className="container mx-auto xl:px-32">
				<div className="flex flex-col mb-8 text-white">
					<Caption className="mx-auto">Kontakt</Caption>
					<H2 className="mx-auto">Kontakta oss</H2>
					{/* TODO: Form here. */}

					{contactItems.map((item) => {
						return (
							<div key={item.description} className="mx-auto">
								{item.title && <InfoCaption>{item.title}</InfoCaption>}
								<InfoP className={item.class && item.class}>
									{item.link ? (
										<a href={item.link} target="_blank">
											{item.description}
										</a>
									) : (
										item.description
									)}
								</InfoP>
							</div>
						);
					})}
				</div>
				<div className="mx-auto flex flex-col pt-2 md:pt-4 lg:pt-6 xl:pt-8">
					<IconHolder>
						<ul>
							<li>
								<a
									href="https://github.com/Etimo/"
									target="_blank"
									title="Etimos Github"
								>
									<Icon icon={faGithubSquare} size="2x" />
								</a>
							</li>
							{/* Add more icons here */}
						</ul>
					</IconHolder>
					<InfoP className="text-darkGray pointer-events-none">© Etimo</InfoP>
				</div>
			</div>
		</Section>
	);
};

export default Footer;
