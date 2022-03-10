import { newSpecPage } from '@stencil/core/testing';
import { GCard } from '../g-card';

describe('g-card', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [GCard],
      html: `<g-card></g-card>`,
    });
    expect(page.root).toEqualHtml(`
      <g-card>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </g-card>
    `);
  });
});
