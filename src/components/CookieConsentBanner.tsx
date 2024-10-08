import React from 'react';
import { useTheme } from 'styled-components';
import '../css/global.css';
import { Caption, P } from '../elements';
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
			style={{ background: theme.primary, alignItems: 'center' }}
			buttonStyle={{
				background: theme.secondary,
				fontSize: '0.875rem',
			}}
			declineButtonStyle={{
				background: theme.primary,
				fontSize: '0.875rem',
				border: '1px solid black',
			}}
			onAccept={() => initializeAndTrack(location)}
		>
			<div className="min-h-16">
				<Caption>Cookies</Caption>
				<p className="text-white text-sm">
					Vi använder cookies för att analysera användarbeteenden och förbättra
					din upplevelse på vår hemsida.
				</p>
			</div>
		</CookieConsent>
	);
};
