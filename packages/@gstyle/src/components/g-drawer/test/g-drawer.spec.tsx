import { newSpecPage } from '@stencil/core/testing';
import { GDrawer } from '../g-drawer';

describe('g-drawer', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [GDrawer],
      html: `<g-drawer></g-drawer>`,
    });
    expect(page.root).toEqualHtml(`
      <g-drawer>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </g-drawer>
    `);
  });
});
