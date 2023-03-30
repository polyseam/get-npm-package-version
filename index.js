const core = require('@actions/core');
const github = require('@actions/github');
const fs = require('fs')
const path = require('path')


try {
    // `pathToPackageJson` input defined in action metadata file
    const pathToPackageJson = core.getInput('path-to-json');
    console.log(`attempting to parse ${pathToPackageJson}`);

    fs.readFile(
        path.join(process.env.GITHUB_WORKSPACE, pathToPackageJson), 'utf8', (err, data) => {
            if (!err) {
                const result = JSON.parse(data);
                result?.version ? core.setOutput("version", result.version) : core.setFailed(`unable to parse version from ${pathToPackageJson}`);
            } else {
                core.setFailed(`failed to read package.json at "${pathToPackageJson}"`);
            }
        }
    )
} catch (error) {
    core.setFailed(error.message);
}