import { newE2EPage } from '@stencil/core/testing';

describe('g-line', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<g-line></g-line>');

    const element = await page.find('g-line');
    expect(element).toHaveClass('hydrated');
  });
});
