import { newSpecPage } from '@stencil/core/testing';
import { GHeader } from '../g-header';

describe('g-header', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [GHeader],
      html: `<g-header></g-header>`,
    });
    expect(page.root).toEqualHtml(`
      <g-header>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </g-header>
    `);
  });
});
