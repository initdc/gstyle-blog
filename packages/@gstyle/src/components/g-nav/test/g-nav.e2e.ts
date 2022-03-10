import { newE2EPage } from '@stencil/core/testing';

describe('g-nav', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<g-nav></g-nav>');

    const element = await page.find('g-nav');
    expect(element).toHaveClass('hydrated');
  });
});
