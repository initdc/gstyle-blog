import { newSpecPage } from '@stencil/core/testing';
import { GSearch } from '../g-search';

describe('g-search', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [GSearch],
      html: `<g-search></g-search>`,
    });
    expect(page.root).toEqualHtml(`
      <g-search>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </g-search>
    `);
  });
});
