import { graphql, useStaticQuery } from 'gatsby';

export const useProfileImages = () => {
	const data = useStaticQuery(graphql`
		query {
			henrik: file(relativePath: { eq: "someofus/new-images/henrik.jpg" }) {
				childImageSharp {
					gatsbyImageData(layout: CONSTRAINED, width: 500, quality: 90)
				}
			}
			bjorn: file(relativePath: { eq: "someofus/new-images/bjorn.png" }) {
				childImageSharp {
					gatsbyImageData(layout: CONSTRAINED, width: 500, quality: 90)
				}
			}
			malinw: file(relativePath: { eq: "someofus/new-images/malinw.jpg" }) {
				childImageSharp {
					gatsbyImageData(layout: CONSTRAINED, width: 500, quality: 90)
				}
			}
			jeanette: file(
				relativePath: { eq: "someofus/new-images/jeanette2.jpg" }
			) {
				childImageSharp {
					gatsbyImageData(layout: CONSTRAINED, width: 500, quality: 90)
				}
			}
			lukas: file(relativePath: { eq: "someofus/new-images/lukas.png" }) {
				childImageSharp {
					gatsbyImageData(layout: CONSTRAINED, width: 500, quality: 90)
				}
			}
			rickard: file(relativePath: { eq: "someofus/new-images/rickard.jpg" }) {
				childImageSharp {
					gatsbyImageData(layout: CONSTRAINED, width: 500, quality: 90)
				}
			}
			saga: file(relativePath: { eq: "someofus/new-images/saga.png" }) {
				childImageSharp {
					gatsbyImageData(layout: CONSTRAINED, width: 500, quality: 90)
				}
			}
			joakim: file(relativePath: { eq: "someofus/new-images/joakim.png" }) {
				childImageSharp {
					gatsbyImageData(layout: CONSTRAINED, width: 500, quality: 90)
				}
			}
			erik: file(relativePath: { eq: "someofus/new-images/erik.jpg" }) {
				childImageSharp {
					gatsbyImageData(layout: CONSTRAINED, width: 500, quality: 90)
				}
			}
			axel: file(relativePath: { eq: "someofus/new-images/elmarsson.jpg" }) {
				childImageSharp {
					gatsbyImageData(layout: CONSTRAINED, width: 500, quality: 90)
				}
			}
			daniel: file(relativePath: { eq: "someofus/new-images/danielw.jpg" }) {
				childImageSharp {
					gatsbyImageData(layout: CONSTRAINED, width: 500, quality: 90)
				}
			}
			philip: file(relativePath: { eq: "someofus/new-images/phille.jpg" }) {
				childImageSharp {
					gatsbyImageData(layout: CONSTRAINED, width: 500, quality: 90)
				}
			}
			morgan: file(relativePath: { eq: "someofus/new-images/morgan.jpg" }) {
				childImageSharp {
					gatsbyImageData(layout: CONSTRAINED, width: 500, quality: 90)
				}
			}
			etimo: file(relativePath: { eq: "someofus/new-images/etimologo.png" }) {
				childImageSharp {
					gatsbyImageData(layout: CONSTRAINED, width: 500, quality: 90)
				}
			}
			johan: file(relativePath: { eq: "someofus/new-images/johan2.jpg" }) {
				childImageSharp {
					gatsbyImageData(layout: CONSTRAINED, width: 500, quality: 90)
				}
			}
			andre: file(relativePath: { eq: "someofus/new-images/andre.jpg" }) {
				childImageSharp {
					gatsbyImageData(layout: CONSTRAINED, width: 500, quality: 90)
				}
			}
			klara: file(relativePath: { eq: "someofus/new-images/klara.jpg" }) {
				childImageSharp {
					gatsbyImageData(layout: CONSTRAINED, width: 500, quality: 90)
				}
			}
			colan: file(relativePath: { eq: "someofus/new-images/colan.jpg" }) {
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
		lukas: data.lukas.childImageSharp.gatsbyImageData,
		rickard: data.rickard.childImageSharp.gatsbyImageData,
		saga: data.saga.childImageSharp.gatsbyImageData,
		joakim: data.joakim.childImageSharp.gatsbyImageData,
		erik: data.erik.childImageSharp.gatsbyImageData,
		axel: data.axel.childImageSharp.gatsbyImageData,
		daniel: data.daniel.childImageSharp.gatsbyImageData,
		philip: data.philip.childImageSharp.gatsbyImageData,
		morgan: data.morgan.childImageSharp.gatsbyImageData,
		etimo: data.etimo.childImageSharp.gatsbyImageData,
		johan: data.johan.childImageSharp.gatsbyImageData,
		andre: data.andre.childImageSharp.gatsbyImageData,
		klara: data.klara.childImageSharp.gatsbyImageData,
		colan: data.colan.childImageSharp.gatsbyImageData,
	};
};

export default useProfileImages;
