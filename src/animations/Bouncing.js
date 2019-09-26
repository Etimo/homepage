import React from "react";
import propTypes from "prop-types";
import posed from "react-pose";

const BouncingAnimation = ({ children, height, stiffness, ...props }) => {
  const Bounce = posed.div({
    to: {},
    attention: {
      y: height,
      transition: {
        type: "spring",
        stiffness,
        damping: 0
      }
    }
  });

  return (
    <Bounce initialPose="to" pose="attention">
      {children}
    </Bounce>
  );
};

BouncingAnimation.defaultProps = {
  height: 2,
  stiffness: 200
};

BouncingAnimation.propTypes = {
  children: propTypes.element.isRequired,
  height: propTypes.number,
  stiffness: propTypes.number
};

export default BouncingAnimation;
