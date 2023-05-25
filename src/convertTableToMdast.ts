import type { Node, Table as ScrapboxTable } from '@progfay/scrapbox-parser';
import type { TableCell, Table, TableRow } from 'mdast';
import { u } from 'unist-builder';
import { convertNodeToMdast } from './convertLineToMdast.js';

const convertNodeToMdastTableCell = (node: Node) => {
  // Scrapboxのテーブルには'------'が必ず含まれるので削除する
  // remove scrapbox table syntax '------'.
  if (node.type === 'plain' && node.text === '------') return undefined;
  return convertNodeToMdast(node);
};

const convertNodesToMdastTableCell = (nodes: Array<Node>): TableCell => {
  const mdast = nodes.map(convertNodeToMdastTableCell);
  // convertNodeToMdastTableCell が '------' を undefined に変換してるので取り除く
  const children = mdast.filter((obj): obj is ReturnType<typeof convertNodeToMdast> => typeof obj !== 'undefined');
  return u('tableCell', children);
};

const convertNodesToMdastTabelRow = (nodesArray: Array<Array<Node>>): TableRow => {
  const children = nodesArray.map(convertNodesToMdastTableCell);
  return u('tableRow', children);
};

const convertTableToMdast = (table: ScrapboxTable): Table => {
  const children = table.cells.map(convertNodesToMdastTabelRow);
  const length = children[0]?.children.length ?? 0;
  const align = Array.from({ length }, () => null);
  return u('table', { align }, children);
};

export { convertTableToMdast };
