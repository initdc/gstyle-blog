import { newE2EPage } from '@stencil/core/testing';

describe('g-tags', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<g-tags></g-tags>');

    const element = await page.find('g-tags');
    expect(element).toHaveClass('hydrated');
  });
});
