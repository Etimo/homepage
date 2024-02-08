import useViewportSize from './useViewportSize';
import { sizes } from '../helpers';
import { useMemo } from 'react';

function useIsMobile() {
	const [height, width] = useViewportSize();

	const isMobile = useMemo(() => width < sizes().laptop, [width]);

	return isMobile;
}

export default useIsMobile;
