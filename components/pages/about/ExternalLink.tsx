import IExternalLink from "models/IExternalLink";
import Link from "next/link";

interface ExternalLinkProps extends IExternalLink {

}

const ExternalLink = ({ name, icon: Icon, link }: ExternalLinkProps) => {
    return (
        <Link href={link} className="group/link flex items-center rounded-full" aria-label={name}>
            <Icon
                className="text-primary-900 w-12 aspect-square transition-colors group-hover/link:text-primary-700"
            />
            <span className="text-xl font-medium underline transition-colors px-4 group-hover/link:text-neutral-400">
                {name}
            </span>
        </Link>
    );
};

export default ExternalLink;