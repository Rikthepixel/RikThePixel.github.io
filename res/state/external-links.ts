import IExternalLink from "models/IExternalLink";

import GithubIcon from "res/images/icons/Github.svg";
import LinkedInIcon from "res/images/icons/LinkedIn.svg";
import YoutubeIcon from "res/images/icons/Youtube.svg";

export default [
    {
        name: "Github",
        icon: GithubIcon,
        link: "https://github.com/Rikthepixel"
    },
    {
        name: "LinkedIn",
        icon: LinkedInIcon,
        link: "https://linkedin.com/in/rik-den-breejen-a84aa71a7/"
    },
    {
        name: "Youtube",
        icon: YoutubeIcon,
        link: "https://youtube.com/@rikthepixel"
    }
]satisfies IExternalLink[];