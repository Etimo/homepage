import React, { useRef, useEffect, useState } from 'react';
import { FadeIn, FloatUp } from '../animations';
import { AnimatedH2, Caption, H3, P, Span } from '../elements';
import { HighlightButton } from './Button';
import Section from './Section';
import styled from 'styled-components';
import tw from 'twin.macro';

const VideoWrapper = styled.div`
	${tw`relative w-full max-w-md mx-auto mt-8 overflow-hidden`}
	aspect-ratio: 1 / 1;
`;

type AIExpertiseProps = {
	sectionHeight: number;
};

const AIExpertise = ({ sectionHeight }: AIExpertiseProps) => {
	const videoRef = useRef<HTMLVideoElement>(null);
	const [hasStartedVideo, setHasStartedVideo] = useState(false);
	const [showControls, setShowControls] = useState(false);
	const touchTimeoutRef = useRef<NodeJS.Timeout | null>(null);

	useEffect(() => {
		const video = videoRef.current;
		if (!video) return;

		// Create an IntersectionObserver to detect when the video becomes visible
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					// When the video becomes visible and we haven't already started it
					if (entry.isIntersecting && !hasStartedVideo) {
						setHasStartedVideo(true);
						// Start the video after 1 second
						setTimeout(() => {
							// Ensure video is loaded before trying to play
							if (video.readyState >= 2) { // HAVE_CURRENT_DATA or higher
								video.play().catch((error) => {
									console.log('Video autoplay prevented:', error);
									// Show controls if autoplay fails
									setShowControls(true);
								});
							} else {
								// If not ready, wait for it to be ready
								video.addEventListener('canplay', () => {
									video.play().catch((error) => {
										console.log('Video autoplay prevented:', error);
										// Show controls if autoplay fails
										setShowControls(true);
									});
								}, { once: true });
							}
						}, 1000);
					}
				});
			},
			{
				threshold: 1.0 // Start only when 100% of the video is visible
			}
		);

		observer.observe(video);

		// Cleanup
		return () => {
			observer.disconnect();
		};
	}, [hasStartedVideo]);

	// Cleanup touch timeout on unmount
	useEffect(() => {
		return () => {
			if (touchTimeoutRef.current) {
				clearTimeout(touchTimeoutRef.current);
			}
		};
	}, []);

	const handleTouch = () => {
		// Show controls on touch
		setShowControls(true);
		
		// Clear any existing timeout
		if (touchTimeoutRef.current) {
			clearTimeout(touchTimeoutRef.current);
		}
		
		// Hide controls after 3 seconds
		touchTimeoutRef.current = setTimeout(() => {
			setShowControls(false);
		}, 3000);
	};

	return (
		<Section sectionHeight={sectionHeight} style={{ backgroundColor: 'white' }}>
			<div className="flex container flex-col px-8 lg:px-32 text-center">
				<FloatUp>
					<Caption>AI-rådgivning</Caption>
				</FloatUp>
				<div className="flex flex-col justify-center w-11/12 md:w-3/4 mx-auto">
					<AnimatedH2 direction="left">
						Framtidens <Span>AI-lösningar</Span> för er verksamhet
					</AnimatedH2>
				</div>

				<VideoWrapper>
					<video
						ref={videoRef}
						width="100%"
						height="100%"
						controls={showControls}
						muted={true}
						playsInline={true}
						autoPlay={false} // We control autoplay via IntersectionObserver
						preload="auto"
						onMouseEnter={() => setShowControls(true)}
						onMouseLeave={() => setShowControls(false)}
						onTouchStart={handleTouch}
						style={{ 
							borderRadius: '8px', 
							boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
							objectFit: 'cover',
							overflow: 'hidden',
							display: 'block',
							backgroundColor: '#f5f5f5' // Light gray instead of black
						}}
					>
						<source src="/videos/ai.mp4" type="video/mp4" />
						Din webbläsare stöder inte videouppspelning.
					</video>
				</VideoWrapper>

				<div className="w-11/12 md:w-3/4 mx-auto text-center mt-12 lg:mt-12">
					<FadeIn direction="right">
						<P>
							I en tid av snabb AI-utveckling hjälper vi er att navigera och 
							dra nytta av artificiell intelligens på bästa sätt. 
							Våra erfarna AI-experter fokuserar på verklig affärsnytta istället för hype.
						</P>
						<P className="mt-4">
							Vår mest seniora AI-expert började med AI redan år 2006 och vi kan stödja
                            er oavsett om ni är nybörjare eller erfarna. Vi erbjuder 
							rådgivningssamtal, skräddarsydda föreläsningar, Q&A-sessioner och utvecklare.
                            Vi kan hjälpa er komma igång, eller vara en långsiktig partner.
						</P>
					</FadeIn>

					<div className="flex justify-center mx-auto mt-8">
						<a 
							href="mailto:ai@etimo.se?subject=AI-rådgivning" 
							style={{ textDecoration: 'none', cursor: 'pointer' }}
						>
							<HighlightButton>
								<P>Kontakta oss för AI-rådgivning</P>
							</HighlightButton>
						</a>
					</div>
				</div>
			</div>
		</Section>
	);
};

export default AIExpertise;