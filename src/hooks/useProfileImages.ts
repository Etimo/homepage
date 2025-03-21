import { graphql, useStaticQuery } from 'gatsby';

export const useProfileImages = () => {
	const data = useStaticQuery(graphql`
		query {
			henrik: file(relativePath: { eq: "someofus/henrik.jpg" }) {
				childImageSharp {
					gatsbyImageData(layout: CONSTRAINED, width: 500, quality: 90)
				}
			}
			bjorn: file(relativePath: { eq: "someofus/bjorn.png" }) {
				childImageSharp {
					gatsbyImageData(layout: CONSTRAINED, width: 500, quality: 90)
				}
			}
			malinw: file(relativePath: { eq: "someofus/malinw.jpg" }) {
				childImageSharp {
					gatsbyImageData(layout: CONSTRAINED, width: 500, quality: 90)
				}
			}
			jeanette: file(relativePath: { eq: "someofus/jeanette.jpg" }) {
				childImageSharp {
					gatsbyImageData(layout: CONSTRAINED, width: 500, quality: 90)
				}
			}
			lukas: file(relativePath: { eq: "someofus/lukas.png" }) {
				childImageSharp {
					gatsbyImageData(layout: CONSTRAINED, width: 500, quality: 90)
				}
			}
			rickard: file(relativePath: { eq: "someofus/rickard.jpg" }) {
				childImageSharp {
					gatsbyImageData(layout: CONSTRAINED, width: 500, quality: 90)
				}
			}
			saga: file(relativePath: { eq: "someofus/saga-yellow.jpg" }) {
				childImageSharp {
					gatsbyImageData(layout: CONSTRAINED, width: 500, quality: 90)
				}
			}
			joakim: file(relativePath: { eq: "someofus/joakim.png" }) {
				childImageSharp {
					gatsbyImageData(layout: CONSTRAINED, width: 500, quality: 90)
				}
			}
			erik: file(relativePath: { eq: "someofus/erik.jpg" }) {
				childImageSharp {
					gatsbyImageData(layout: CONSTRAINED, width: 500, quality: 90)
				}
			}
			axel: file(relativePath: { eq: "someofus/elmarsson.jpg" }) {
				childImageSharp {
					gatsbyImageData(layout: CONSTRAINED, width: 500, quality: 90)
				}
			}
			daniel: file(relativePath: { eq: "someofus/daniel.jpg" }) {
				childImageSharp {
					gatsbyImageData(layout: CONSTRAINED, width: 500, quality: 90)
				}
			}
			philip: file(relativePath: { eq: "someofus/philip.jpg" }) {
				childImageSharp {
					gatsbyImageData(layout: CONSTRAINED, width: 500, quality: 90)
				}
			}
			morgan: file(relativePath: { eq: "someofus/morgan.jpg" }) {
				childImageSharp {
					gatsbyImageData(layout: CONSTRAINED, width: 500, quality: 90)
				}
			}
			etimo: file(relativePath: { eq: "someofus/etimologo.png" }) {
				childImageSharp {
					gatsbyImageData(layout: CONSTRAINED, width: 500, quality: 90)
				}
			}
			johan: file(relativePath: { eq: "someofus/johan.jpg" }) {
				childImageSharp {
					gatsbyImageData(layout: CONSTRAINED, width: 500, quality: 90)
				}
			}
			andre: file(relativePath: { eq: "someofus/andre.jpg" }) {
				childImageSharp {
					gatsbyImageData(layout: CONSTRAINED, width: 500, quality: 90)
				}
			}
			klara: file(relativePath: { eq: "someofus/klara.jpg" }) {
				childImageSharp {
					gatsbyImageData(layout: CONSTRAINED, width: 500, quality: 90)
				}
			}
			colan: file(relativePath: { eq: "someofus/colan-right.jpg" }) {
				childImageSharp {
					gatsbyImageData(layout: CONSTRAINED, width: 500, quality: 90)
				}
			}
			malinl: file(relativePath: { eq: "someofus/malinl.jpg" }) {
				childImageSharp {
					gatsbyImageData(layout: CONSTRAINED, width: 500, quality: 90)
				}
			}
		}
	`);

	return {
		henrik: data.henrik.childImageSharp.gatsbyImageData,
		bjorn: data.bjorn.childImageSharp.gatsbyImageData,
		malinw: data.malinw.childImageSharp.gatsbyImageData,
		jeanette: data.jeanette.childImageSharp.gatsbyImageData,
		saga: data.saga.childImageSharp.gatsbyImageData,
		joakim: data.joakim.childImageSharp.gatsbyImageData,
		erik: data.erik.childImageSharp.gatsbyImageData,
		daniel: data.daniel.childImageSharp.gatsbyImageData,
		philip: data.philip.childImageSharp.gatsbyImageData,
		morgan: data.morgan.childImageSharp.gatsbyImageData,
		etimo: data.etimo.childImageSharp.gatsbyImageData,
		johan: data.johan.childImageSharp.gatsbyImageData,
		andre: data.andre.childImageSharp.gatsbyImageData,
		colan: data.colan.childImageSharp.gatsbyImageData,
		malinl: data.malinl.childImageSharp.gatsbyImageData,
	};
};

export default useProfileImages;
