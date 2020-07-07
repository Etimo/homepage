import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const NavLink = styled(Link)`
	line-height: 60px;
	color: ${(props) => props.theme.primary};
	transition: color 0.1s ease-out;
	font-size: 1.1rem;
	font-family: ${(props) => props.theme.typography.headline.font};
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
					<NavLink to="/karriar" title="Career">
						Karriär
					</NavLink>
				</li>
			</Ul>
		</nav>
	);
};

export default Nav;
