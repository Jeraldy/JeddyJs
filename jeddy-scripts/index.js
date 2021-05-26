#!/usr/bin/env node
var args = process.argv.splice(2)[0]
const fse = require('fs-extra');
var exec = require('child_process').exec;

switch (args) {
    case "start":
        const srcDir = `node_modules/jeddy-types`;
        const destDir = `node_modules/@types/jeddy`;
        fse.copySync(srcDir, destDir, { overwrite: true }, (err) => console.error(err));
        startServer()
        break;
    case "build":
        console.log("************BUILDING STARTED************")
        buildScript()
        fse.copySync("public", "build", { overwrite: true }, (err) => console.error(err));
        break;
    default:
        break
}

function startServer() {
    var cmd = exec('webpack-dev-server --open --config webpack.dev.js');
    cmd.stdout.on('data', (data) => console.log(data));
}

function buildScript() {
    var cmd = exec('webpack --config webpack.prod.js');
    cmd.stdout.on('data', (data) => console.log(data));
}