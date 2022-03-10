import { newE2EPage } from '@stencil/core/testing';

describe('g-page-number', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<g-page-number></g-page-number>');

    const element = await page.find('g-page-number');
    expect(element).toHaveClass('hydrated');
  });
});
