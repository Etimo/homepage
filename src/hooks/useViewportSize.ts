import { useState, useEffect } from 'react';

function useViewportSize() {
	const [height, setHeight] = useState(5000);
	const [width, setWidth] = useState(5000);	

	const handleResize = () => {
		setHeight(window.innerHeight);
		setWidth(window.innerWidth);
	};

	useEffect(() => {
		handleResize();
		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return [height, width];
}

export default useViewportSize;
