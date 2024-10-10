import React, { useState, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import styled from 'styled-components';
import tw from 'twin.macro';
import { useInterval } from '../hooks';
import { flushSync } from 'react-dom';

const items = [
	{
		text: 'Etimo hjälpte oss med att ta fram strategier för att dela information mellan våra produkter med syfte att öka intern effektivitet. De skapade även en arkitekturell strategi för att stötta nästa generation av digitala tjänster parallellt med att driva rekryteringen av den engineering manager som nu driver moderniseringen mot mål.',
		name: 'Emma Rudenstam',
		company: 'Causey & Westling',
		role: 'Vice VD & Partner',
	},
	{
		text: 'En transmodulär plattform för att optimera synergier mellan våra flödesbaserade processer sattes upp av Etimo. De designade även en hyperkonvergerad infrastruktur för att möjliggöra dynamisk skalbarhet i vårt ekosystem',
		name: 'Jane Doe',
		company: 'Anonymous',
		role: 'PO',
	},
	{
		text: 'Etimo byggde en mikrotjänstarkitektur som effektivt hanterar våra datadrivna applikationer. De introducerade en CI/CD-pipeline för att optimera våra release-cykler och implementerade containerbaserade lösningar för att möjliggöra sömlös skalbarhet.',
		name: 'John Doe',
		company: 'Company Name',
		role: 'Project Manager',
	},
];

const createVariants = (direction: 'left' | 'right') => ({
	initial: {
		x: direction === 'left' ? 200 : -200,
		opacity: 0,
		zIndex: 0,
	},
	active: {
		x: 0,
		opacity: 1,
		zIndex: 1,
	},
	exit: {
		x: direction === 'left' ? -200 : 200,
		opacity: 0,
		zIndex: 0,
		duration: 0.5,
	},
});

const TestimonialItem = styled(motion.div)`
	${tw`font-mont text-lg p-4 mx-auto h-full m-10`}
`;

const TestimonialsContainer = styled.div`
	${tw`w-full max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto text-center`}
`;

const TestimonialDetails = styled.div`
	${tw`mt-4 text-sm text-gray-600`}
`;

const Testimonials = () => {
	const [item, setItem] = useState(0);
	const [swipeDirection, setSwipeDirection] = useState<'left' | 'right'>(
		'left'
	);
	const startX = useRef(0);
	const endX = useRef(0);

	useInterval(() => {
		setSwipeDirection('left');
		setItem((item + 1) % items.length);
	}, 12000);

	const handleTouchStart = (e: React.TouchEvent) =>
		(startX.current = e.touches[0].clientX);

	const handleTouchMove = (e: React.TouchEvent) =>
		(endX.current = e.touches[0].clientX);

	const handleTouchEnd = () => {
		const swipeDistance = startX.current - endX.current;

		if (swipeDistance > 50) {
			flushSync(() => setSwipeDirection('left'));
			setItem((previtem) => (previtem + 1) % items.length);
		} else if (swipeDistance < -50) {
			flushSync(() => setSwipeDirection('right'));
			setItem((previtem) => (previtem - 1 + items.length) % items.length);
		}
	};

	return (
		<TestimonialsContainer
			onTouchStart={handleTouchStart}
			onTouchMove={handleTouchMove}
			onTouchEnd={handleTouchEnd}
		>
			<AnimatePresence mode="wait" initial={false}>
				<TestimonialItem
					key={item}
					variants={createVariants(swipeDirection)}
					initial="initial"
					animate="active"
					exit="exit"
				>
					<p className="italic">"{items[item].text}"</p>

					<TestimonialDetails>
						<p>
							{items[item].name} - {items[item].role}
						</p>
						<strong>
							<p>{items[item].company}</p>
						</strong>
					</TestimonialDetails>
				</TestimonialItem>
			</AnimatePresence>

			<div className="flex justify-center mt-4 space-x-2">
				{items.map((_, index) => (
					<div
						key={index}
						className={`w-3 h-3 rounded-full cursor-pointer ${
							index === item ? 'bg-cyan' : 'bg-gray-400'
						}`}
						onClick={() => {
							setSwipeDirection(index > item ? 'left' : 'right');
							setTimeout(() => {
								setItem(index);
							}, 0);
						}}
					></div>
				))}
			</div>
		</TestimonialsContainer>
	);
};

export default Testimonials;
