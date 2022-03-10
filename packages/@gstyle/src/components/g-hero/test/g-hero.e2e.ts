import { newE2EPage } from '@stencil/core/testing';

describe('g-hero', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<g-hero></g-hero>');

    const element = await page.find('g-hero');
    expect(element).toHaveClass('hydrated');
  });
});
