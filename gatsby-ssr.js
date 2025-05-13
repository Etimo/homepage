import React from 'react';

export const onRenderBody = ({ setHeadComponents }) => {
	setHeadComponents([
		<link
			rel="preconnect"
			href="https://fonts.googleapis.com"
			key="preconnect-googleapis"
		/>,
		<link
			rel="preconnect"
			href="https://fonts.gstatic.com"
			crossOrigin="anonymous"
			key="preconnect-gstatic"
		/>,
		<link
			href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&family=Questrial&display=swap"
			rel="stylesheet"
			key="google-font"
		/>,
	]);
};
