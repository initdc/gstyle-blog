import { newSpecPage } from '@stencil/core/testing';
import { GNav } from '../g-nav';

describe('g-nav', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [GNav],
      html: `<g-nav></g-nav>`,
    });
    expect(page.root).toEqualHtml(`
      <g-nav>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </g-nav>
    `);
  });
});
