import converter from './converter/converter.js';
import enAtbash from './enAtbash/enAtbash.js';

const decode = {
  A: enAtbash,
  C0: converter(-1),
  C1: converter(1),
  R0: converter(-8),
  R1: converter(8),
};

const modem = (text, config) => {
  return decode[config](text);
};

export default modem;
