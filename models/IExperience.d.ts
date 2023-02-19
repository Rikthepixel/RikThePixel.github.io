interface IExperience {
    title: string,
    logo: {
        src: string;
        width: number;
        height: number;
    },
    position: string,
    place: {
        name: string,
        link: string;
    },
    timespan: {
        start: string,
        end: string;
    };
}

export default IExperience