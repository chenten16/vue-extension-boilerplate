const crx3 = require('crx3');
const path = require('path');
const fs = require('fs').promises; // Use promises-based version of fs
const packageJson = require('./package.json');

const manifestPath = path.join('./dist', 'manifest.json');
const name = packageJson.name;

console.log(`Building '${name}' with manifest from ${manifestPath}`);

async function buildExtension() {
  try {
    const extensionPath = path.join('dist', name + '.crx');
    await fs.rm(extensionPath, { force: true });
    await crx3([manifestPath], {
      keyPath: path.join('secrets', 'private-key.pem'),
      crxPath: extensionPath,
    });
    console.log(`Extension package written to ${extensionPath}`);
  } catch (errorMsg) {
    console.error(`Error: ${errorMsg}`);
    return 1;
  }
}

buildExtension();
