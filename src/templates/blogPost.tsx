import React from 'react';
import Content from '../components/Content';

type BlogPostTemplateProps = {
	content: string | React.ReactNode;
	contentComponent?: React.ReactNode;
	description: string;
	tags: string[];
	title: string;
};

const BlogPostTemplate = (props: BlogPostTemplateProps) => {
	const { content, description, tags, title } = props;

	const PostContent = props.contentComponent || Content;

	return (
		<section>
			<div className="container flex-column">
				<h1>{title}</h1>
			</div>
		</section>
	);
};

export default BlogPostTemplate;
