import { useEffect, useState } from 'react';

function useViewportSize() {
	const [height, setHeight] = useState(window.innerHeight);
	const [width, setWidth] = useState(window.innerWidth);

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
