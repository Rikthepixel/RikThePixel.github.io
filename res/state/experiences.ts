import IExperience from "models/IExperience";

import TinyTronicsLogo from "res/images/logos/tinytronics.webp";
import SquadraMlcLogo from "res/images/logos/squadra-mlc.webp";
import FontysLogo from "res/images/logos/fontys.webp";

export default [
  {
    title: "Software engineer",
    logo: TinyTronicsLogo,
    position: "Fulltime",
    place: {
      name: "TinyTronics B.V.",
      link: "https://www.tinytronics.nl/shop/en/about-us/",
    },
    timespan: {
      start: "Sept. 2024",
      end: "Present",
    },
  },
  {
    title: "Intern Software engineer",
    logo: SquadraMlcLogo,
    position: "Fulltime Intern",
    place: {
      name: "Squadra Machine Learning Company",
      link: "https://machine-learning-company.nl/",
    },
    timespan: {
      start: "Aug. 2022",
      end: "Jan. 2023",
    },
  },
  {
    title: "Software engineer",
    logo: TinyTronicsLogo,
    position: "Parttime",
    place: {
      name: "TinyTronics B.V.",
      link: "https://www.tinytronics.nl/shop/en/about-us/",
    },
    timespan: {
      start: "Jun. 2022",
      end: "Sept. 2024",
    },
  },
  {
    title: "Software engineering Student",
    logo: FontysLogo,
    position: "Student",
    place: {
      name: "Fontys University of Applied Sciences",
      link: "https://fontys.edu/",
    },
    timespan: {
      start: "2020",
      end: "2024",
    },
  },
] satisfies IExperience[];

