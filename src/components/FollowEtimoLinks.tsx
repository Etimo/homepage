import React from 'react';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import tw from 'twin.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

type Props = {
	variant?: 'left' | 'center';
} & React.HTMLAttributes<HTMLUListElement>;

const Icon = styled(FontAwesomeIcon)`
	transition: color 0.1s ease-out;
	${tw`text-darkGray`};

	:hover {
		color: ${(props) => props.theme.secondary};
	}
`;

const linkIcons = [
	{
		href: 'https://github.com/Etimo/',
		icon: faGithubSquare,
		title: 'Etimos Github',
	},
	{
		href: 'https://www.linkedin.com/company/etimo/',
		icon: faLinkedin,
		title: 'Etimos Linkedin',
	},
];

export const FollowEtimoLinks = ({ variant, ...props }: Props) => {
	return (
		<ul
			{...props}
			className={`${props.className ?? ''} mb-2 mt-2 flex flex-row ${
				variant === 'center' ? 'pl-2 justify-center' : 'justify-content'
			}`}
		>
			{linkIcons.map(({ icon, title, href }) => (
				<li className="pr-2" key={title}>
					<a href={href} target="_blank" title={title}>
						<Icon icon={icon} size="2x" />
					</a>
				</li>
			))}
		</ul>
	);
};
