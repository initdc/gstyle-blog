import { newSpecPage } from '@stencil/core/testing';
import { GLine } from '../g-line';

describe('g-line', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [GLine],
      html: `<g-line></g-line>`,
    });
    expect(page.root).toEqualHtml(`
      <g-line>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </g-line>
    `);
  });
});
