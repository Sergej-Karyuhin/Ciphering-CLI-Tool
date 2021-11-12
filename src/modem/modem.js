import converter from './converter.js';
import enAtbash from './enAtbash.js';

const decode = {
  A: enAtbash,
  C0: converter(-1),
  C1: converter(1),
  R0: converter(-8),
  R1: converter(8),
};
