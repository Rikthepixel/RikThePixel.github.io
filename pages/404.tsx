import Head from "next/head";
import HomeModernIcon from "@heroicons/react/24/solid/HomeModernIcon";

import LinkButton from "components/controls/LinkButton";
import { NextSeo } from "next-seo";

const About = ({}) => {
  return (
    <>
      <NextSeo title="Rik den Breejen | 404" />
      <div className="flex justify-center items-center w-full h-full">
        <div className="flex flex-col items-center text-center gap-4">
          <h1 id="page-header" className="text-6xl">
            404 Page Not Found
          </h1>
          <p className="text-primary-900 text-4xl font-medium">
            There is nothing here... yet
          </p>
          <div>
            <LinkButton href="/" className="flex items-center gap-2">
              <HomeModernIcon className="w-5 h-5" />
              Go Back Home
            </LinkButton>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
