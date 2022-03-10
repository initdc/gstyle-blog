import { newSpecPage } from '@stencil/core/testing';
import { GPreNext } from '../g-pre-next';

describe('g-pre-next', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [GPreNext],
      html: `<g-pre-next></g-pre-next>`,
    });
    expect(page.root).toEqualHtml(`
      <g-pre-next>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </g-pre-next>
    `);
  });
});
