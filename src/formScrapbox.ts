import type { Page } from '@progfay/scrapbox-parser';
import { root } from 'mdast-builder';

export const fromScrapbox = (_page: Page) => {
  return root();
};
