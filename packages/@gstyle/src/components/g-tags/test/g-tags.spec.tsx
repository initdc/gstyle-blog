import { newSpecPage } from '@stencil/core/testing';
import { GTags } from '../g-tags';

describe('g-tags', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [GTags],
      html: `<g-tags></g-tags>`,
    });
    expect(page.root).toEqualHtml(`
      <g-tags>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </g-tags>
    `);
  });
});
