import { newE2EPage } from '@stencil/core/testing';

describe('g-search', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<g-search></g-search>');

    const element = await page.find('g-search');
    expect(element).toHaveClass('hydrated');
  });
});
