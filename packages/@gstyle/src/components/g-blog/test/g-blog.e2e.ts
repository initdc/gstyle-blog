import { newE2EPage } from '@stencil/core/testing';

describe('g-blog', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<g-blog></g-blog>');

    const element = await page.find('g-blog');
    expect(element).toHaveClass('hydrated');
  });
});
