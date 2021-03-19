import React from 'react';

type ContentProps = {
	className?: string;
	content: string | React.ReactNode;
};

export const HTMLContent = ({ className, content }: ContentProps) => (
	<div className={className} dangerouslySetInnerHTML={{ __html: content }} />
);

const Content = ({ className, content }: ContentProps) => (
	<div className={className}>{content}</div>
);

export default Content;
