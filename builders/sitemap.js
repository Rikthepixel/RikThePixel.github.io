import Routes from "../src/routes";
const Generator = require('react-router-sitemap-generator').default;

const generator = new Generator(
    'https://rikthepixel.github.io/#',
    Routes(),
    {
        lastmod: new Date().toISOString().slice(0, 10),
        changefreq: 'monthly',
    }
);
generator.save('public/sitemap.xml');