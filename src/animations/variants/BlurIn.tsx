export default () => {
	return {
		init: {
			opacity: 0,
			scale: 1.2,
			y: '25%',
			filter: 'blur(5px)',
		},
		anim: {
			opacity: 1,
			scale: 1,
			y: 0,
			filter: 'blur(0px)',
			transition: {
				duration: 0.8,
				ease: 'easeOut',
				type: 'tween',
			},
		},
	};
};
