import React from "react";
import propTypes from "prop-types";
import Img from "gatsby-image";
import { Fade } from "react-reveal";
import Card from "./Card";

// We pass classname to allow this component to be styled by styled-components.
const CardImg = ({ className, fluid, fixed, duration, fade, ...props }) => {
  if (fade) {
    return (
      <Fade className={className} duration={duration}>
        <Card>
          <Img fluid={fluid} fixed={fixed} />
        </Card>
      </Fade>
    );
  } else {
    return (
      <Card className={className}>
        <Img fluid={fluid} fixed={fixed} />
      </Card>
    );
  }
};

const requiredPropsCheck = (props, propName, componentName) => {
  if (!props.fluid && !props.fixed) {
    return new Error(
      `One of 'fixed' or 'fluid' is required by '${componentName}' component.`
    );
  }
};

CardImg.propTypes = {
  fixed: requiredPropsCheck,
  fluid: requiredPropsCheck,
  duration: propTypes.number,
  fade: propTypes.bool
};

export default CardImg;
