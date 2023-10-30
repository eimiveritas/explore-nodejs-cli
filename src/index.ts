#!/usr/bin/env node

import express from "express";
import yargs from "yargs/yargs";
import { Command } from "commander";

const app = express();
// const argv = await yargs
//   .usage("usage stuff")
//   .option("l", {
//     alias: "language",
//     describe: "Translate to language",
//     type: "string",
//     demandOption: false,
//   })
//   .option("s", {
//     alias: "sentence",
//     describe: "Sentence to be translated",
//     type: "string",
//     demandOption: false,
//   })
//   .option("port", { type: "number", demandOption: true })
//   .help(true).argv;

// const argv = yargs(process.argv.slice(2)).command('serve', "Start the server.", (yargs: Argv) => {
//   return yargs.option('port', {
//       describe: "Port to bind on",
//       default: "5000",
//   }).option('verbose', {
//       alias: 'v',
//       default: false,
//   })
// }).argv;

// const argv = require('yargs/yargs')(process.argv.slice(2)).options({
//   port: { describe: "Port to bind on",
//   default: "5000", },
// }).argv;

const program = new Command();

program
  .version("1.0.0")
  .option('-p, --port <port>', 'Specify the port number')

program.parse(process.argv);

const options = program.opts();

console.log(options)

app.get("/", (req, res) => {
  res.send("Hello, eimiserver!");
});

app.listen(options.port, () => {
  console.log(`Server is running on port ${options.port}`);
});
