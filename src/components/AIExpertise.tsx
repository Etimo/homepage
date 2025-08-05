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
	const [showControls, setShowControls] = useState(false);
	const touchTimeoutRef = useRef<NodeJS.Timeout | null>(null);
	
	// Video playback delay configuration (in milliseconds)
	const VIDEO_START_DELAY = 1000; // 1 second
	const [hasBeenVisible, setHasBeenVisible] = useState(false);

	// Detect when video becomes visible
	useEffect(() => {
		const video = videoRef.current;
		if (!video) return;

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting && !hasBeenVisible) {
						setHasBeenVisible(true);
					}
				});
			},
			{
				threshold: 1 // Trigger when 100% of video is visible
			}
		);

		observer.observe(video);

		return () => {
			observer.disconnect();
		};
	}, [hasBeenVisible]);

	// Start video after delay once it becomes visible
	useEffect(() => {
		if (!hasBeenVisible) return;
		
		const video = videoRef.current;
		if (!video) return;

		// Start playing after configured delay
		const playTimeout = setTimeout(() => {
			video.play().catch((error) => {
				console.log('Video autoplay prevented:', error);
				// Show controls if autoplay fails
				setShowControls(true);
			});
		}, VIDEO_START_DELAY);

		// Show controls 2 seconds after expected start if video hasn't started
		const checkAutoplay = setTimeout(() => {
			if (video.paused) {
				setShowControls(true);
			}
		}, VIDEO_START_DELAY + 2000);

		return () => {
			clearTimeout(playTimeout);
			clearTimeout(checkAutoplay);
		};
	}, [hasBeenVisible]);

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
						autoPlay={false} // Manual control - plays after some time
						loop={false}
						preload="auto"
						disablePictureInPicture={true} // Prevent PiP mode
						onEnded={() => {
							// Reset to first frame when video ends
							if (videoRef.current) {
								videoRef.current.currentTime = 0;
							}
						}}
						onMouseEnter={() => setShowControls(true)}
						onMouseLeave={() => setShowControls(false)}
						onTouchStart={handleTouch}
						style={{ 
							borderRadius: '8px', 
							boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
							objectFit: 'cover',
							overflow: 'hidden',
							display: 'block'
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