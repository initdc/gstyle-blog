import { newSpecPage } from '@stencil/core/testing';
import { GList } from '../g-list';

describe('g-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [GList],
      html: `<g-list></g-list>`,
    });
    expect(page.root).toEqualHtml(`
      <g-list>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </g-list>
    `);
  });
});
