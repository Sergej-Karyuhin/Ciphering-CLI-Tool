import fs from 'fs';
import commander from '../commander.js';
import { useStream, validateInputAndOutput } from '../stream.js';

const NODE_PATH = process.argv[0];
const APP_PATH = process.argv[0].split('RSS-task1')[0].concat(`\\src\\index`);
const INPUT_OUTPUT_PARAMS = [
  '-i',
  './text/input.txt',
  '-o',
  './text/output.txt',
];

async function readFile(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', function (err, data) {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });
}

async function checkTransform(thunkString) {
  const fileBeforeTransform = await readFile("text/output.txt");

  const { config, input, output } = commander();
  validateInputAndOutput(input, output);
  useStream(input, output, config);
      
  await new Promise(resolve => setTimeout(resolve, 1000));
  const fileAfterTransform = await readFile("text/output.txt");
  await expect(fileAfterTransform).toBe(fileBeforeTransform.concat(thunkString));
}

test('1', async () => {
  const cliArgs = [
    '-c',
    'C1-C1-R0-A',
    ...INPUT_OUTPUT_PARAMS,
  ];

  process.argv = [
    NODE_PATH,
    APP_PATH,
    ...cliArgs,
  ];

  const thunkString = `Myxn xn nbdobm. Tbnnfzb ferlm "_" nhteru!`;
  await checkTransform(thunkString);
});

test('2', async () => {
  const cliArgs = [
    '-c',
    'C1-C0-A-R1-R0-A-R0-R0-C1-A',
    ...INPUT_OUTPUT_PARAMS,
  ];

  process.argv = [
    NODE_PATH,
    APP_PATH,
    ...cliArgs,
  ];

  const thunkString = `Vhgw gw wkmxkv. Ckwwoik onauv "_" wqcnad!`;
  await checkTransform(thunkString);
});
