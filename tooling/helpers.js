import __helpers from '@freecodecamp/freecodecamp-os/.freeCodeCamp/tooling/test-utils.js';
import { readFile, readdir } from 'fs/promises';
import { Babeliser } from 'babeliser';
import { join } from 'path';

const ROOT = '/workspace/dotnet-curriculum'

export async function babeliser(codeString) {
  return new Babeliser(codeString);
}

export async function getDirectory(path) {
  const files = await readdir(join(ROOT, path));
  return files;
}

export async function getFile(path) {
  const file = await readFile(join(ROOT, path), 'utf8');
  return file;
}
