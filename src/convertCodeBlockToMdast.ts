import type { CodeBlock } from '@progfay/scrapbox-parser';
import type { Code } from 'mdast';
import { u } from 'unist-builder';

const convertCodeBlockToMdast = (codeBlock: CodeBlock): Code => {
  const { fileName, content } = codeBlock;
  const result = fileName.match(/\((\w+)\)$/);
  const lang = result?.[1] ?? null;
  return u('code', { lang, meta: null }, content);
};

export { convertCodeBlockToMdast };
