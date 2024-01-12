import React from 'react';
import { P } from '../elements';

type Props = {
	children?: React.ReactNode;
	style?: React.CSSProperties;
} & React.HTMLAttributes<HTMLParagraphElement>;

export default ({ children, ...props }: Props) => {
	return <P {...props}>- {children}</P>;
};
