import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Scroller from '../components/Scroller';
import SEO from '../components/Seo';
import { sizes } from '../helpers';
import { useViewportSize } from '../hooks';
import BlogPostTemplate from '../templates/blogPost';
import { BlogPostData } from '../interface/blog-post-data';

const BlogPage = ({ data }: any) => {
	const [height, width] = useViewportSize();
	const scrollbarEnabled = width >= sizes().desktop; // Desktop++
	const posts: BlogPostData[] = data.allMarkdownRemark.edges.map((x: any) => {
		return {
			id: x.node.id,
			date: x.node.frontmatter.date,
			description: x.node.frontmatter.description,
			title: x.node.frontmatter.title,
			content: x.node.html,
		};
	});

	const sections: any = [];

	return (
		<Layout>
			<SEO title="Karriär" />
			{scrollbarEnabled && <Scroller givenSections={sections} />}
			{posts.map((post) => (
				<BlogPostTemplate key={post.id} {...post}></BlogPostTemplate>
			))}
		</Layout>
	);
};

export const query = graphql`
	query BlogPageQuery {
		allMarkdownRemark {
			edges {
				node {
					id
					html
					frontmatter {
						date(formatString: "MMMM DD, YYYY")
						description
						title
					}
				}
			}
		}
	}
`;

export default BlogPage;
