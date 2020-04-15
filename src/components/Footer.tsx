import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';

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

const Triangle = styled.div`
	width: 0;
	height: 0;
	position: absolute;
	border-bottom: 200px solid ${(props) => props.theme.primary};
	border-left: 200px solid transparent;
`;

const Footer = () => {
	return (
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
	);
};

export default Footer;
