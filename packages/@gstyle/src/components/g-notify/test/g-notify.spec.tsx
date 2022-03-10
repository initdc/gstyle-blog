import { newSpecPage } from '@stencil/core/testing';
import { GNotify } from '../g-notify';

describe('g-notify', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [GNotify],
      html: `<g-notify></g-notify>`,
    });
    expect(page.root).toEqualHtml(`
      <g-notify>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </g-notify>
    `);
  });
});
