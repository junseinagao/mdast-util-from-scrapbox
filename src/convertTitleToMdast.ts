import type { Title } from '@progfay/scrapbox-parser';
import type { Heading, Text } from 'mdast';
import { u } from 'unist-builder';

const convertTitleToMdast = (title: Title): Heading => {
  const children: [Text] = [u('text', title.text)];
  return u('heading', { depth: 1 as const }, children);
};

export { convertTitleToMdast };
