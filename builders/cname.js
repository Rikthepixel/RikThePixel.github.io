import fs from "fs/promises";

const generate = async () => {
    const cwd = process.cwd();
    const packageJsonLocation = `${cwd}/package.json`;
    let packageContents;
    try {
        const packageFile = await fs.open(packageJsonLocation, "r");
        packageContents = await packageFile.readFile();
    } catch (err) {
        console.log("❌ CNAME: Failed to open/read package.json");
        process.exit(1);
    }

    let packageJSON;
    try {
        packageJSON = JSON.parse(packageContents.toString());
    } catch {
        console.log("❌ CNAME: JSON stringify failed");
        process.exit(1);
    }

    const homepage = packageJSON.homepage;
    if (!homepage) {
        console.log(`❌ No homepage set in ${packageJsonLocation}`);
        process.exit(1);
    }

    let url;
    try {
        url = new URL(homepage);
    } catch {
        console.log("❌ CNAME: Invalid homepage");
        process.exit(1);
    }

    try {
        await fs.writeFile(`${cwd}/dist/CNAME`, url.host);
    } catch {
        console.log(`❌ CNAME: Failed to write ${url.host} to ${cwd}/dist/CNAME`);
        process.exit(1);
    }

    console.log("✅ CNAME: file succesfully created");
};

generate();