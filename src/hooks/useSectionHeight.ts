import useViewportSize from './useViewportSize';
import { sizes } from '../helpers';
import { useMemo } from 'react';
import useIsMobile from './useIsMobile';

function useSectionHeight(hasHeaderSpace?: boolean, minimumHeight?: number) {
	const isMobile = useIsMobile();
	const [height, width] = useViewportSize();

	const getHeight = () => {
		// Don't set a height if it's a mobile phone
		// since we don't use a left menu on mobile.
		if (isMobile) {
			return undefined;
		}
		if (height < (minimumHeight ?? sizes().minimumHeight)) {
			return (
				(minimumHeight ?? sizes().minimumHeight) -
				(hasHeaderSpace ? sizes().headerHeight : 0)
			);
		}
		return hasHeaderSpace ? height - sizes().headerHeight : height;
	};

	const sectionHeight = useMemo(() => getHeight(), [height, hasHeaderSpace]);

	return sectionHeight;
}

export default useSectionHeight;
