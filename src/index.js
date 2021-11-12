import { useStream, validateInputAndOutput } from './stream.js';
import commander from './commander.js';

const { config, input, output } = commander();

validateInputAndOutput(input, output);
useStream(input, output, config);
