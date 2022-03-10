import { newSpecPage } from '@stencil/core/testing';
import { GBlog } from '../g-blog';

describe('g-blog', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [GBlog],
      html: `<g-blog></g-blog>`,
    });
    expect(page.root).toEqualHtml(`
      <g-blog>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </g-blog>
    `);
  });
});
