import { newSpecPage } from '@stencil/core/testing';
import { GHero } from '../g-hero';

describe('g-hero', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [GHero],
      html: `<g-hero></g-hero>`,
    });
    expect(page.root).toEqualHtml(`
      <g-hero>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </g-hero>
    `);
  });
});
