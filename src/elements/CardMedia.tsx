import Img, { FixedObject, FluidObject } from 'gatsby-image';
import React from 'react';
import { Fade } from 'react-reveal';

type Props = {
	duration?: number;
	fade?: boolean;
	fluid?: FluidObject | FluidObject[];
	fixed?: FixedObject | FixedObject[];
};

const CardMedia = ({ duration, fade, fluid, fixed }: Props) => {
	if (fade) {
		return (
			<Fade duration={duration}>
				<Img fluid={fluid} fixed={fixed} />
			</Fade>
		);
	}

	return <Img fluid={fluid} fixed={fixed} />;
};

export default CardMedia;
