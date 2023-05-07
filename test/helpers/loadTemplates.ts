import path from 'node:path';
import fs from 'node:fs/promises';
import { fromMarkdown } from 'mdast-util-from-markdown';
import { fromScrapbox } from '../../src/formScrapbox.js';
import { removePosition } from 'unist-util-remove-position';

export const loadTestTemplateByFileName = async (fileName: string) => {
  const scrapboxText = (await fs.readFile(path.resolve(`test/fixtures/scrapbox/${fileName}.txt`))).toString();

  const input = fromScrapbox(scrapboxText);
  const markdownText = (await fs.readFile(path.resolve(`test/fixtures/md/${fileName}.md`))).toString();
  const _expect = fromMarkdown(markdownText);
  // remove position field
  const expect = removePosition(_expect, { force: true });
  return { input, expect };
};
