import { newSpecPage } from '@stencil/core/testing';
import { GPageNumber } from '../g-page-number';

describe('g-page-number', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [GPageNumber],
      html: `<g-page-number></g-page-number>`,
    });
    expect(page.root).toEqualHtml(`
      <g-page-number>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </g-page-number>
    `);
  });
});
