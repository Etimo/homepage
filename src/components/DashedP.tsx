import React from 'react';
import { P } from '../elements';

type Props = {
	children?: React.ReactNode;
	style?: React.CSSProperties;
} & React.HTMLAttributes<HTMLParagraphElement>;

export default ({ children, ...props }: Props) => {
	return (
		<div className="flex flex-row">
			<P {...props} className={`${props.className} mr-1.5`}>
				-
			</P>
			<P {...props}> {children}</P>
		</div>
	);
};
