import __helpers from '@freecodecamp/freecodecamp-os/.freeCodeCamp/tooling/test-utils.js';
import { Babeliser } from 'babeliser';

export async function babeliser(codeString) {
  return new Babeliser(codeString);
}
