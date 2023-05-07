import { fromScrapbox } from '../src/formScrapbox.js';
import { loadTestTemplateByFileName } from './helpers/loadTemplates.js';

describe('fromScrapbox', () => {
  describe('get an empty string', () => {
    it('return root', () => {
      expect(fromScrapbox('')).toEqual({});
    });
  });

  const basicTestCases = [
    'blockquote',
    'code',
    'codeblock',
    'heading',
    'hr',
    'image',
    'italic',
    'link-includes-image',
    'link',
    'list-strong-style-text',
    'list',
    'paragraph',
    'strike',
    'strong-italic',
    'strong',
    'table',
  ];

  describe.each(basicTestCases)('basic literal case', (fileName) => {
    test(`"${fileName}" can convert into mdast`, async () => {
      const { input, expect: result } = await loadTestTemplateByFileName(fileName);
      expect(input).toEqual(result);
    });
  });
});
