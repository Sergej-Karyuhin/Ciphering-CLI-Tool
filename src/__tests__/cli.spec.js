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

test('Test case #1 from description Task-1', async () => {
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

test('Test case #2 from description Task-1', async () => {
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

test('Test case #3 from description Task-1', async () => {
  const cliArgs = [
    '-c',
    'A-A-A-R1-R0-R0-R0-C1-C1-A',
    ...INPUT_OUTPUT_PARAMS,
  ];

  process.argv = [
    NODE_PATH,
    APP_PATH,
    ...cliArgs,
  ];

  const thunkString = `Hvwg wg gsqfsh. Asggous opcih "_" gmapcz!`;
  await checkTransform(thunkString);
});

test('Test case #4 from description Task-1', async () => {
  const cliArgs = [
    '-c',
    'C1-R1-C0-C0-A-R0-R1-R1-A-C1',
    ...INPUT_OUTPUT_PARAMS,
  ];

  process.argv = [
    NODE_PATH,
    APP_PATH,
    ...cliArgs,
  ];

  const thunkString = `This is secret. Message about "_" symbol!`;
  await checkTransform(thunkString);
});
