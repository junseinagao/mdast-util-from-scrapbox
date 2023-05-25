import { u } from 'unist-builder';
import { match, P } from 'ts-pattern';
import { type Node, type StrongImageNode, type StrongIconNode } from '@progfay/scrapbox-parser';
import type { Image, Paragraph, PhrasingContent } from 'mdast';
import type { ImageNode } from '@progfay/scrapbox-parser';
import type { IconNode } from '@progfay/scrapbox-parser';
import type { LinkNode } from '@progfay/scrapbox-parser';
import type { HashTagNode } from '@progfay/scrapbox-parser';
import type { InlineCode } from 'mdast';
import type { CodeNode } from '@progfay/scrapbox-parser';
import type { Link } from 'mdast';
import type { Text } from 'mdast';
import type { CommandLineNode } from '@progfay/scrapbox-parser';
import type { BlankNode } from '@progfay/scrapbox-parser';
import type { PlainNode } from '@progfay/scrapbox-parser';
import type { HelpfeelNode } from '@progfay/scrapbox-parser';
import type { GoogleMapNode } from '@progfay/scrapbox-parser';
import type { FormulaNode } from '@progfay/scrapbox-parser';
import type { Line } from '@progfay/scrapbox-parser';

const convertImageNodeToMdast = (node: StrongImageNode | ImageNode): Image => {
  return u('image', { url: node.src });
};

const convertIconNodeToMdast = (node: IconNode | StrongIconNode): Text => {
  return u('text', `(${node.path})`);
};

const convertLinkNodeToMdast = (node: LinkNode): Link => {
  return u('link', { url: node.href, title: node.content }, [u('text', node.content)]);
};

const convertHashTagNodeToMdast = (node: HashTagNode): Link => {
  return u('link', { url: node.href, title: node.raw }, [u('text', node.raw)]);
};

const convertInlineCodeToMdast = (node: CodeNode | CommandLineNode): InlineCode => {
  return u('inlineCode', node.text);
};

const convertPlainToMdast = (node: PlainNode | BlankNode): Text => {
  return u('text', node.text);
};

const convertNoSupportNodeToMdast = (node: HelpfeelNode | GoogleMapNode | FormulaNode): Text => {
  return u('text', node.raw);
};

const convertNodeToMdast = (node: Node) =>
  match(node)
    .with({ type: P.union('quote', 'strong', 'decoration', 'numberList') }, (node) => {
      return u('text', node.raw) as Text; // TODO FIXME.
    })
    .with({ type: P.union('strongImage', 'image') }, convertImageNodeToMdast)
    .with({ type: P.union('strongIcon', 'icon') }, convertIconNodeToMdast)
    .with({ type: 'link' }, convertLinkNodeToMdast)
    .with({ type: 'hashTag' }, convertHashTagNodeToMdast)
    .with({ type: 'code' }, convertInlineCodeToMdast)
    .with({ type: 'commandLine' }, convertInlineCodeToMdast)
    .with({ type: P.union('plain', 'blank') }, convertPlainToMdast)
    .with({ type: 'helpfeel' }, convertNoSupportNodeToMdast)
    .with({ type: 'googleMap' }, convertNoSupportNodeToMdast)
    .with({ type: 'formula' }, convertNoSupportNodeToMdast)
    .exhaustive();

const convertLineToMdast = (line: Line): Paragraph => {
  const children: Array<PhrasingContent> = line.nodes.map(convertNodeToMdast);
  return u('paragraph', children);
};

export {
  convertImageNodeToMdast,
  convertIconNodeToMdast,
  convertLinkNodeToMdast,
  convertHashTagNodeToMdast,
  convertInlineCodeToMdast,
  convertPlainToMdast,
  convertNoSupportNodeToMdast,
  convertNodeToMdast,
  convertLineToMdast,
};
