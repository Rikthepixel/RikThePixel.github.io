const path = require("path");

/** @type {(text: string) => string} */
const toIdString = (text) => {
    return text
        .replace(/[./_=]/g, "-")
        .toLowerCase();
};

const fileMap = new Map();

module.exports = {
    memo: true,
    svgoConfig: {
        plugins: [
            {
                name: "prefixIds",
                params: {
                    prefix: (node, info) => {
                        let idPrefix = fileMap.get(info.path);
                        if (!idPrefix) {
                            const encodedText = Buffer
                                .from(path.basename(info.path) + Math.floor(Math.random() * 99999))
                                .toString("base64");

                            idPrefix = toIdString(encodedText);
                            fileMap.set(info.path, idPrefix);
                        }



                        return idPrefix;
                    }
                }
            }
        ]
    }
};