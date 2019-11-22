import React, { useState } from 'react';
import styled from 'styled-components';
import { lightenDarkenColor } from '../helpers';
import { HamburgerSpin } from 'react-animated-burgers';

const FloatingActionButton = styled.button`
	position: fixed;
	top: ${props => (props.top ? 40 : 0)}px;
	right: ${props => (props.right ? 40 : '')}px;
	left: ${props => (props.left ? 40 : '')}px;
	bottom: ${props => (props.bottom ? 40 : '')}px;
	width: 55px;
	height: 55px;
	z-index: 105;
	border-radius: 50%;
	font-family: ${props => props.theme.typography.font};
	font-size: ${props => props.theme.typography.button.medium};
	text-transform: none;
	display: flex;
	justify-content: center;
	align-items: center;
	border: 0;
	outline: 0;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
	transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

	background-color: ${props =>
		props.color ? props.color : props.theme.secondary};

	:hover {
		background-color: ${props => lightenDarkenColor(props.theme.secondary, 20)};
	}

	:focus {
		outline: 0;
	}

	:active {
		box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
		outline: 0;
	}
`;

export default () => {
	const [isOpen, setOpen] = useState(false);

	return (
		<></>
		// <HamburgerSpin isActive={isOpen}></HamburgerSpin>
		// 	<FloatingActionButton top right onClick={() => setOpen(!isOpen)}>
		// </FloatingActionButton>
	);
};
