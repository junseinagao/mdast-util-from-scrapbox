import path from 'node:path';
import fs from 'node:fs/promises';

import { parse } from '@progfay/scrapbox-parser';
import { inspect } from 'node:util';
import { createTestExpect } from './utils.js';

describe('how to covert this input into scrapbox parser object', () => {
  it('blockquote-with-deco', async () => {
    const fileName = 'blockquote-with-deco';
    const input = (await fs.readFile(path.resolve(`test/fixtures/scrapbox/${fileName}.txt`))).toString();
    const output = parse(input, { hasTitle: false });
    console.log(inspect(input, { showHidden: false, depth: null }));
    console.log(inspect(output, { showHidden: false, depth: null }));
  });
});

describe('how to convert this input into mdast', () => {
  it('blockquote-with-deco', async () => {
    const fileName = 'blockquote-with-deco';
    const input = (await fs.readFile(path.resolve(`test/fixtures/md/${fileName}.md`))).toString();
    const output = createTestExpect(input);
    console.log(inspect(input, { showHidden: false, depth: null }));
    console.log(inspect(output, { showHidden: false, depth: null }));
  });
});

describe('how to covert this input into scrapbox parser object', () => {
  it('list', async () => {
    const fileName = 'list';
    const input = (await fs.readFile(path.resolve(`test/fixtures/scrapbox/${fileName}.txt`))).toString();
    const output = parse(input, { hasTitle: false });
    console.log(inspect(input, { showHidden: false, depth: null }));
    console.log(inspect(output, { showHidden: false, depth: null }));
  });
});

describe('how to convert this input into mdast', () => {
  it('list', async () => {
    const fileName = 'list';
    const input = (await fs.readFile(path.resolve(`test/fixtures/md/${fileName}.md`))).toString();
    const output = createTestExpect(input);
    console.log(inspect(input, { showHidden: false, depth: null }));
    console.log(inspect(output, { showHidden: false, depth: null }));
  });
});

describe('how to covert this input into scrapbox parser object', () => {
  it('list-strong-style-text', async () => {
    const fileName = 'list-strong-style-text';
    const input = (await fs.readFile(path.resolve(`test/fixtures/scrapbox/${fileName}.txt`))).toString();
    const output = parse(input, { hasTitle: false });
    console.log(inspect(input, { showHidden: false, depth: null }));
    console.log(inspect(output, { showHidden: false, depth: null }));
  });
});

describe('how to convert this input into mdast', () => {
  it('list-strong-style-text', async () => {
    const fileName = 'list-strong-style-text';
    const input = (await fs.readFile(path.resolve(`test/fixtures/md/${fileName}.md`))).toString();
    const output = createTestExpect(input);
    console.log(inspect(input, { showHidden: false, depth: null }));
    console.log(inspect(output, { showHidden: false, depth: null }));
  });
});

describe('how to covert this input into scrapbox parser object', () => {
  it('complex-deco-in-line', async () => {
    const fileName = 'complex-deco-in-line';
    const input = (await fs.readFile(path.resolve(`test/fixtures/scrapbox/${fileName}.txt`))).toString();
    const output = parse(input, { hasTitle: false });
    console.log(inspect(input, { showHidden: false, depth: null }));
    console.log(inspect(output, { showHidden: false, depth: null }));
  });
});

describe('how to convert this input into mdast', () => {
  it('complex-deco-in-line', async () => {
    const fileName = 'complex-deco-in-line';
    const input = (await fs.readFile(path.resolve(`test/fixtures/md/${fileName}.md`))).toString();
    const output = createTestExpect(input);
    console.log(inspect(input, { showHidden: false, depth: null }));
    console.log(inspect(output, { showHidden: false, depth: null }));
  });
});
describe('how to covert this input into scrapbox parser object', () => {
  it('table', async () => {
    const fileName = 'table';
    const input = (await fs.readFile(path.resolve(`test/fixtures/scrapbox/${fileName}.txt`))).toString();
    const output = parse(input, { hasTitle: false });
    console.log(inspect(input, { showHidden: false, depth: null }));
    console.log(inspect(output, { showHidden: false, depth: null }));
  });
});

describe('how to convert this input into mdast', () => {
  it('table', async () => {
    const fileName = 'table';
    const input = (await fs.readFile(path.resolve(`test/fixtures/md/${fileName}.md`))).toString();
    const output = createTestExpect(input);
    console.log(inspect(input, { showHidden: false, depth: null }));
    console.log(inspect(output, { showHidden: false, depth: null }));
  });
});
