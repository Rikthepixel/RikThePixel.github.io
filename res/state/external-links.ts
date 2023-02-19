import IExternalLink from "models/IExternalLink";

import GithubIcon from "res/images/icons/Github.svg";
import LinkedInIcon from "res/images/icons/LinkedIn.svg";
import YoutubeIcon from "res/images/icons/Youtube.svg";

export default [
    {
        name: "Github",
        icon: GithubIcon,
        link: "github.com/Rikthepixel"
    },
    {
        name: "LinkedIn",
        icon: LinkedInIcon,
        link: "linkedin.com/in/rik-den-breejen-a84aa71a7/"
    },
    {
        name: "Youtube",
        icon: YoutubeIcon,
        link: "youtube.com/@rikthepixel"
    }
]satisfies IExternalLink[];