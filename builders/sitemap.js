import Routes from "../src/routes";
const Generator = require('react-router-sitemap-generator').default;

try {
    const generator = new Generator(
        'https://rikthepixel.github.io/#/',
        Routes(),
        {
            lastmod: new Date().toISOString().slice(0, 10),
            changefreq: 'monthly',
            
        }
    );
    generator.save('dist/sitemap.xml');
    console.log("Sitemap succesfully generated");
} catch (err) {
    console.log("Failed to generate sitemap", err);
}