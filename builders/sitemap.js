import GenerateSitemap, { ParseRoutes } from "react-router-sitemap-maker";
import Routes from "../src/routes";

try {
    await GenerateSitemap(
        Routes(),
        {
            baseUrl: "https://www.rikdenbreejen.nl",
            hashrouting: true,
            changeFrequency: "monthly"
        }
    ).toFile("./dist/sitemap.xml");

    console.log("Sitemap succesfully generated");
} catch (err) {
    console.log("Failed to generate sitemap", err);
}