import { newSpecPage } from '@stencil/core/testing';
import { GFooter } from '../g-footer';

describe('g-footer', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [GFooter],
      html: `<g-footer></g-footer>`,
    });
    expect(page.root).toEqualHtml(`
      <g-footer>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </g-footer>
    `);
  });
});
