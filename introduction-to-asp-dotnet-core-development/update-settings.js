import fs from 'fs';
import path from 'path';

const scriptDirectory = '/workspace/dotnet-curriculum/introduction-to-asp-dotnet-core-development/my-first-app/Properties';
const filePath = path.join(scriptDirectory, './launchSettings.json');
const iisPort = '47901';
const httpPort = '5055';
const httpsPort = '5060';

try {
    let iisUrl = `http://localhost:${iisPort}`;
    let httpUrl = `http://localhost:${httpPort}`;
    let httpsUrl = `https://localhost:${httpsPort}`;
    
    if (process.env.GITPOD_WORKSPACE_URL) {
        const gitpodName = process.env.GITPOD_WORKSPACE_URL.replace('https://', '')
        iisUrl = `http://${iisPort}-${gitpodName}`;
        httpUrl = `http://${httpPort}-${gitpodName}`;
        httpsUrl = `https://${httpsPort}-${gitpodName}`;
    } else if (process.env.CODESPACE_NAME) {
        const codespaceDomain = process.env.GITHUB_CODESPACES_PORT_FORWARDING_DOMAIN || 'app.github.dev';
        iisUrl = `http://${process.env.CODESPACE_NAME}-${iisPort}.${codespaceDomain}`;
        httpUrl = `http://${process.env.CODESPACE_NAME}-${httpPort}.${codespaceDomain}`;
        httpsUrl = `https://${process.env.CODESPACE_NAME}-${httpsPort}.${codespaceDomain}`;
    }
    
    const data = fs.readFileSync(filePath, 'utf8').trim();
    const launchSettings = JSON.parse(data);

    if (launchSettings.iisSettings.iisExpress) {
        launchSettings.iisSettings.iisExpress.applicationUrl = iisUrl;
    }

    if (launchSettings.profiles.http) {
        launchSettings.profiles.http.applicationUrl = httpUrl;
    }

    if (launchSettings.profiles.https) {
        launchSettings.profiles.https.applicationUrl = `${httpsUrl};${httpUrl}`;
    }

    fs.writeFileSync(filePath, JSON.stringify(launchSettings, null, 2), 'utf8');

    console.log('Launch settings updated!');
} catch (err) {
    console.error(`Error: ${err.message}`);
}
