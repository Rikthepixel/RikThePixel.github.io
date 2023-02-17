// @ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
    distDir: "node_modules/.next",
    reactStrictMode: true,
    poweredByHeader: false,
    images: {
        dangerouslyAllowSVG: true,
        contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;"
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            use: [{
                loader: '@svgr/webpack'
            }],

        });

        return config;
    },
};

module.exports = nextConfig;