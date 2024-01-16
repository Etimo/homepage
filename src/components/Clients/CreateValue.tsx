import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
import React from 'react';
import { FloatInDir, FloatUp } from '../../animations';
import { AnimatedH2, Caption, H4, Span } from '../../elements';
import Section from '../Section';
import DashedP from '../DashedP';

const CreateValue = () => {
	return (
		<Section>
			<div className="flex container flex-col px-8 xl:px-32 text-center overflow-hidden">
				<FloatUp>
					<Caption>Värde för kund</Caption>
				</FloatUp>
				<div className="flex justify-center">
					<AnimatedH2 direction="left">Vi skapar&nbsp;</AnimatedH2>
					<AnimatedH2 direction="right">
						<Span>värde</Span>
					</AnimatedH2>
				</div>
				<div className="flex flex-col lg:flex-row mt-6 lg:mt-10 mx-auto lg:mx-0 lg:w-full">
					<div className="lg:w-1/3">
						<FloatInDir direction="right">
							<SupervisorAccountIcon
								className="text-cyan mb-2"
								fontSize="large"
							/>
							<H4>Våra tjänster ...</H4>
							<div className="text-left mt-2 inline-block">
								<DashedP>Systemarkitektur</DashedP>
								<DashedP>Skräddarsydd systemutveckling</DashedP>
								<DashedP>Innovation as a Service</DashedP>
							</div>
						</FloatInDir>
					</div>
					<div className="lg:w-1/3 mt-6 lg:mt-auto overflow-hidden">
						<FloatUp>
							<H4>... resulterar i ...</H4>
							<div className="text-left mt-2 inline-block">
								<DashedP>Digitala webb- och molnlösningar</DashedP>
								<DashedP>Automation av manuella processer</DashedP>
								<DashedP>Automatiserat affärs- och beslutsstöd</DashedP>
							</div>
						</FloatUp>
					</div>
					<div className="lg:w-1/3 mt-6 lg:mt-0">
						<FloatInDir direction="left">
							<ThumbUpOutlinedIcon
								className="text-cyan mb-2"
								fontSize="large"
							/>
							<H4>... ökat kundvärde</H4>
							<div className="text-left mt-2 inline-block">
								<DashedP>Ökad användarnytta</DashedP>
								<DashedP>Ökad tillväxt</DashedP>
								<DashedP>Ökad effektivitet</DashedP>
							</div>
						</FloatInDir>
					</div>
				</div>
			</div>
		</Section>
	);
};

export default CreateValue;
