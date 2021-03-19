import React from 'react';
import { PreviewTemplateComponentProps } from 'netlify-cms-core';
import BlogPostTemplate from '../../templates/blogPost';

const BlogPostPreview = (props: PreviewTemplateComponentProps) => {
	const { entry } = props;

	return <BlogPostTemplate title={entry.getIn(['data', 'title'])} />;
};

export default BlogPostPreview;
