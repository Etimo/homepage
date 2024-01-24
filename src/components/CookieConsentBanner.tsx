import React from 'react';
import { useTheme } from 'styled-components';
import '../css/global.css';
import { Caption } from '../elements';
import { useLocation } from '@reach/router';
import { initializeAndTrack } from 'gatsby-plugin-gdpr-cookies';
import CookieConsent from 'react-cookie-consent';

export const CookieConsentBanner = () => {
	const location = useLocation();
	const theme = useTheme();
	return (
		<CookieConsent
			location="bottom"
			buttonText="Acceptera cookies"
			declineButtonText="Avböj cookies"
			enableDeclineButton
			cookieName="gatsby-gdpr-google-analytics"
			style={{ background: theme.primary }}
			buttonStyle={{ background: theme.secondary, fontSize: '13px' }}
			declineButtonStyle={{
				background: theme.primary,
				fontSize: '13px',
				border: '1px solid black',
			}}
			onAccept={() => initializeAndTrack(location)}
		>
			<div className="h-16">
				<Caption>Cookies</Caption>
				<p>
					Vi använder cookies för att kunna analysera användarbeteenden, så att
					vi kan ge dig en så positiv upplevelse som möjligt av vår hemsida.
				</p>
			</div>
		</CookieConsent>
	);
};
