import fs from 'fs';
import { Transform, pipeline } from 'stream';
import modem from './modem/modem.js';

export const validateInputAndOutput = (input, output) => {
  const validate = (fileName, fileType) => {
    if (fileName) {
      if (!fs.existsSync(fileName)) {
        console.error('Error: file does not exist.');
        process.exit(1);
      }

      try {
        const type = fileType === 'input' ? fs.constants.R_OK : fs.constants.W_OK;
        fs.accessSync(fileName, type);
      } catch (err) {
        console.error('Error: file permission.', err);
        process.exit(1);
      }
    }
  };

  validate(input, 'input');
  validate(output, 'output');
};

const transformData = (config) => {
  return new Transform({
    transform(chunk, encoding, cb) {
      const str = chunk.toString('utf8');
      try {
        cb(null, modem(str, config));
      } catch (err) {
        cb(err);
      }
    },
  });
};

export const useStream = (input, output, config) => {
  pipeline(
    input ? fs.createReadStream(input) : process.stdin,

    ...config.map(transformData),

    output ? fs.createWriteStream(output, { flags: 'a' }) : process.stdout,

    (err) => {
      if (err) {
        console.error('Pipeline failed.', err);
      } else {
        console.log('Operation succeeded!');
      }
    }
  );
};
