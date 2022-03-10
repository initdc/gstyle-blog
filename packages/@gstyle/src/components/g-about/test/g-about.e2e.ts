import { newE2EPage } from '@stencil/core/testing';

describe('g-about', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<g-about></g-about>');

    const element = await page.find('g-about');
    expect(element).toHaveClass('hydrated');
  });
});
