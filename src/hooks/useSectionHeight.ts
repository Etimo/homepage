import useViewportSize from './useViewportSize';
import { sizes } from '../helpers';
import { useMemo } from 'react';

function useSectionHeight(hasHeaderSpace?: boolean) {
	const isMobile = () => width < sizes().laptop;
	const [height, width] = useViewportSize();

	const getHeight = () => {
		// Don't set a height if it's a mobile phone
		// since we don't use a left menu on mobile.
		if (isMobile()) {
			return undefined;
		}
		if (height < sizes().minimumHeight) {
			return (
				sizes().minimumHeight - (hasHeaderSpace ? sizes().headerHeight : 0)
			);
		}
		return hasHeaderSpace ? height - sizes().headerHeight : height;
	};

	const sectionHeight = useMemo(() => getHeight(), [height, hasHeaderSpace]);

	return sectionHeight;
}

export default useSectionHeight;
