import React from 'react';
import { Employee } from './EmployeeCards';
import { motion } from 'framer-motion';
import { useHover } from 'react-use';
import GithubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedinIcon from '@material-ui/icons/LinkedIn';

type Link = {
	url: string;
	icon: React.ReactNode;
};

type Props = Employee;

export default (props: Props) => {
	const {
		name,
		title,
		image,
		github,
		stackOverflow,
		linkedin,
		twitter,
	} = props;

	const container = {
		hidden: {
			backgroundColor: 'rgba(0, 0, 0, 0)',
			transition: {
				type: 'tween',
			},
		},
		show: {
			backgroundColor: 'rgba(60, 200, 173, 0.8)',
			transition: {
				type: 'tween',
				duration: 0.2,
			},
		},
	};

	const nameAnimation = {
		hidden: {
			opacity: 0,
			scale: 1.3,
			transition: { type: 'tween', duration: 0.2 },
		},
		show: {
			opacity: 1,
			scale: 1,
			transition: { type: 'tween', duration: 0.2 },
		},
	};

	const roleAnimation = {
		hidden: {
			opacity: 0,
			y: 20,
			transition: { type: 'tween', duration: 0.2 },
		},
		show: {
			opacity: 1,
			y: 0,
			transition: { type: 'tween', duration: 0.2 },
		},
	};

	const linkContainerAnimation = {
		hidden: {
			opacity: 0,
		},
		show: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
			},
		},
	};

	const linkAnimation = {
		hidden: {
			opacity: 0,
			scale: 0,
		},
		show: {
			opacity: 1,
			scale: 1,
			transition: {
				type: 'tween',
				duration: 0.2,
			},
		},
	};

	const links: Link[] = [];

	if (linkedin) links.push({ icon: <LinkedinIcon />, url: linkedin });
	if (github) links.push({ icon: <GithubIcon />, url: github });
	if (twitter) links.push({ icon: <TwitterIcon />, url: twitter });

	const element = (hovered: boolean) => (
		<div className="relative rounded shadow overflow-hidden">
			<motion.div
				className="absolute flex flex-col content-center justify-center h-full w-full z-10 overflow-hidden"
				initial="hidden"
				animate={hovered ? 'show' : 'hidden'}
				variants={container}
			>
				<motion.h3
					variants={nameAnimation}
					className="m-auto mb-1 text-3xl md:text-xl lg:text-3xl tracking-widest"
				>
					{name}
				</motion.h3>
				<motion.span
					className="m-auto mt-0 mb-0 text-lg tracking-wider"
					variants={roleAnimation}
				>
					{title}
				</motion.span>
				<motion.div
					initial="hidden"
					variants={linkContainerAnimation}
					className="flex flex-column m-auto mt-2"
				>
					{links &&
						links.map(({ icon, url }) => (
							<motion.a
								className="mx-auto px-2 hover:text-gray-800 cursor-pointer"
								variants={linkAnimation}
								href={url}
								target="_blank"
							>
								{icon}
							</motion.a>
						))}
				</motion.div>
			</motion.div>
			{image}
		</div>
	);

	const [hoverable] = useHover(element);

	return hoverable;
};
