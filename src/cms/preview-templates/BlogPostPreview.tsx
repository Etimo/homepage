import React from 'react';
import { PreviewTemplateComponentProps } from 'netlify-cms-core';
import BlogPostTemplate from '../../templates/blogPost';

const BlogPostPreview = (props: PreviewTemplateComponentProps) => {
	const { entry } = props;
	const data = entry.getIn(['data']).toJs();

	return (
		<BlogPostTemplate
			id={data.id}
			title={data.title}
			date={data.date}
			content={data.content}
			description={data.description}
			tags={data.tags}
		/>
	);
};

export default BlogPostPreview;
