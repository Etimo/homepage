import React from 'react';
import { BlogPostData } from '../interface/blog-post-data';

const BlogPostTemplate = (props: BlogPostData) => {
	const { content, description, date, title, tags } = props;

	return (
		<section>
			<div className="container flex-column">
				<h1>{title}</h1>
				<h4>{date}</h4>
				<div>{description}</div>
				<div dangerouslySetInnerHTML={{ __html: content }}></div>
			</div>
		</section>
	);
};

export default BlogPostTemplate;
