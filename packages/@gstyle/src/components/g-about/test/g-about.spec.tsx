import { newSpecPage } from '@stencil/core/testing';
import { GAbout } from '../g-about';

describe('g-about', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [GAbout],
      html: `<g-about></g-about>`,
    });
    expect(page.root).toEqualHtml(`
      <g-about>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </g-about>
    `);
  });
});
