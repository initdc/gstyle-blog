import { newE2EPage } from '@stencil/core/testing';

describe('g-header', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<g-header></g-header>');

    const element = await page.find('g-header');
    expect(element).toHaveClass('hydrated');
  });
});
