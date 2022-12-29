import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
    return (
        <Html>
            <Head>
                <link rel="stylesheet" href="https://sibforms.com/forms/end-form/build/sib-styles.css" />
            </Head>
            <body>
                <Main />
                <NextScript />
                <Script>
                    window.EMAIL_INVALID_MESSAGE = window.SMS_INVALID_MESSAGE = "The information provided is invalid. Please review the field format and try again.";
                    window.REQUIRED_ERROR_MESSAGE = "This field cannot be left blank. ";
                    window.GENERIC_INVALID_MESSAGE = "The information provided is invalid. Please review the field format and try again.";

                    var AUTOHIDE = Boolean(0);
                </Script>
                <Script defer src="https://sibforms.com/forms/end-form/build/main.js" />
            </body>
        </Html>
    )
}