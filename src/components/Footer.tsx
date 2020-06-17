import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Section from './Section';

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

const Footer = () => {
	return (
		/*<Section style={{ backgroundColor: '#231f20' }}>*/
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
				<li>
					<a
						href="https://www.linkedin.com/company/etimo/"
						target="_blank"
						title="Etimos Linkedin"
					>
						<Icon icon={faLinkedin} size="3x" />
					</a>
				</li>
			</ul>
		</FooterComponent>
		/*</Section>*/
	);
};

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

export default Footer;
