import { newSpecPage } from '@stencil/core/testing';
import { GModal } from '../g-modal';

describe('g-modal', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [GModal],
      html: `<g-modal></g-modal>`,
    });
    expect(page.root).toEqualHtml(`
      <g-modal>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </g-modal>
    `);
  });
});
