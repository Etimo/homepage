import { graphql, useStaticQuery } from 'gatsby';

export const useProfileImages = () => {
	const data = useStaticQuery(graphql`
		query {
			henrik: file(relativePath: { eq: "someofus/new-images/henrik.jpg" }) {
				childImageSharp {
					fluid(maxWidth: 500) {
						...GatsbyImageSharpFluid
					}
				}
			}
			bjorn: file(relativePath: { eq: "someofus/new-images/bjorn.png" }) {
				childImageSharp {
					fluid(maxWidth: 500) {
						...GatsbyImageSharpFluid
					}
				}
			}
			alfred: file(relativePath: { eq: "someofus/new-images/affe.jpg" }) {
				childImageSharp {
					fluid(maxWidth: 500) {
						...GatsbyImageSharpFluid
					}
				}
			}
			malinw: file(relativePath: { eq: "someofus/new-images/malinw.jpg" }) {
				childImageSharp {
					fluid(maxWidth: 500) {
						...GatsbyImageSharpFluid
					}
				}
			}
			jeanette: file(
				relativePath: { eq: "someofus/new-images/jeanette2.jpg" }
			) {
				childImageSharp {
					fluid(maxWidth: 500) {
						...GatsbyImageSharpFluid
					}
				}
			}
			lukas: file(relativePath: { eq: "someofus/new-images/lukas.png" }) {
				childImageSharp {
					fluid(maxWidth: 500) {
						...GatsbyImageSharpFluid
					}
				}
			}
			rickard: file(relativePath: { eq: "someofus/new-images/rickard.jpg" }) {
				childImageSharp {
					fluid(maxWidth: 500) {
						...GatsbyImageSharpFluid
					}
				}
			}
			saga: file(relativePath: { eq: "someofus/new-images/saga.png" }) {
				childImageSharp {
					fluid(maxWidth: 500) {
						...GatsbyImageSharpFluid
					}
				}
			}
			joakim: file(relativePath: { eq: "someofus/new-images/joakim.png" }) {
				childImageSharp {
					fluid(maxWidth: 500) {
						...GatsbyImageSharpFluid
					}
				}
			}
			erik: file(relativePath: { eq: "someofus/new-images/erik.jpg" }) {
				childImageSharp {
					fluid(maxWidth: 500) {
						...GatsbyImageSharpFluid
					}
				}
			}
			axel: file(relativePath: { eq: "someofus/new-images/elmarsson.jpg" }) {
				childImageSharp {
					fluid(maxWidth: 500) {
						...GatsbyImageSharpFluid
					}
				}
			}
			daniel: file(relativePath: { eq: "someofus/new-images/danielw.jpg" }) {
				childImageSharp {
					fluid(maxWidth: 500) {
						...GatsbyImageSharpFluid
					}
				}
			}
			philip: file(relativePath: { eq: "someofus/new-images/phille.jpg" }) {
				childImageSharp {
					fluid(maxWidth: 500) {
						...GatsbyImageSharpFluid
					}
				}
			}
			morgan: file(relativePath: { eq: "someofus/new-images/morgan.jpg" }) {
				childImageSharp {
					fluid(maxWidth: 500) {
						...GatsbyImageSharpFluid
					}
				}
			}
			etimo: file(relativePath: { eq: "someofus/new-images/etimologo.png" }) {
				childImageSharp {
					fluid(maxWidth: 500) {
						...GatsbyImageSharpFluid
					}
				}
			}
			niclas: file(relativePath: { eq: "someofus/new-images/niclas.jpg" }) {
				childImageSharp {
					fluid(maxWidth: 500) {
						...GatsbyImageSharpFluid
					}
				}
			}
			johan: file(relativePath: { eq: "someofus/new-images/johan2.jpg" }) {
				childImageSharp {
					fluid(maxWidth: 500) {
						...GatsbyImageSharpFluid
					}
				}
			}
			lilleman: file(relativePath: { eq: "someofus/new-images/lilleman.jpg" }) {
				childImageSharp {
					fluid(maxWidth: 500) {
						...GatsbyImageSharpFluid
					}
				}
			}
			andre: file(relativePath: { eq: "someofus/new-images/andre.jpg" }) {
				childImageSharp {
					fluid(maxWidth: 500) {
						...GatsbyImageSharpFluid
					}
				}
			}
			jassyr: file(relativePath: { eq: "someofus/new-images/jassyr.jpg" }) {
				childImageSharp {
					fluid(maxWidth: 500) {
						...GatsbyImageSharpFluid
					}
				}
			}
			klara: file(relativePath: { eq: "someofus/new-images/klara.jpg" }) {
				childImageSharp {
					fluid(maxWidth: 500) {
						...GatsbyImageSharpFluid
					}
				}
			}
			colan: file(relativePath: { eq: "someofus/new-images/colan.jpg" }) {
				childImageSharp {
					fluid(maxWidth: 500) {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	`);

	return {
		henrik: data.henrik.childImageSharp.fluid,
		bjorn: data.bjorn.childImageSharp.fluid,
		alfred: data.alfred.childImageSharp.fluid,
		malinw: data.malinw.childImageSharp.fluid,
		jeanette: data.jeanette.childImageSharp.fluid,
		lukas: data.lukas.childImageSharp.fluid,
		rickard: data.rickard.childImageSharp.fluid,
		saga: data.saga.childImageSharp.fluid,
		joakim: data.joakim.childImageSharp.fluid,
		erik: data.erik.childImageSharp.fluid,
		axel: data.axel.childImageSharp.fluid,
		daniel: data.daniel.childImageSharp.fluid,
		philip: data.philip.childImageSharp.fluid,
		morgan: data.morgan.childImageSharp.fluid,
		etimo: data.etimo.childImageSharp.fluid,
		niclas: data.niclas.childImageSharp.fluid,
		johan: data.johan.childImageSharp.fluid,
		lilleman: data.lilleman.childImageSharp.fluid,
		andre: data.andre.childImageSharp.fluid,
		jassyr: data.jassyr.childImageSharp.fluid,
		klara: data.klara.childImageSharp.fluid,
		colan: data.colan.childImageSharp.fluid,
	};
};

export default useProfileImages;
