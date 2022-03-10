import { newSpecPage } from '@stencil/core/testing';
import { GMotto } from '../g-motto';

describe('g-motto', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [GMotto],
      html: `<g-motto></g-motto>`,
    });
    expect(page.root).toEqualHtml(`
      <g-motto>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </g-motto>
    `);
  });
});
