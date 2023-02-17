const plugin = require("tailwindcss/plugin");

const flattenColorPalette = (colors) =>
    Object.assign({}, ...Object.entries(colors ?? {}).flatMap(([color, values]) => (
        typeof values == 'object'
            ? Object
                .entries(flattenColorPalette(values))
                .map(([number, hex]) => ({ [color + (number === 'DEFAULT' ? '' : `-${number}`)]: hex }))
            : [{ [`${color}`]: values }]
    )));

const hexToRgb = (hex) => {
    if (!hex.startsWith("#")) return null;
    hex = hex.substring(1);

    let hexParts = hex.split("");
    const originalLength = hexParts.length;
    hexParts = hexParts.length === 3
        ? hexParts
        : hexParts.reduce((newHexParts, part, i) => {
            const placeIndex = i % 2 === 1 ? newHexParts.length - 1 : newHexParts.length;
            const base = newHexParts[placeIndex] ?? "";
            newHexParts[placeIndex] = base + part;
            return newHexParts;
        }, []);

    if (hexParts.length !== 3) return null;

    return [
        parseInt(originalLength === 3 ? hexParts[0] + hexParts[0] : hexParts[0], 16),
        parseInt(originalLength === 3 ? hexParts[1] + hexParts[1] : hexParts[0], 16),
        parseInt(originalLength === 3 ? hexParts[2] + hexParts[2] : hexParts[0], 16)
    ].join(" ");
};

module.exports = plugin(function ({ matchUtilities, theme }) {
    const textShadow = theme("textShadow", {});

    matchUtilities({

        "text-shadow": (value) => ({
            "--tw-text-shadow-color": "0 0 0",
            "--tw-text-shadow-opacity": "0.2",
            "text-shadow": value
        })

    }, { values: textShadow });

    matchUtilities({

        "text-shadow-opacity": (value) => ({
            "--tw-text-shadow-opacity": value
        })

    }, { values: theme("opacity") });

    matchUtilities({

        "text-shadow": (value) => {
            value = value.startsWith("#") ? hexToRgb(value) : value;

            return {
                "--tw-text-shadow-color": value
            };
        }

    }, { values: flattenColorPalette(theme("colors")) });

},
    {
        theme: {
            textShadow: {
                "sm": "0 1px 2px 0 rgb(var(--tw-text-shadow-color) / var(--tw-text-shadow-opacity))",
                "DEFAULT": "0 1px 3px rgb(var(--tw-text-shadow-color) / var(--tw-text-shadow-opacity)), 0 1px 2px rgb(var(--tw-text-shadow-color) / var(--tw-text-shadow-opacity))",
                "md": "0 4px 6px rgb(var(--tw-text-shadow-color) / var(--tw-text-shadow-opacity)), 0 2px 4px rgb(var(--tw-text-shadow-color) / var(--tw-text-shadow-opacity))",
                "lg": "0 10px 15px rgb(var(--tw-text-shadow-color) / var(--tw-text-shadow-opacity)), 0 4px 6px rgb(var(--tw-text-shadow-color) / var(--tw-text-shadow-opacity))",
                "xl": "0 20px 25px rgb(var(--tw-text-shadow-color) / var(--tw-text-shadow-opacity)), 0 8px 10px rgb(var(--tw-text-shadow-color) / var(--tw-text-shadow-opacity))",
                "2xl": "0 25px 50px rgb(var(--tw-text-shadow-color) / var(--tw-text-shadow-opacity))",
                "none": "none",
            },
        }
    }
);
