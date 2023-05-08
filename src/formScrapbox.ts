import { u, type ChildrenOrValue } from 'unist-builder';
import { parse } from '@progfay/scrapbox-parser';
import { match } from 'ts-pattern';

export const fromScrapbox = (input: string) => {
  const blocks = parse(input, { hasTitle: false });
  const children: ChildrenOrValue = [];
  for (const block of blocks) {
    match(block)
      .with({ type: 'title' }, (block) => {
        children.push(u('heading', { depth: 1 }, [u('text', block.text)]));
      })
      .with({ type: 'codeBlock' }, ({ content, fileName }) => {
        const result = fileName.match(/\((\w+)\)$/);
        const lang = result?.[1] ?? null;
        children.push(u('code', { lang, meta: null }, content));
      })
      .with({ type: 'table' }, (_) => {
        // no-op
      })
      .with({ type: 'line' }, (block) => {
        const { nodes } = block;
        for (const node of nodes) {
          match(node)
            .with({ type: 'quote' }, (node) => {
              children.push(u('blockquote', [u('paragraph', node.raw)]));
            })
            .with({ type: 'blank' }, (_node) => {
              children.push(u('paragraph', [u('text', '')]));
            })
            .with({ type: 'plain' }, (node) => {
              children.push(u('paragraph', [u('text', node.text)]));
            })
            .otherwise(() => {
              // no-op
            });
        }
      })
      .exhaustive();
  }
  const root = u('root', children);

  return root;
};
