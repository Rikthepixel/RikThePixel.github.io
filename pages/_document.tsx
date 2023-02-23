import { Html, Head, Main, NextScript } from "next/document";

const Document = () => {
    return (
        <Html className="bg-primary-100 text-primary-contrast" lang="en">
            <Head>
                <meta property="og:title" content="Rik den Breejen | Portfolio" />

                {/* <meta property="og:image" content="website_image.jpg" />
                <meta property="twitter:image" content="website_image.jpg" /> */}

                <meta property="og:type" content="portfolio" />

                <meta name="description" content="Hello, my name is Rik den Breejen. I'm a Software engineering student at Fontys." />
                <meta property="og:description" content="Hello, my name is Rik den Breejen. I'm a Software engineering student at Fontys." />

                <meta name="author" content="Rik den Breejen" />
                <meta property="profile:first_name" content="Rik" />
                <meta property="profile:last_name" content="den Breejen" />
                <meta property="profile:username" content="RikThePixel" />
                <meta property="profile:gender" content="male" />

                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="manifest" href="/webmanifest.json" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
};

export default Document;