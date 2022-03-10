import { newSpecPage } from '@stencil/core/testing';
import { GSummary } from '../g-summary';

describe('g-summary', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [GSummary],
      html: `<g-summary></g-summary>`,
    });
    expect(page.root).toEqualHtml(`
      <g-summary>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </g-summary>
    `);
  });
});
