import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
import React from 'react';
import { Caption, DashedP, H2, H4, Span } from '../../elements';
import Section from '../Section';

const CreateValue = () => {
	return (
		<Section style={{ background: 'white' }}>
			<div className="flex container flex-col px-8 xl:px-32 text-center overflow-hidden">
				<Caption>Våra tjänster</Caption>
				<H2>
					Vi skapar <Span secondary>värde</Span>
				</H2>
				<div className="flex flex-col lg:flex-row mt-6 md:w-3/4 md:mx-auto lg:mx-0 lg:w-full">
					<div className="md:w-fc lg:w-1/3">
						<SupervisorAccountIcon
							className="text-cyan mb-2"
							fontSize="large"
						/>
						<H4>Våra tjänster ...</H4>
						<div className="text-left mt-2 mx-auto w-fc">
							<DashedP>Innovation as a Service</DashedP>
							<DashedP>Systemarkitektur</DashedP>
							<DashedP>Skräddarsydd systemutveckling</DashedP>
						</div>
					</div>
					<div className="lg:w-1/3 mt-6 lg:mt-auto">
						<H4>... resulterar i ...</H4>
						<div className="text-left mt-2 mx-auto w-fc">
							<DashedP>Digitala webb- och molnlösningar</DashedP>
							<DashedP>Automation av manuella processer</DashedP>
							<DashedP>Automatiserat affärs- och beslutsstöd</DashedP>
						</div>
					</div>
					<div className="md:w-fc md:self-end lg:w-1/3 mt-6 lg:mt-0">
						<ThumbUpOutlinedIcon className="text-cyan mb-2" fontSize="large" />
						<H4>... ökat kundvärde</H4>
						<div className="text-left mt-2 mx-auto w-fc">
							<DashedP>Ökad användarnytta</DashedP>
							<DashedP>Ökad tillväxt</DashedP>
							<DashedP>Ökad effektivitet</DashedP>
						</div>
					</div>
				</div>
			</div>
		</Section>
	);
};

export default CreateValue;
