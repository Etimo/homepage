import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const NavLink = styled(Link)`
	line-height: 60px;
	color: ${(props) => props.theme.primary};
	transition: color 0.1s ease-out;
	font-size: 1.1rem;
	font-family: 'Quicksand';
	padding: 0 15px;
	position: relative;

	:hover {
		color: ${(props) => props.theme.secondary};
	}
`;

const Ul = styled.ul`
	list-style-type: none;
	margin: 0;
	padding: 0;

	display: flex;
	justify-content: space-evenly;
`;

const Nav = () => {
	return (
		<nav>
			<Ul>
				<li>
					<NavLink to="/opensource/" title="Open Source">
						Open Source
					</NavLink>
				</li>
				<li>
					<NavLink to="/" title="Kontakt">
						Kontakt
					</NavLink>
				</li>
			</Ul>
		</nav>
	);
};

export default Nav;
